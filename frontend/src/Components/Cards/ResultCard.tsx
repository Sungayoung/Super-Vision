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
  marginBottom: "6px",
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
              <Magnify pos={pos} imgSrc={imgSrc} RATIO={4} width={width} height={height} />
              <img src={imgSrc} style={{ height, width, objectFit: "cover" }} alt="img" />
            </>
          ) : (
            <div>
              <div className="font_3 comp_color">웹캠을 키면 결과를</div>
              <div className="font_3 comp_color">확인할 수 있습니다.</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
