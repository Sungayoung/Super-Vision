import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Content from "../../../Components/Commons/Content";
import WebCamUploadCard from "../../../Components/Cards/WebCamUploadCard";
import ResultCard from "../../../Components/Cards/ResultCard";
import { useState } from "react";

function WebCamFilterExperience() {
  const [videoSrc, setVideoSrc] = useState<MediaStream | null>(null);
  const toggleWebcam = async (data: boolean) => {
    if (data) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });
        setVideoSrc(new MediaStream([mediaStream.getVideoTracks()[0]]));
        return true;
      } catch {
        alert("비디오 소스에 접근할 수 없습니다.");
        return false;
      }
    } else {
      if (videoSrc) {
        videoSrc.getTracks()[0].stop();
        setVideoSrc(null);
      }
      return false;
    }
  };

  return (
    <div>
      <ResultCard imgSrc={null} title="일반 필터" width="640px" height="480px"/>
      <ResultCard imgSrc={null} title="AI 필터" width="640px" height="480px"/>
    </div>
  );
}

export default WebCamFilterExperience;
