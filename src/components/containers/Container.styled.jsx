import styled from 'styled-components';

export const Container = styled.div`
  padding: 1em;
  min-height: 100vh;
  display: flex;
  gap: 1em;
`;

export const ContentContainer = styled.div`
  background-color: #e4e4e4;
  width: 100%;
  border-radius: 25px;
  padding: 2rem;

  @media screen and (max-width: 768px) {
    padding: 1rem;
  }
`;
