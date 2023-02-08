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
} from "./chart.style";
import { CgProfile } from "react-icons/cg";
import { TiWarningOutline } from "react-icons/ti";

function ViolationChart() {
  const styles = {
    display: "flex",
    width: "60%",
    flexDirection: "column",
    alignItems: "flexStart",
  };
  return (
    <DashboardContainer>
      <div style={styles}>
        <DashTitle>RECORD SYSTEM DASHBOARD</DashTitle>
        <Username>Welcome Back Poul!</Username>
      </div>
      <StyledBar>
        <BarChart />
      </StyledBar>
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
