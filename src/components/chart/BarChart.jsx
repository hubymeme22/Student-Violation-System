import React, { useState } from 'react';
import styled from 'styled-components';
import Chart from 'chart.js/auto';

import { Bar, Line } from 'react-chartjs-2';
import { ViolationData } from '../../datas//ViolationDatas';

function BarChart() {
  const [chart, setChart] = useState(configuration);

  return (
    <StyledChart>
      <Line data={chart} options={chartOption} />
    </StyledChart>
  );
}

export default BarChart;

// Chart Configuration
const configuration = {
  // Set the desired data
  labels: ViolationData.map((monthData) => monthData.month),

  datasets: [
    {
      label: '2023 Violations Record',
      data: ViolationData.map((violationData) => violationData.violations),
      hoverBackgroundColor: 'red',

      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,

      minBarLength: 2,
    },
  ],
};

const chartOption = {
  maintainAspectRatio: false,
  tension: 0.4,

  color: 'white',
  scales: {
    x: {
      ticks: {
        color: 'white',
      },
    },
    y: {
      ticks: {
        color: 'white',
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
