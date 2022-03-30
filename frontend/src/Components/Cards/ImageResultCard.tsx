import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState, MouseEvent, SyntheticEvent } from "react";
import Magnify from "../Commons/Magnify";

type ImageResultCardProps = {
  title: string;
  file: Blob;
  imgPreviewUrl: string;
  isImgPreview: boolean;
  vmaf: Number;
  diff?: Number;
  setMousePos: Function;
  pos: { x: number; y: number } | undefined;
};

function ImageResultCard({ title, file, imgPreviewUrl, isImgPreview, vmaf, diff, setMousePos, pos }: ImageResultCardProps) {
  const imgRef = useRef<HTMLImageElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!imgPreviewUrl) return
    if (!imgRef.current) return
    let mouseX = event.pageX - imgRef.current?.getBoundingClientRect().left
    let mouseY = event.pageY - imgRef.current?.getBoundingClientRect().top;
    if (mouseX <= 0 || mouseX > event.currentTarget.offsetWidth || mouseY <= 0 || mouseY > event.currentTarget.offsetHeight) {
      setMousePos(undefined)
      return
    }
    setMousePos({x: mouseX, y: mouseY})
  };

  const setSize = (e: SyntheticEvent<HTMLImageElement>) => {
    setWidth(e.currentTarget.offsetWidth)
    setHeight(e.currentTarget.offsetHeight)
  }

  return (
    <div className="card_container">
      <div className="mb-2 font_2 main_color bold">{title}</div>
      {isImgPreview && (
        <span onMouseMove={handleMove}>
          <Magnify pos={pos} imgSrc={imgPreviewUrl} RATIO={3} width={`${width}px`} height={`${height}px`} />
          <img ref={imgRef} onLoad={setSize} className="full_img_card" src={imgPreviewUrl} alt="img" />
        </span>
      )}
      {!isImgPreview && (
        <div className="blank_card font_3 sub_color text-center pre_wrap">
          <div>{"사진을 업로드하면\n결과를 확인할 수 있습니다."}</div>
        </div>
      )}
      {/* {isImgPreview &&
        <div className="p-4 font_3">
          <span className="">Vmaf Score : </span>
          <span>{parseInt(vmaf)} </span> 
          <span className="main_color">{title === 'AI 필터' ? '(+'+diff+')' : ''}</span>
        </div>
      } */}
    </div>
  );
}

export default ImageResultCard;
