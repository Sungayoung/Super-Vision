import { ChangeEvent, MouseEvent, useState } from "react";
import { styled } from "@mui/material/styles";
import { useTheme } from "@material-ui/core";
import { Box, ToggleButton, ToggleButtonGroup } from "@mui/material";

type ResultCardProps = {
  aiImgSrc: string | undefined;
  normalImgSrc: string | undefined;
  width: string;
  height: string;
};

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
  "& .MuiToggleButtonGroup-grouped": {
    border: 0,
    backgroundColor: "#39424E",
    color: "#F2FFFF",
    "&.Mui-disabled": {
      border: 0,
    },
    "&.Mui-selected": {
      backgroundColor: "#5F7B84",
      color: "#F2FFFF",
    },
  },
}));

function ResultCard({ aiImgSrc, normalImgSrc, width, height }: ResultCardProps) {
  const [imgWidth, setImgWidth] = useState<number>(960 / 2);
  const [viewType, setViewType] = useState<string>("both");
  const theme = useTheme();
  const divStyle = {
    width,
    height,
    backgroundImage: `url(${aiImgSrc})`,
    backgroundSize: "cover",
    borderRadius: "20px",
    border: "1.5px dashed #F2FFFF",
    overflow: "hidden",
  };

  const handleMove = (event: any) => {
    setImgWidth(event.clientX - event.currentTarget.offsetLeft);
  };

  const handleChange = (event: MouseEvent<HTMLElement>, newViewType: string) => {
    setViewType(newViewType);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <div style={divStyle} onMouseMove={handleMove}>
        {aiImgSrc && normalImgSrc ? (
          <>
            {viewType === "both" ? (
              <div
                style={{
                  position: "relative",
                  zIndex: "1",
                  width: imgWidth,
                  height,
                  overflow: "hidden",
                  borderRight: "solid 2px black",
                }}
              >
                <Box component="img" src={normalImgSrc} sx={{ width, height, objectFit: "cover", objectPosition: "left" }}></Box>
              </div>
            ) : viewType === "normal" ? (
              <img src={normalImgSrc} style={{ height, width }} alt="normal" />
            ) : (
              <img src={aiImgSrc} style={{ height, width }} alt="ai" />
            )}
          </>
        ) : (
          <div style={{textAlign: 'center'}}>
            웹캠을 켜주세요
          </div>
        )}
      </div>
      <StyledToggleButtonGroup value={viewType} onChange={handleChange} exclusive>
        <ToggleButton value="both">both</ToggleButton>
        <ToggleButton value="ai">ai</ToggleButton>
        <ToggleButton value="normal">normal</ToggleButton>
      </StyledToggleButtonGroup>
    </div>
  );
}

export default ResultCard;
