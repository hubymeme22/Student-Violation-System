import styled from 'styled-components';

import { ContentContainer as ContentCont } from '../../components/containers/Container.styled';

export const ContentContainer = styled(ContentCont)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const Title = styled.p`
  font-family: 'Staatliches', 'Poppins', sans-serif;
  font-size: 35px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

export const Greetings = styled.p`
  font-family: 'Staatliches', 'Poppins', sans-serif;
  font-size: 25px;

  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
`;

export const Summary = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
`;
