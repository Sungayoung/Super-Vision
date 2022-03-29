import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";
import { useRef, useState, useEffect } from "react";
type MagnifyProps = {
  width: string;
  height: string;
  RATIO: number;
  imgSrc: string | undefined;
  pos: {x: number, y: number} | undefined;
};

const MagnifyDiv = styled("div")({
  width: "250px",
  height: "250px",
  position: "absolute",
  boxShadow: "0 0 0 3px rgba(255, 255, 255, 0.85), 0 0 3px 3px rgba(0, 0, 0, 0.25)",
  display: "none",
  overflow: "hidden",
});

function Magnify({ width, height, RATIO, imgSrc, pos }: MagnifyProps) {
  const magnifyRef = useRef<HTMLDivElement>(null);
  const [objectPosition, setObjectPosition] = useState<string>("");

  useEffect(() => {
    if (pos) {
      setMagnify();
    } else {
      if (!magnifyRef.current?.style) return;
      magnifyRef.current.style.display = "none";
    }
  }, [pos]);
  const setMagnify = () => {
    if (!pos) return;
    if (!magnifyRef.current?.style) return;
    const w = magnifyRef.current.offsetWidth / 2;
    const h = magnifyRef.current.offsetHeight / 2;
    magnifyRef.current.style.display = "inline-block";
    if (!magnifyRef.current.parentElement) return
    magnifyRef.current.style.left = `${magnifyRef.current.parentElement?.offsetLeft + pos.x - w}px`;
    magnifyRef.current.style.top = `${magnifyRef.current.parentElement?.offsetTop + pos.y- h}px`;
    setObjectPosition(`-${pos.x * RATIO - w}px -${pos.y * RATIO - h}px`);
  };

  return (
    <MagnifyDiv ref={magnifyRef}>
      <Box
        component="img"
        src={imgSrc}
        sx={{
          position: "relative",
          top: "0",
          left: "0",
          width: `${parseInt(width.substring(0, width.length - 2)) * RATIO}px`,
          height: `${parseInt(height.substring(0, height.length - 2)) * RATIO}px`,
          objectPosition,
        }}
      ></Box>
    </MagnifyDiv>
  );
}

export default Magnify;
