import React from 'react';
import Sidebar from '../../components/sidebar/desktop';

import { Container } from '../../components/containers/Container.styled';
import { ContentContainer } from './styled';
import { Title, Greetings, Summary } from './styled';

import BarChart from '../../components/chart/BarChart';
import DashboardCard from '../../components/card/DashboardCard';

// Icons
import { CgProfile } from 'react-icons/cg';
import { TiWarningOutline } from 'react-icons/ti';

function Dashboard() {
  const user = 'Poul De Chavez';

  return (
    <Container>
      <Sidebar />
      <ContentContainer>
        {/*  */}
        <div>
          <Title>RECORD SYSTEM DASHBOARD</Title>
          <Greetings>Welcome back {user}</Greetings>
        </div>

        {/* Chart */}
        <BarChart />

        {/* Summary (Totals)*/}
        <Summary>
          {/* Students */}
          <DashboardCard
            bgColor={'green'}
            type={'Students'}
            icon={<CgProfile />}
            amount={69}
          />

          {/* Violations */}
          <DashboardCard
            type={'Violations'}
            icon={<TiWarningOutline />}
            amount={2}
          />
        </Summary>
      </ContentContainer>
    </Container>
  );
}

export default Dashboard;
