import React, { useRef, useState } from 'react'
import Btn from '../Commons/Btn'
import axios from 'axios'
import { styled } from "@mui/material/styles";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

type ImageUploadCardProps = {
  parentImgChange: Function;
};

function ImageUploadCard ({parentImgChange}: ImageUploadCardProps) {
  const [file, setFile] = useState<Blob>(new Blob())
  const [fileName, setFileName] = useState<string>('')
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string>('')
  const [isImgPreview, setIsImgPreview] = useState<boolean>(false)
  const fileRef = useRef<HTMLInputElement>(null);

  function handleImgChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    // 사진 미리보기
    if (event.target.files) {
      let reader = new FileReader();
      let uploadFile = event.target.files[0];
      setFile(uploadFile);
      setFileName(event.target.files[0].name);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImgPreviewUrl(reader.result);
          setIsImgPreview(true);
        }
      };
      reader.readAsDataURL(uploadFile);
      // 백엔드 API 요청
      const form = document.forms[0];
      const data = new FormData(form);
      console.log(form)
      console.log(data)
      console.log('data image', data.get('image'))
      
      const headers = {
        'Content-Type': 'multipart/form-data',
      }
      axios({
        method: 'post',
        url: "http://70.12.130.102:5000/image",
        data,
        headers,
      })
      .then((res) => {
        console.log('handleImgChange 성공', res)
        const normalImgSrc = "data:image/jpeg;base64," + res.data.normal_upscaled
        const normalVmaf = res.data.normal_vmaf_score
        const srImgSrc = "data:image/jpeg;base64," + res.data.sr_upscaled
        const srVmaf = res.data.sr_vmaf_score
        parentImgChange(normalImgSrc, srImgSrc, normalVmaf, srVmaf, true)
      })
      .catch((err) => {
        console.log('handleImgChange 에러', err)
      })
    }
  };


  function handleFileBtnClick (event: React.MouseEvent) {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }

  const TitleSpan = styled("span")({
    color: "#CEF3FF",
    fontSize: "24px",
    fontWeight: "600",
    padding: "5px",
  });

  const ContentSpan = styled("span")({
    fontSize: "18px",
    padding: "10px",
    whiteSpace: "pre-wrap",
    textAlign: 'center',
  });


  return (
    <div className="card_container">
      <div className="mb-2 font_2 main_color bold">원본</div>

      <form id="upload" action="/">
        <input
          ref={fileRef}
          type="file"
          onChange={handleImgChange}
          hidden={true}
          name="image"
        />
      </form>

      {isImgPreview && <img className="clickable full_img_card" src={imgPreviewUrl} alt="img" onClick={handleFileBtnClick} />}
      {!isImgPreview && 
        <div className="blank_card">
          <div className="clickable" onClick={handleFileBtnClick}>
            <FileUploadOutlinedIcon sx={{ color: '#5F7B84', fontSize: 70}}/>
          </div>
          <div>
            <Btn
              content="사진 업로드"
              onClick={handleFileBtnClick}
            />
          </div>
          <div className="font_3 sub_color text-center pre_wrap mt-2">
            <div>사진을 업로드 해주세요.</div>
          </div>
          {/* <ContentSpan className="upload-text">사진을 업로드 해주세요.</ContentSpan> */}
        </div>
      }
    </div>
  )
}

export default ImageUploadCard