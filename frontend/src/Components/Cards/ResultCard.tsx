import { MouseEvent } from "react";
import { styled } from "@mui/material/styles";
import Magnify from "../Commons/Magnify";
type ResultCardProps = {
  imgSrc: string | undefined;
  title: string;
  width: string;
  height: string;
  setMousePos: Function;
  pos: { x: number; y: number } | undefined;
};

const TitleSpan = styled("span")({
  color: "#CEF3FF",
  fontSize: "1.5rem",
  fontWeight: "600",
  padding: "5px",
  marginBottom: "36px",
});

function ResultCard({ imgSrc, title, width, height, setMousePos, pos }: ResultCardProps) {
  const handleMove = (event: MouseEvent<HTMLElement>) => {
    if (!imgSrc) return;
    let mouseX = event.pageX - event.currentTarget.offsetLeft;
    let mouseY = event.pageY - event.currentTarget.offsetTop;
    if (
      mouseX <= 0 ||
      mouseX > event.currentTarget.offsetWidth ||
      mouseY <= 0 ||
      mouseY > event.currentTarget.offsetHeight
    ) {
      setMousePos(undefined);
      return;
    }
    setMousePos({ x: mouseX, y: mouseY });
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          margin: "1.5rem",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}>
        <TitleSpan>{title}</TitleSpan>
        <div
          onMouseMove={handleMove}
          className="dashed_border d-flex justify-content-center align-items-center"
          style={{ overflow: "hidden", height, width }}>
          {imgSrc ? (
            <>
              <Magnify pos={pos} imgSrc={imgSrc} RATIO={3} width={width} height={height} />
              <img src={imgSrc} style={{ height, width }} alt="img" />
            </>
          ) : (
            "웹캠을 켜주세요"
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
