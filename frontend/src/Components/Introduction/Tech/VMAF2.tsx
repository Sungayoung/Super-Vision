import React from "react"
import BarChart from "../../Commons/BarChart";


function VMAF2 () {
  const data: number[] = [86, 84, 81, 78, 68]
  const labels: string[] = ['Super Vision', 'LANCZOS', 'BICUBIC', 'Nearest', 'BILINEAR']
  const colors: string[] = ["#CEF3FF", "#39424E", "#39424E", "#39424E", "#39424E"]
 
  return (
    <div>
      <h1>VMAF2</h1>
      <BarChart
        indexAxis="y"
        barThickness={34}
        width="66em"
        height="24em"
        data={data}
        labels={labels}
        colors={colors}
      />
    </div>
  )
}

export default VMAF2