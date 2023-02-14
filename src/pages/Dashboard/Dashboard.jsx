import React, { useContext, useEffect } from 'react';
import Sidebar from '../../components/sidebar/desktop';

import { Container } from '../../components/containers/Container.styled';
import DashboardContent from '../content/dashboard';

import { AuthContext } from '../../App';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  console.log(auth.isLoggedIn);

  useEffect(() => {
    if (!auth.isLoggedIn) {
      navigate('/login');
    }
  }, []);

  return (
    <Container>
      <Sidebar />
      <DashboardContent />
    </Container>
  );
}

export default Dashboard;
