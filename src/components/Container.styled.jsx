import styled from "styled-components";

export const Container = styled.div`
  padding: 1em;
  height: 100vh;
  display: flex;
  gap: 1em;
`;

export const ContentContainer = styled.div`
  background-color: #e4e4e4;
  width: 100%;
  border-radius: 25px;
  height: 100%;
  padding: 1em;
  gap: 50px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 50px;

  @media screen and (max-width: 768px) {
    gap: 10px;
    padding: 20px;
    justify-content: center;
    align-items: center;
  }
`;
