import { MouseEvent, useState } from "react";
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

const BeforeAfterDiv = styled("div")({
  position: "relative",
  borderRadius: "20px",
  border: "1.5px dashed #F2FFFF",
  overflow: "hidden",
});

function ResultCard({ aiImgSrc, normalImgSrc, width, height }: ResultCardProps) {
  const [imgWidth, setImgWidth] = useState<number>(960 / 2);
  const [viewType, setViewType] = useState<string>("both");
  const theme = useTheme();
  // const divStyle = {
  //   width,
  //   height,
  //   // position: "relative",
  //   // backgroundImage: `url(${aiImgSrc})`,
  //   // backgroundSize: `${width} $h`,
  //   borderRadius: "20px",
  //   border: "1.5px dashed #F2FFFF",
  //   overflow: "hidden",
  // };

  const handleMove = (event: any) => {
    setImgWidth(event.clientX - event.currentTarget.offsetLeft);
  };

  const handleChange = (event: MouseEvent<HTMLElement>, newViewType: string) => {
    console.log(newViewType);
    setViewType(newViewType || "both");
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
      <BeforeAfterDiv sx={{ width, height }} onMouseMove={handleMove}>
        {aiImgSrc && normalImgSrc ? (
          <>
            {viewType === "both" ? (
              <>
                <Box
                  component="img"
                  src={aiImgSrc}
                  sx={{ position: "absolute", top: "0", left: "0", width, height, objectFit: "cover", objectPosition: "left" }}
                ></Box>
                <div
                  style={{
                    position: 'absolute',
                    zIndex: "1",
                    width: imgWidth,
                    height,
                    overflow: "hidden",
                    borderRight: "solid 2px black",
                  }}
                >
                  <Box component="img" src={normalImgSrc} sx={{ width, height, objectFit: "cover", objectPosition: "left" }}></Box>
                </div>
              </>
            ) : viewType === "normal" ? (
              <img src={normalImgSrc} style={{ height, width }} alt="normal" />
            ) : (
              <img src={aiImgSrc} style={{ height, width }} alt="ai" />
            )}
          </>
        ) : (
          <div style={{ textAlign: "center" }}>웹캠을 켜주세요</div>
        )}
      </BeforeAfterDiv>
      <StyledToggleButtonGroup value={viewType} onChange={handleChange} exclusive>
        <ToggleButton value="both">both</ToggleButton>
        <ToggleButton value="ai">ai</ToggleButton>
        <ToggleButton value="normal">normal</ToggleButton>
      </StyledToggleButtonGroup>
    </div>
  );
}

export default ResultCard;
