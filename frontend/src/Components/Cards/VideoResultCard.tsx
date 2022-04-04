import { styled } from "@mui/material/styles";
import { useEffect, useRef, useState, MouseEvent, SyntheticEvent } from "react";
import Magnify from "../Commons/Magnify";

type VideoResultCardProps = {
  title: string;
  file: Blob;
  videoPreviewUrl: string;
  setMousePos: Function;
  pos: { x: number; y: number } | undefined;
};

function VideoResultCard({ title, file, videoPreviewUrl, setMousePos, pos }: VideoResultCardProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);

  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!videoPreviewUrl) return
    if (!videoRef.current) return
    let mouseX = event.pageX - videoRef.current?.getBoundingClientRect().left
    let mouseY = event.pageY - videoRef.current?.getBoundingClientRect().top;
    if (mouseX <= 0 || mouseX > event.currentTarget.offsetWidth || mouseY <= 0 || mouseY > event.currentTarget.offsetHeight) {
      setMousePos(undefined)
      return
    }
    setMousePos({x: mouseX, y: mouseY})
  };

  const setSize = (e: SyntheticEvent<HTMLVideoElement>) => {
    setWidth(e.currentTarget.offsetWidth)
    setHeight(e.currentTarget.offsetHeight)
  }

  return (
    <div className="card_container">
      <div className="mb-2 font_2 main_color bold">{title}</div>
      {Boolean(videoPreviewUrl) && (
        <span onMouseMove={handleMove}>
          <Magnify pos={pos} imgSrc={videoPreviewUrl} RATIO={3} width={`${width}px`} height={`${height}px`} />
          <video ref={videoRef} onLoad={setSize} className="full_img_card" src={videoPreviewUrl} autoPlay />
        </span>
      )}
      {!Boolean(videoPreviewUrl) && (
        <div className="blank_card font_3 sub_color text-center pre_wrap">
          <div>{"비디오를 업로드하면\n결과를 확인할 수 있습니다."}</div>
        </div>
      )}
    </div>
  );
}

export default VideoResultCard;
