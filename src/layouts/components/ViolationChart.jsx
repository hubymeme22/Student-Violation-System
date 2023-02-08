import React from "react";
import Chart from "chart.js/auto";

import { Line } from "react-chartjs-2";

const data = {
  labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
  datasets: [
    {
      label: "2023 VIOLATION STATUS",
      data: [2, 4, 6, 3, 5, 2],
      fill: true,
      backgroundColor: "rgba(75,192,192,0.2)",
      borderColor: "rgba(75,192,192,1)",
      tension: 0.4,
    },
  ],
};

function ViolationChart() {
  return (
    <div>
      <Line data={data} />
    </div>
  );
}

export default ViolationChart;
