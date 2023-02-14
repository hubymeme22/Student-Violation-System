import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { ContentContainer } from './styled';
import { Title, Greetings, Summary } from './styled';

import BarChart from '../../../components/chart/BarChart';
import DashboardCard from '../../../components/card/DashboardCard';

// Icons
import { CgProfile } from 'react-icons/cg';
import { TiWarningOutline } from 'react-icons/ti';

function DashboardContent() {
  const [user, setUser] = useState('');
  const [summary, setSummary] = useState(null);

  useEffect(() => {
    axios
      .get('http://localhost:8080/api/summary')
      .then((res) => {
        const dataset = res.data;
        setSummary(dataset);
        console.log(dataset);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <ContentContainer>
      {/*  */}
      <div>
        <Title>RECORD SYSTEM DASHBOARD</Title>
        <Greetings>Welcome back {user}</Greetings>
      </div>

      {/* Chart */}
      <BarChart data={summary} />

      {/* Summary (Totals)*/}
      <Summary>
        {/* Students */}
        <DashboardCard
          bgColor={'green'}
          type={'Students'}
          icon={<CgProfile />}
          amount={summary ? summary.studentsCount : 0}
        />

        {/* Violations */}
        <DashboardCard
          type={'Violations'}
          icon={<TiWarningOutline />}
          amount={summary ? summary.violationCount : 0}
        />
      </Summary>
    </ContentContainer>
  );
}

export default DashboardContent;
