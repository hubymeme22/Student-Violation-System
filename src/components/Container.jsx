import styled from 'styled-components';
import { RequireAuth } from './RequireAuth';

const StyledContainer = styled.div`
  padding: 1em;
  min-height: 100vh;
  display: flex;
  gap: 1em;
`;

const StyledContentContainer = styled.div`
  background-color: #e4e4e4;
  width: 100%;
  border-radius: 25px;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Container = ({ children }) => {
  return (
    <RequireAuth>
      <StyledContainer>{children}</StyledContainer>;
    </RequireAuth>
  );
};

export const ContentContainer = ({ children }) => {
  return <StyledContentContainer>{children}</StyledContentContainer>;
};
