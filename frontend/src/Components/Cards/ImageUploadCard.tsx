import React, { useRef, useState } from 'react'
import Btn from '../Commons/Btn'
import styles from './ImageUploadCard.module.css'
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

    if (event.target.files) {
      let reader = new FileReader();
      let uploadFile = event.target.files[0];
      setFile(uploadFile);
      setFileName(event.target.files[0].name);
      reader.onloadend = () => {
        if (typeof reader.result === "string") {
          setImgPreviewUrl(reader.result);
          setIsImgPreview(true);
          parentImgChange(uploadFile, reader.result, true)
        }
      };
      reader.readAsDataURL(uploadFile);
    }
  };

  function handleFileBtnClick (event: React.MouseEvent) {
    console.log('handleFileBtnClick')
    // event.preventDefault();
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
    <div className={styles.cardContainer+' m-4'}>
      <TitleSpan>BEFORE</TitleSpan>
      <input
        ref={fileRef}
        type="file"
        onChange={handleImgChange}
        hidden={true}
      />
      {isImgPreview && <img className="clickable upload-card-img" src={imgPreviewUrl} alt="img" onClick={handleFileBtnClick} />}
      {!isImgPreview && 
        <div className="upload-card">
          <div className="icon clickable" onClick={handleFileBtnClick}>
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
    </div>
  )
}

export default ImageUploadCard