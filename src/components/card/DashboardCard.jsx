import React from 'react';
import styled from 'styled-components';

function DashboardCard({ bgColor, icon, type, amount }) {
  return (
    <Card bgColor={bgColor}>
      {icon}
      <p>
        Total {type}: {amount}
      </p>
    </Card>
  );
}

export default DashboardCard;

const Card = styled.div`
  height: 200px;
  width: 250px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;

  color: white;
  background-color: ${({ bgColor, theme }) =>
    bgColor === 'green' ? theme.darkGreen : theme.darkRed};
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 20px;

  svg {
    height: 60px;
    width: auto;
  }

  @media screen and (max-width: 768px) {
    height: 175px;
    width: 200px;
  }
`;
