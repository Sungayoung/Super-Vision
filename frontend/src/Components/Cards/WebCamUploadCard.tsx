import { styled } from "@mui/material/styles";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import VideocamOutlinedIcon from "@mui/icons-material/VideocamOutlined";
import { VideoHTMLAttributes, useEffect, useRef, ChangeEvent, useState } from "react";
import "./WebCamUploadCard.css";

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

const CustomSwitch = styled((props: SwitchProps) => <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />)(
  ({ theme }) => ({
    width: 42,
    height: 22,
    padding: 0,
    "& .MuiSwitch-switchBase": {
      padding: 0,
      margin: 2,
      transitionDuration: "300ms",
      "&.Mui-checked": {
        transform: "translateX(17px)",
        color: "#fff",
        "& + .MuiSwitch-track": {
          backgroundColor: theme.palette.mode === "dark" ? "#2ECA45" : "#5F7B84",
          opacity: 1,
          border: 0,
        },
        "&.Mui-disabled + .MuiSwitch-track": {
          opacity: 0.5,
        },
      },
      "&.Mui-focusVisible .MuiSwitch-thumb": {
        color: "#33cf4d",
        border: "6px solid #fff",
      },
      "&.Mui-disabled .MuiSwitch-thumb": {
        color: theme.palette.mode === "light" ? theme.palette.grey[100] : theme.palette.grey[600],
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
      },
    },
    "& .MuiSwitch-thumb": {
      boxSizing: "border-box",
      width: 19,
      height: 19,
    },
    "& .MuiSwitch-track": {
      borderRadius: 22 / 2,
      backgroundColor: theme.palette.mode === "light" ? "#E9E9EA" : "#5F7B84",
      opacity: 1,
      transition: theme.transitions.create(["background-color"], {
        duration: 500,
      }),
    },
  })
);

const WebCamUploadDiv = styled("div")({
  width: "320px",
  height: "240px",
  borderRadius: "20px",
  border: "1.5px dashed #F2FFFF",
  overflow: "hidden",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const TitleSpan = styled("span")({
  color: "#CEF3FF",
  fontSize: "2rem",
  fontWeight: "600",
  padding: "5px",
});

type WebCamUploadCardProp = {
  videoSrc: MediaStream | null | undefined;
  toggleWebcam: Function;
};

function WebCamUploadCard({ videoSrc = null, toggleWebcam }: WebCamUploadCardProp) {
  const [ webcamOn, setWebcamOn ] = useState<boolean>(videoSrc ? true : false)
  const onChange = async (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    if (e.target.checked) {
      setWebcamOn(await toggleWebcam(true));
    } else {
      setWebcamOn(await toggleWebcam(false));

    }
  };
  return (
    <div className="card-container">
      <TitleSpan>ORIGINAL</TitleSpan>
      <FormControlLabel
        control={<CustomSwitch sx={{ m: 1 }} onChange={onChange} value={webcamOn}/>}
        label={`웹캠 ${webcamOn ? "On" : "Off"}`}
        labelPlacement="start"
      />
      
      <WebCamUploadDiv>
        {videoSrc ? 
          <Video srcObject={videoSrc} /> : 
          <>
          <VideocamOutlinedIcon sx={{ color: "#5F7B84", fontSize: 50 }} />
          <span>웹캠을 켜주세요</span> 
          </>}
      </WebCamUploadDiv>
    </div>
  );
}

export default WebCamUploadCard;
