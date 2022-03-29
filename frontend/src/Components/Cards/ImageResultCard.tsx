import { styled } from "@mui/material/styles";

type ImageResultCardProps = {
  title: string;
  file: Blob;
  imgPreviewUrl: string;
  isImgPreview: boolean;
  vmaf: Number;
  diff?: Number;
};

function ImageResultCard ({title, file, imgPreviewUrl, isImgPreview, vmaf, diff}: ImageResultCardProps) {

  return (
    <div className="card_container">
      <div className="mb-2 font_2 main_color bold">{title}</div>
      {isImgPreview && <img className="full_img_card" src={imgPreviewUrl} alt="img" />}
      {!isImgPreview && 
        <div className="blank_card font_3 sub_color text-center pre_wrap">
          <div>{"사진을 업로드하면\n결과를 확인할 수 있습니다."}</div>
        </div>
      }
      {/* {isImgPreview &&
        <div className="p-4 font_3">
          <span className="">Vmaf Score : </span>
          <span>{parseInt(vmaf)} </span> 
          <span className="main_color">{title === 'AI 필터' ? '(+'+diff+')' : ''}</span>
        </div>
      } */}
    </div>
  )
}

export default ImageResultCard