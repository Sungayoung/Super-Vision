import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import Content from "../../../Components/Commons/Content";
import WebCamUploadCard from "../../../Components/Cards/WebCamUploadCard";
import ResultCard from "../../../Components/Cards/ResultCard";
import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import { io } from "socket.io-client";

const socketAi = io("http://70.12.130.102:5000/cnn");
const socketNormal = io("http://j6s005.p.ssafy.io:5000/normal");

const WebcamContainerDiv = styled("div")({
  display: 'flex',
  alignItems: 'center',
  // flexDirection: 'column',
  justifyContent: 'center',
  margin: '20px',
});
function WebCamFilterExperience() {
  const [videoSrc, setVideoSrc] = useState<MediaStream | null>(null);
  const [aiImageSrc, setAiImageSrc] = useState<string | undefined>(undefined);
  const [normalImageSrc, setNormalImageSrc] = useState<string | undefined>(undefined);
  const RATE = 50
  const toggleWebcam = async (data: boolean) => {
    if (data) {
      try {
        const mediaStream = await navigator.mediaDevices.getUserMedia({ video: {height: 3 * RATE, width: 4 * RATE} });
        setVideoSrc(new MediaStream([mediaStream.getVideoTracks()[0]]));
        return true;
      } catch {
        alert("비디오 소스에 접근할 수 없습니다.");
        setVideoSrc(null);

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

  // 데이터 전송받는 부분

  useEffect(() => {
    if (videoSrc) {
      socketAi.on("message", (data) => {
        let arrayBufferView = new Uint8Array(data);
        let blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        setAiImageSrc(URL.createObjectURL(blob));
      });
      socketNormal.on("message", (data) => {
        let arrayBufferView = new Uint8Array(data);
        let blob = new Blob([arrayBufferView], { type: "image/jpeg" });
        setNormalImageSrc(URL.createObjectURL(blob));
      });
    }
    else {
      socketAi.off();
      socketNormal.off();
      setAiImageSrc(undefined);
      setNormalImageSrc(undefined);
    }

  }, [videoSrc]);

  const sendImage = (canvasImg: string | undefined) => {
    let decodedImg: string = canvasImg !== undefined ? atob(canvasImg?.split(",")[1]) : "";
    let arr = [];
    for (let i = 0; i < decodedImg.length; i++) {
      arr.push(decodedImg.charCodeAt(i));
    }
    let img = new Blob([new Uint8Array(arr)], { type: "image/jpeg" });

    // 소켓으로 보내기
    socketAi.send(img);
    socketNormal.send(img)


    // setAiImageSrc(canvasImg)
    // setNormalImageSrc(canvasImg)
  };

  return (
    <div>
      <Content
        title="Try SUPER RESOLUTION on WEB CAM"
        content="실시간으로 일반 필터와 AI 필터의 웹캠 화질 개선을 느껴보세요!\n어떤 필터의 화질이 더 좋아보이나요?"
      />
      <WebcamContainerDiv>
        <WebCamUploadCard videoSrc={videoSrc} toggleWebcam={toggleWebcam} sendImage={sendImage} />
        <ArrowRightIcon sx={{ color: "#F2FFFF", fontSize: 50 }} />
        <ResultCard aiImgSrc={aiImageSrc} normalImgSrc={normalImageSrc} width="960px" height="720px" />
      </WebcamContainerDiv>
    </div>
  );
}

export default WebCamFilterExperience;
