import React from "react";
import Chart from "chart.js/auto";

import { Bar, Pie, Line } from "react-chartjs-2";
import { ViolationData } from "../../datas//ViolationDatas";
import { MyChart } from "./chart.style";
function BarChart(props) {
  const [chart, setChart] = React.useState({
    labels: ViolationData.map((monthData) => monthData.month),

    datasets: [
      {
        label: "2023 Violations Record",
        data: ViolationData.map((violationData) => violationData.violations),
        hoverBackgroundColor: "red",

        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,

        minBarLength: 2,
      },
    ],
  });
  return (
    <MyChart>
      <Pie
        data={chart}
        height={300}
        width={600}
        options={{
          maintainAspectRatio: false,
          tension: 0.4,

          color: "white",
          scales: {
            x: {
              ticks: {
                color: "white",
              },
            },
            y: {
              ticks: {
                color: "white",
              },
            },
          },
        }}
      />
    </MyChart>
  );
}

export default BarChart;
