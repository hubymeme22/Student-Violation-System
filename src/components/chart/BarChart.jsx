import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

import { Pie, Line } from "react-chartjs-2";

function BarChart({ data }) {
  const [isMobile, setIsMobile] = useState(false);
  const [chart, setChart] = useState(configuration);

  // Adjust data when it retrieves the values
  useEffect(() => {
    if (!data) return;
    console.log(data);

    setChart((config) => {
      // console.log('data');
      const datasetsConfig = config.datasets[0];
      const monthSummary = data.monthSummary;

      return {
        ...config,
        labels: monthSummary.map(({ month }) => month),
        datasets: [
          {
            ...datasetsConfig,
            data: monthSummary.map(({ violations }) => violations),
          },
        ],
      };
    });
  }, [data]);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledChart>
      {isMobile ? (
        <Pie data={chart} options={chartOption} />
      ) : (
        <Line data={chart} options={chartOption} />
      )}
    </StyledChart>
  );
}

export default BarChart;

// Chart Configuration
const configuration = {
  datasets: [
    {
      label: "2023 Violations Record",
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
};

const chartOption = {
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
};

// Chart Styling
const StyledChart = styled.div`
  margin: 0 auto;
  height: 300px;
  width: 100%;

  border: 2px solid;
  border-color: red;
  padding: 10px;
  border-radius: 10px;
  background-color: black;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;

  canvas {
    width: 100%;
  }
`;
