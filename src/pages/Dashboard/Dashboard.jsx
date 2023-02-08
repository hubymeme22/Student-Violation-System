import React from "react";
import Sidebar from "../../layouts/Sidebar/desktop";
import { Container, ContentContainer } from "../../layouts/Container.styled";
import { Chart } from "react-chartjs-2";
import ViolationChart from "../../layouts/components/ViolationChart";

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
