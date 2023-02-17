import React, { useEffect } from 'react';
import Sidebar from '../../components/sidebar/desktop';

import { Container } from '../../components/containers/Container.styled';
import DashboardContent from '../content/dashboard';

import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

function Dashboard() {
  const navigate = useNavigate();
  const auth = useAuth();

  useEffect(() => {
    if (!auth.user) {
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
