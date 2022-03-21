import { VideoHTMLAttributes, useEffect, useRef } from "react";
import Content from '../Commons/Content'

type PropsType = VideoHTMLAttributes<HTMLVideoElement> & {
  srcObject: MediaStream;
};

const Video = ({ srcObject, ...props }: PropsType) => {
  const refVideo = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    if (!refVideo.current) return;
    refVideo.current.srcObject = srcObject;
  }, [srcObject]);
  console.log(refVideo);
  return <video className="webcam-video" ref={refVideo} {...props} autoPlay />;
};

type ResultCardProps = {
  imgSrc: string | null,
  videoSrc: MediaStream | null,
  title: string
}

function ResultCard ({imgSrc = null, videoSrc = null, title=""}: ResultCardProps) {
  return (
    <div className="card-container">
      <Content title={title} content=""/>
      {/* { imgSrc ? <img src={imgSrc}/> : <Video srcObject={videoSrc}/>} */}
    </div>
  )
}

export default ResultCard