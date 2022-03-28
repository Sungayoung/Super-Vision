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
      // const form = document.forms[0];
      // // const data = new FormData();
      // const data = new FormData(form);
      // data.append('mode', 'LANCZOS')
      // data.append('rate', '4')
      // // data.append('image', event.target.files[0], 'input.jpg')
      // console.log('data', data)
      // console.log('data mode', data.get('mode'))
      // console.log('data rate', data.get('rate'))
      // console.log('data image', data.get('image'))
      
      // const headers = {
      //   'Content-Type': 'multipart/form-data',
      // }
      // axios({
      //   method: 'post',
      //   url: "http://70.12.130.102:5000/image/normal",
      //   data,
      //   headers,
      // })
      // .then((res) => {
      //   console.log(res)
      //   const imgSrc = "data:image/jpeg;base64," + res.data
      //   parentImgChange(imgSrc, imgSrc, true)
      // })
      // .catch((err) => {
      //   console.log(err)
      // })
      const form = document.forms[0];
      const data = new FormData(form);
      console.log(form)
      console.log(data)
      
      const headers = {
        'Content-Type': 'multipart/form-data',
      }
      axios({
        method: 'post',
        url: "http://70.12.130.102:5000/image/gan",
        data,
        headers,
      })
      .then((res) => {
        console.log(res)
        const imgSrc = "data:image/jpeg;base64," + res.data
        parentImgChange(imgSrc, imgSrc, true)
      })
      .catch((err) => {
        console.log(err)
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
      <TitleSpan>원본</TitleSpan>

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
          <ContentSpan className="upload-text">사진을 업로드 해주세요.</ContentSpan>
        </div>
      }
      <div className="p-4 font_3">Origin Image</div>
    </div>
  )
}

export default ImageUploadCard