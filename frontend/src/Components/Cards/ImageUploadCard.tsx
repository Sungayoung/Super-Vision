import React, { useEffect, useRef, useState } from "react";
import Btn from "../Commons/Btn";
import axios from "axios";
import { styled } from "@mui/material/styles";
import FileUploadOutlinedIcon from "@mui/icons-material/FileUploadOutlined";

type ImageUploadCardProps = {
  page: string;
  originImg?: string;
  parentImgChange: Function;
  showCropImgModal?: Function;
};

type DetectObj = {
  class: string;
  score: string;
  x1: string;
  x2: string;
  y1: string;
  y2: string;
}

type Size = number[]

function ImageUploadCard({ page, originImg="", parentImgChange, showCropImgModal }: ImageUploadCardProps) {
  const [file, setFile] = useState<Blob>(new Blob());
  const [fileName, setFileName] = useState<string>("");
  const fileRef = useRef<HTMLInputElement>(null);
  
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string>("");
  const [isImgPreview, setIsImgPreview] = useState<boolean>(false);
  const [originWidth, setOriginWidth] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);
  const [originHeight, setOriginHeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const [isDetected, setIsDetected] = useState<boolean>(false);
  const [detectList, setDetectList] = useState<DetectObj[]>([]);
  const [detectPathList, setDetectPathList] = useState<Path2D[]>([]);
  const [detectSizeList, setDetectSizeList] = useState<Size[]>([]);

  

  useEffect(() => {
    setImgPreviewUrl(originImg)
    if (originImg !== "") {
      setIsImgPreview(true)
    }
  }, [originImg])

  function handleImgChange(event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    // 사진 미리보기
    if (event.target.files) {
      const reader = new FileReader();
      const uploadFile = event.target.files[0];

      // 확장자 예외 처리
      if (
        String(uploadFile.type) !== "image/png" &&
        String(uploadFile.type) !== "image/jpeg" &&
        String(uploadFile.type) !== "image/jpg"
      ) {
        alert("파일 확장자는 [.png/.jpg/.jpeg] 로 끝나야 합니다.");
        return false;
      }

      // 사이즈 예외 처리
      if (uploadFile.size > 10e6) {
        alert("파일 크기는 10MB 이하로 업로드해야 합니다.");
        return false;
      }

      setFile(uploadFile);
      setFileName(event.target.files[0].name);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImgPreviewUrl(reader.result);
          setIsImgPreview(true);
          detectImage(reader.result)
        }
      };
      reader.readAsDataURL(uploadFile);

    }
  }
  
  function detectImage(imgPreviewUrl: string) {
    // 백엔드 detect API 요청
    const form = document.forms[0];
    const data = new FormData(form);
    setIsDetected(false)
  
    const headers = {
      "Content-Type": "multipart/form-data",
    };
    axios({
      method: "post",
      url: "http://70.12.130.102:5000/detect",
      data,
      headers,
    })
      .then((res) => {
        console.log("handleImgChange 성공", res);
        const image = document.querySelector("#preview_img") as HTMLImageElement
        console.log('detecting', image)
        if (image) {
          const originWidth = image.naturalWidth
          const originHeight = image.naturalHeight
          setDetectList(res.data)
          setOriginWidth(image.naturalWidth)
          setWidth(image.width)
          setOriginHeight(image.naturalHeight)
          setHeight(image.height)
          setCanvas(imgPreviewUrl, res.data, originWidth, originHeight)
        }
      })
      .catch((err) => {
        console.log("handleImgChange 에러", err);
      });
  }

  function setCanvas(imgPreviewUrl: string, detectInfo: DetectObj[], originWidth: number, originHeight: number) {
    setIsDetected(true)
    console.log('isDetected', isDetected)
    const canvas = document.getElementById('canvas') as HTMLCanvasElement
    console.log('canvas', canvas)
    if (canvas.getContext('2d')) {
        const ctx = canvas.getContext('2d');
        const imageObj = new Image();
        imageObj.onload = function () {
          canvas.width=originWidth;
          canvas.height=originHeight;
          if (ctx) {
            ctx.drawImage(imageObj, 0, 0, originWidth, originHeight);
            
            // multi boxing 처리
            $.each(detectInfo, function(key, item){
              const x = parseInt(item.x1)
              const y = parseInt(item.y1)
              const w = parseInt(item.x2)-parseInt(item.x1)
              const h = parseInt(item.y2)-parseInt(item.y1)
              
              ctx.beginPath();
              ctx.strokeStyle = '#CEF3FF';
              ctx.lineWidth = 3;
              ctx.strokeRect(x, y, w, h);
              // Text 처리 
              ctx.textBaseline = 'top';
              ctx.font="18px Pretendard-Regular";
              ctx.fillStyle = '#CEF3FF';
              ctx.fillText(item.class + ' (' + item.score.slice(0, 4) + ')', parseInt(item.x1), parseInt(item.y1) - 18);
              ctx.fill();

              const path = new Path2D();
              path.rect(x, y, w, h)
              const newDetectPathList = detectPathList
              const newDetectSizeList = detectSizeList
              detectPathList.push(path)
              detectSizeList.push([x, y, w, h])
              setDetectPathList(newDetectPathList)
              setDetectSizeList(newDetectSizeList)
            });
          }
        };
        imageObj.src = imgPreviewUrl;
        console.log('detectPathList', detectPathList)
        // console.log('imageObj', imageObj)
		}
	};

  // 디텍트된 이미지 선택시
  function handleSelectDetectedImg(event: React.MouseEvent) {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const image = document.querySelector("#preview_img") as HTMLImageElement
    // const image = new Image()
    // image.src = imgPreviewUrl
    console.log('image', image, originHeight, height)
    if (image) {
      const originWidth = image.naturalWidth
      const originHeight = image.naturalHeight
      if (canvas.getContext('2d')) {
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        ctx.drawImage(image, 0, 0, originWidth, originHeight);
        const x = event.nativeEvent.offsetX * (originWidth / width)  // 원본이미지의 x, y좌표에 맞게 재계산
        const y = event.nativeEvent.offsetY * (originHeight / height)
        let isFound = false
        let foundSize = [0, 0, 0, 0]
        let found = null
        for (let i=0; i<detectPathList.length; i++) {
          const detectPath = detectPathList[i]
          const detect = detectList[i]
          const detectSize = detectSizeList[i]
          ctx.beginPath();
          if (ctx.isPointInPath(detectPath, x, y) && (!isFound || (isFound && foundSize[2] > detectSize[2] && foundSize[3] > detectSize[3]))) {
            ctx.strokeStyle = '#5F7B84';
            ctx.lineWidth = 3;
            ctx.strokeRect(detectSize[0], detectSize[1], detectSize[2], detectSize[3]);
            ctx.fillStyle = 'rgba(0,0,0,0.3)';
            ctx.textBaseline = 'top';
            ctx.font="18px Pretendard-Regular";
            ctx.fillStyle = '#5F7B84';
            ctx.fillText(detect.class + ' (' + detect.score.slice(0, 4) + ')', parseInt(detect.x1), parseInt(detect.y1) - 18);
            ctx.fill();
            if (found) {
              ctx.strokeStyle = '#CEF3FF';
              ctx.lineWidth = 3;
              ctx.strokeRect(foundSize[0], foundSize[1], foundSize[2], foundSize[3]);
              ctx.fillStyle = 'rgba(0,0,0,0.3)';
              ctx.textBaseline = 'top';
              ctx.font="18px Pretendard-Regular";
              ctx.fillStyle = '#CEF3FF';
              ctx.fillText(found.class + ' (' + found.score.slice(0, 4) + ')', parseInt(found.x1), parseInt(found.y1) - 18);
              ctx.fill();
            }
            isFound = true
            foundSize = detectSize
            found = detect
          } else {
            ctx.strokeStyle = '#CEF3FF';
            ctx.lineWidth = 3;
            ctx.strokeRect(detectSize[0], detectSize[1], detectSize[2], detectSize[3]);
            ctx.fillStyle = 'rgba(0,0,0,0)';
            ctx.textBaseline = 'top';
            ctx.font="18px Pretendard-Regular";
            ctx.fillStyle = '#CEF3FF';
            ctx.fillText(detect.class + ' (' + detect.score.slice(0, 4) + ')', parseInt(detect.x1), parseInt(detect.y1) - 18);
            ctx.fill();
          }
        }
      }
    }
  }

  // 백엔드 필터 API 요청
  function handleClickDetectedImg(event: React.MouseEvent) {
    const canvas = document.getElementById("canvas") as HTMLCanvasElement
    const image = document.querySelector("#preview_img") as HTMLImageElement
    // image.src = imgPreviewUrl
    console.log('image', image)
    if (image) {
      const originWidth = image.naturalWidth
      const originHeight = image.naturalHeight
      if (canvas.getContext('2d')) {
        const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
        ctx.drawImage(image, 0, 0, originWidth, originHeight);
        const x = event.nativeEvent.offsetX * (originWidth / image.width)  // 원본이미지의 x, y좌표에 맞게 재계산
        const y = event.nativeEvent.offsetY * (originHeight / image.height)
        let isFound = false
        let foundSize = [0, 0, 0, 0]
        let found = null
        for (let i=0; i<detectPathList.length; i++) {
          const detectPath = detectPathList[i]
          const detect = detectList[i]
          const detectSize = detectSizeList[i]
          ctx.beginPath();
          if (ctx.isPointInPath(detectPath, x, y) && (!isFound || (isFound && foundSize[2] > detectSize[2] && foundSize[3] > detectSize[3]))) {
            isFound = true
            foundSize = detectSize
            found = detect
            console.log('detect', detect, detectList)
          }
        }
        const data = {
          coor: found
        }
        console.log('data', data)
        axios({
          method: "post",
          url: "http://70.12.130.102:5000/crop",
          data,
        })
          .then((res) => {
            console.log("handleClickDetectedImg 성공", res);
            const croppedImg = "data:image/jpeg;base64," + res.data.cropped
            const normalImg = "data:image/jpeg;base64," + res.data.normal_upscaled
            const srImg = "data:image/jpeg;base64," + res.data.sr_upscaled
            const normalVmaf = res.data.normal_vmaf_score
            const srVmaf = res.data.sr_vmaf_score
            parentImgChange(croppedImg, normalImg, srImg, normalVmaf, srVmaf, true)
          })
          .catch((err) => {
            console.log("handleClickDetectedImg 에러", err);
          });
      }
    }
  }

  function handleFileBtnClick(event: React.MouseEvent) {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }

  // 사진 업로드 클릭시 크롭 모달창 show
  function onClickUploadBtn(event: React.MouseEvent) {
    if (page === "A" && showCropImgModal) {
      showCropImgModal()
    } else if (fileRef.current) {
      fileRef.current.click();
    }
  }

  return (
    <div className="card_container">
      
      {
      <div className="mb-2 font_2 main_color bold">원본</div>
      }

      <form id="upload" action="/">
        <input ref={fileRef} type="file" onChange={handleImgChange} hidden={true} name="image" />
      </form>

      {isImgPreview && (
        <div>
          {
            <img
              id="preview_img"
              className="clickable detect_img_card"
              src={imgPreviewUrl}
              alt="img"
              onClick={onClickUploadBtn}
              // style={{visibility: "hidden", position: "fixed"}}
          />
          }
          {isDetected &&
            <canvas id='canvas' className="clickable full_img_card" onMouseMove={handleSelectDetectedImg} onClick={handleClickDetectedImg}>Your browswer does not support HTML5 canvas</canvas>
          }
        </div>
      )}
      {!isImgPreview && (
        <div className="blank_card">
          <div className="clickable" onClick={handleFileBtnClick}>
            <FileUploadOutlinedIcon sx={{ color: "#5F7B84", fontSize: 70 }} />
          </div>
          <div>
            <Btn content="사진 업로드" onClick={onClickUploadBtn} />
          </div>
          <div className="font_3 comp_color text-center pre_wrap mt-3">
            <div>10MB 이내 파일을</div>
            <div>업로드 해주세요.</div>
            <div>(jpg, jpeg, png)</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageUploadCard;
