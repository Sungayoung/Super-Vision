import { DragEvent, MouseEvent } from "react";
import { styled } from "@mui/material/styles";
import { Box, IconButton } from "@mui/material";
import { useState } from "react";
import beforeImage from "../../Assets/Image/beforeImage.png";
import afterImage from "../../Assets/Image/afterImage.png";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

const PageDiv = styled("div")({
  position: "relative",
  height: "100%",
  width: "99.5vw",
  background: `url(${afterImage})`,
  backgroundSize: "cover",
});

function HomeBeforeAfter() {
  const [imgWidth, setImgWidth] = useState<number>(window.innerWidth / 2);
  const buttonStyle = {
    position: "absolute",
    left: imgWidth,
    top: "50%",
    transform: "translate(-50%)",
    cursor: "move",
    transitionProperty: "all",
    transitionDuration: "0.5s",
  };
  const handleMove = (event: MouseEvent<HTMLDivElement>) => {
    setImgWidth(event.clientX);
  };

  const handleDrag = (event: DragEvent<HTMLButtonElement>) => {
    setImgWidth(event.clientX);
  };

  const handleClick = (event: MouseEvent<HTMLDivElement>) => {
    setImgWidth(event.clientX);
  };
  return (
    <>
      <PageDiv onClick={handleClick} onMouseMove={handleMove}>
        <div
          style={{
            width: imgWidth,
            maxWidth: "99.5vw",
            height: "100%",
            overflow: "hidden",
            borderRight: "solid 1px white",
            transitionProperty: "all",
            transitionDuration: "0.5s",
          }}
        >
          <Box
            component="img"
            src={beforeImage}
            sx={{ width: "99.5vw", height: "100%", objectFit: "cover", objectPosition: "left top" }}
          ></Box>
        </div>
        <IconButton sx={buttonStyle}>
          <ArrowLeftIcon sx={{ color: "#F2FFFF" }} />
          <ArrowRightIcon sx={{ color: "#F2FFFF" }} />
        </IconButton>
      </PageDiv>
      <PageDiv onClick={handleClick}>
        <div style={{ width: imgWidth, maxWidth: "99.5vw", height: "100%", overflow: "hidden", borderRight: "solid 1px white" }}>
          <Box
            component="img"
            src={beforeImage}
            sx={{ width: "99.5vw", height: "100%", objectFit: "cover", objectPosition: "left top" }}
          ></Box>
        </div>
        <IconButton draggable="true" onDrag={handleDrag} onDragEnd={handleDrag} className="home-before-after-btn" sx={buttonStyle}>
          <ArrowLeftIcon />
          <ArrowRightIcon />
        </IconButton>
      </PageDiv>
    </>
  );
}

export default HomeBeforeAfter;
