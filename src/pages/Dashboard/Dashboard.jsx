import React from "react";
import Sidebar from "../../components/sidebar/desktop";
import { Container, ContentContainer } from "../../components/Container.styled";
import { Chart } from "react-chartjs-2";
import ViolationChart from "../../components/chart/ViolationChart";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <ViolationChart />
    </Container>
  );
}

export default Dashboard;
