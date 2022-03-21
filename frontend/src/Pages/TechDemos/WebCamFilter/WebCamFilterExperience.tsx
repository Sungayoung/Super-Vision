import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Content from "../../../Components/Commons/Content";
import WebCamUploadCard from "../../../Components/Cards/WebCamUploadCard";
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
      <Content
        title="Try SUPER RESOLUTION on WEB CAM"
        content="실시간으로 일반 필터와 AI 필터의 웹캠 화질 개선을 느껴보세요!\n어떤 필터의 화질이 더 좋아보이나요?"
      />
      <div className="outside-card-container">
        <WebCamUploadCard videoSrc={videoSrc} toggleWebcam={toggleWebcam} />
        <ArrowRightIcon sx={{ color: "#F2FFFF", fontSize: 50 }} />
      </div>
    </div>
  );
}

export default WebCamFilterExperience;
