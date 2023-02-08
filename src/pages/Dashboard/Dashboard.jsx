import React from "react";
import Sidebar from "../../components/sidebar/desktop";
import { Container, ContentContainer } from "../../components/Container.styled";
import { Chart } from "react-chartjs-2";
import ViolationChart from "../../components/chart/ViolationChart";

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <ViolationChart />
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
