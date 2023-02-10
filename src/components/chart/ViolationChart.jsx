import React from "react";
import BarChart from "./BarChart";

import {
  DashTitle,
  Log,
  Students,
  StyledBar,
  Username,
  Violations,
  ChartTitle,
} from "./chart.style";
import { CgProfile } from "react-icons/cg";
import { TiWarningOutline } from "react-icons/ti";
import { ContentContainer } from "../Container.styled";

function ViolationChart() {
  return (
    <ContentContainer>
      <ChartTitle>
        <DashTitle>RECORD SYSTEM DASHBOARD</DashTitle>
        <Username>Welcome Back Poul!</Username>
      </ChartTitle>
      <BarChart />

      <Log>
        <Students>
          <CgProfile />
          Total Students: 69
        </Students>
        <Violations>
          <TiWarningOutline />
          Total Violations: 2
        </Violations>
      </Log>
    </ContentContainer>
  );
}

export default ViolationChart;
