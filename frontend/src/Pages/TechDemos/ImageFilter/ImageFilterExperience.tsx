import { useState } from 'react'
import ImageUploadCard from "../../../Components/Cards/ImageUploadCard"
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import ImageResultCard from '../../../Components/Cards/ImageResultCard';
import Content from '../../../Components/Commons/Content';

function ImageFilterExperience () {
  const [file, setFile] = useState<Blob>(new Blob())
  const [imgPreviewUrl, setImgPreviewUrl] = useState<string>('')
  const [isImgPreview, setIsImgPreview] = useState<boolean>(false)
  const [normalImg, setNormalImg] = useState<string>('')
  const [ganImg, setGanImg] = useState<string>('')
  const title: string = "TRY SUPER RESOLUTION on IMAGE"
  const content: string = "이미지를 업로드해서 일반 필터와 AI 필터의 화질 개선을 직접 확인하세요!\n화질이 개선된 이미지는 다운로드가 가능합니다" 

  // function parentImgChange (file: Blob, imgPreviewUrl: string, isImgPreview: boolean): void {
  //   setFile(file)
  //   setImgPreviewUrl(imgPreviewUrl)
  //   setIsImgPreview(isImgPreview)
  //   console.log('parentImgChange', file)
  // }

  function parentImgChange (normalImg: string, ganImg: string, isImgPreview: boolean): void {
    setNormalImg(normalImg)
    setGanImg(ganImg)
    setIsImgPreview(isImgPreview)
    console.log('parentImgChange', file)
  }

  return (
    <>
      <div className="relative container">
        <div className="center">
          <Content title={title} content={content} />
          <div className="cards">
            <ImageUploadCard parentImgChange={parentImgChange} />
            <ArrowRightIcon className="m-4" sx={{ color: '#F2FFFF', fontSize: 50}}/>
            <ImageResultCard title="일반 필터" file={file} imgPreviewUrl={normalImg} isImgPreview ={isImgPreview} />
            <ImageResultCard title="AI 필터" file={file} imgPreviewUrl={ganImg} isImgPreview ={isImgPreview} />
          </div>
        </div>
      </div>
    </>
  )
}

export default ImageFilterExperience