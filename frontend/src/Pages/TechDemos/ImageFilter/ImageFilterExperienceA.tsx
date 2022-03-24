import { useState } from 'react'
import ImageUploadCard from "../../../Components/Cards/ImageUploadCard"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ImageResultCard from '../../../Components/Cards/ImageResultCard';
import Content from '../../../Components/Commons/Content';
import "./ImageFilterExperience.css"

function ImageFilterExperienceA () {
  const [file, setFile] = useState<Blob>(new Blob())
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string>('')
  const [isImgPreview, setIsImgPreview] = useState<boolean>(false)
  const title: string = "TRY {{SUPER_SCENERY}} FILTER"
  const content: string = "내가 제주도 가기 전 날 유채꽃이 져서 인스타그램에 자랑을 못 했다고요?\n그 꽃, 저희가 다시 피워 드립니다!" 

  function parentImgChange (file: Blob, imgPreviewUrl: string, isImgPreview: boolean): void {
    setFile(file)
    setImgPreviewUrl(imgPreviewUrl)
    setIsImgPreview(isImgPreview)
    console.log('parentImgChange')
  }

  return (
    <>
      <Content title={title} content={content} />
      <div className="cards">
        <ImageUploadCard parentImgChange={parentImgChange} />
        <ArrowRightIcon className="icon" sx={{ color: '#F2FFFF', fontSize: 50}}/>
        <ImageResultCard file={file} imgPreviewUrl={imgPreviewUrl} isImgPreview ={isImgPreview} />
      </div>
    </>
  )
}

export default ImageFilterExperienceA