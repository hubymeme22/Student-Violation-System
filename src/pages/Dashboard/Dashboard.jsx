import React from 'react';
import Sidebar from '../../components/sidebar/desktop';

import { Container } from '../../components/Container';
import DashboardContent from '../content/dashboard';

function Dashboard() {
  return (
    <Container>
      <Sidebar />
      <DashboardContent />
    </Container>
  );
}

export default Dashboard;
