import React from "react";
import BarChart from "./BarChart";
import { DashboardContainer } from "../Container.styled";
import {
  DashTitle,
  Log,
  Students,
  StyledBar,
  Username,
  Violations,
  titleCon,
} from "./chart.style";
import { CgProfile } from "react-icons/cg";
import { TiWarningOutline } from "react-icons/ti";

function ViolationChart() {
  return (
    <DashboardContainer>
      <titleCon>
        <DashTitle>RECORD SYSTEM DASHBOARD</DashTitle>
        <Username>Welcome Back Poul!</Username>
      </titleCon>

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
    </DashboardContainer>
  );
}

export default ViolationChart;
