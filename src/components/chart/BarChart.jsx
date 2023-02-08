import React from "react";
import Chart from "chart.js/auto";

import { Bar } from "react-chartjs-2";
import { ViolationData } from "../../datas//ViolationDatas";
function BarChart() {
  const [chart, setChart] = React.useState({
    labels: ViolationData.map((monthData) => monthData.month),
    datasets: [
      {
        label: "2023 Violations Record",
        data: ViolationData.map((violationData) => violationData.violations),
        options: { maintainAspectRatio: false },
        backgroundColor: "#C58336",
      },
    ],
  });
  return <Bar data={chart} />;
}

export default BarChart;
