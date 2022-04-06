import React from "react";
import BarChart from "../../Commons/BarChart";
import { styled } from "@mui/material/styles";

const PageDiv = styled("div")({
  position: "relative",
  height: "100vh",
  display: "flex",
  width: "100%",
  justifyContent: "center",
  alignItems: "center",
});

function VMAF2() {
  const data: number[] = [86, 84, 81, 78, 68];
  const labels: string[] = ["Super Vision", "LANCZOS", "BICUBIC", "Nearest", "BILINEAR"];
  const colors: string[] = ["#CEF3FF", "#39424E", "#39424E", "#39424E", "#39424E"];

  return (
    <PageDiv>
      <div>
        <h2>VMAF</h2>
        <h2>SCORE</h2>
      </div>
      <BarChart indexAxis="y" barThickness={34} width="66em" height="24em" data={data} labels={labels} colors={colors} />
    </PageDiv>
  );
}

export default VMAF2;
