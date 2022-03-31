import React, { useRef, useState } from 'react'
import Btn from '../Commons/Btn'
import axios from 'axios'
import { styled } from "@mui/material/styles";
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

type VideoUploadCardProps = {
  parentVideoChange: Function;
};

function VideoUploadCard ({parentVideoChange}: VideoUploadCardProps) {
  const [file, setFile] = useState<Blob>(new Blob())
  const [videoPreviewUrl, setVideoPreviewUrl] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null);

  function handleVideoChange (event: React.ChangeEvent<HTMLInputElement>) {
    event.preventDefault();

    // 사진 미리보기
    if (event.target.files) {
      let reader = new FileReader();
      let uploadFile = event.target.files[0];
      setFile(uploadFile);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setVideoPreviewUrl(reader.result);
        }
      };
      reader.readAsDataURL(uploadFile);
      // 백엔드 API 요청
    //   const form = document.forms[0];
    //   const data = new FormData(form);
    //   console.log(form)
    //   console.log(data)
    //   console.log('data image', data.get('image'))
      
    //   const headers = {
    //     'Content-Type': 'multipart/form-data',
    //   }
    //   axios({
    //     method: 'post',
    //     url: "http://70.12.130.102:5000/image",
    //     data,
    //     headers,
    //   })
    //   .then((res) => {
    //     console.log('handleImgChange 성공', res)
    //     const normalImgSrc = "data:image/jpeg;base64," + res.data.normal_upscaled
    //     const normalVmaf = res.data.normal_vmaf_score
    //     const srImgSrc = "data:image/jpeg;base64," + res.data.sr_upscaled
    //     const srVmaf = res.data.sr_vmaf_score
    //     parentImgChange(normalImgSrc, srImgSrc, normalVmaf, srVmaf, true)
    //   })
    //   .catch((err) => {
    //     console.log('handleImgChange 에러', err)
    //   })
    }
  };


  function handleFileBtnClick (event: React.MouseEvent) {
    if (fileRef.current) {
      fileRef.current.click();
    }
  }

  return (
    <div className="card_container">
      <div className="mb-2 font_2 main_color bold">원본</div>

      <form id="upload" action="/">
        <input
          ref={fileRef}
          type="file"
          onChange={handleVideoChange}
          hidden={true}
          name="video"
          accept="video/mp4,video/mkv, video/x-m4v,video/*"
        />
      </form>

      {Boolean(videoPreviewUrl) && <video className="clickable full_img_card" src={videoPreviewUrl} onClick={handleFileBtnClick} autoPlay/>}
      {!Boolean(videoPreviewUrl) && 
        <div className="blank_card">
          <div className="clickable" onClick={handleFileBtnClick}>
            <FileUploadOutlinedIcon sx={{ color: '#5F7B84', fontSize: 70}}/>
          </div>
          <div>
            <Btn
              content="비디오 업로드"
              onClick={handleFileBtnClick}
            />
          </div>
          <div className="font_3 sub_color text-center pre_wrap mt-2">
            <div>비디오를 업로드 해주세요.</div>
          </div>
        </div>
      }
    </div>
  )
}

export default VideoUploadCard