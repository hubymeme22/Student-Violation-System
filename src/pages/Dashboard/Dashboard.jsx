import React from 'react';
import Sidebar from '../../layouts/Sidebar/desktop';
import { Container, ContentContainer } from '../../layouts/Container.styled';

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        <h1>Dashboard</h1>
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
