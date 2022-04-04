import React, { useRef, useState } from "react";
import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import BarChart from "../../Commons/BarChart";

type VmafResultProps = {
  normalVmaf: number;
  srVmaf: number;
};

function VmafResult({ normalVmaf, srVmaf }: VmafResultProps) {
  const colors = ["#39424E", "#CEF3FF"];

  return (
    <>
      {srVmaf > 0 ? (
        <div className="card-container d-flex flex-column text-center justify-content-between">
          <div className="mb-2 font_2 main_color bold">VMAF SCORE</div>
          <div className="">
            <BarChart
              data={[normalVmaf, srVmaf]}
              labels={["일반 필터", "AI 필터"]}
              colors={colors}
            />
          </div>
        </div>
      ) : (
        ""
      )}
    </>
  );
}

export default VmafResult;
