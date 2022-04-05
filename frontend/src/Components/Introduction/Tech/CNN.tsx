// Mui
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { useTheme } from "@material-ui/core";

// Local
import CodeTextBox from "../../TextBoxes/CodeTextBox";
import "./CNN.css";
import { useState } from "react";

type Props = {
  isDark: boolean;
  onMouseOver: Function;
  onMouseLeave: Function;
};

const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

function LayerSquare({ isDark, onMouseOver, onMouseLeave }: Props) {
  const theme = useTheme();
  const dark = theme.palette.primary.main;
  const light = theme.palette.primary.main;

  return (
    <Grid marginX={-2}>
      <div className="box" onMouseOver={() => onMouseOver()} onMouseLeave={() => onMouseLeave()}>
        <div className="cnnLayer rotateY">
          <div className={"fill" + " " + (isDark ? "brightBox" : "darkBox")}></div>
        </div>
      </div>
    </Grid>
  );
}

const ExplainDiv = styled("div")({
  position: "absolute",
  bottom: "90px",
  backgroundColor: "#000000A0",
  width: "800px",
  height: "150px",
  textAlign: "center",
  transition: "all .2s",
});

function CNN() {
  const [showExplain, setShowExplain] = useState<boolean>(false);
  const handleMouseOver = () => {
    setShowExplain(true);
  };
  const handleMouseLeave = () => {
    setShowExplain(false);
  };
  return (
    <PageDiv id="cnn">
      <div className="d-flex align-items-center">
        <div style={{ marginRight: "5rem" }}>
          <h1 className='cnnName'>Convolution</h1>
          <h1 className='cnnName'>Neural</h1>
          <h1 className='cnnName'>Network</h1>
        </div>
        <div className="d-flex pb-3">
          <LayerSquare isDark={true} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
          <LayerSquare isDark={false} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
          <LayerSquare isDark={true} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
          <LayerSquare isDark={false} onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave} />
        </div>
        {/* 레이어별 설명 박스가 들어갈 부분 */}
      </div>
      <ExplainDiv style={{ opacity: `${showExplain ? "1" : "0"}` }}>설명</ExplainDiv>
    </PageDiv>
  );
}

export default CNN;
