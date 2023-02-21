import styled from 'styled-components';
import backgroundPath from '../../assets/background.jpg';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url(${backgroundPath});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
`;

export const Form = styled.form`
  background-color: ${({ theme }) => theme.red};
  width: min(90%, 430px);
  height: 400px;
  border-radius: 50px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2em;
  gap: 1em;

  box-shadow: 0px 16px 10px rgba(0, 0, 0, 0.25);
`;

export const Logo = styled.img``;

export const Title = styled.p`
  font-family: 'Staatliches', 'Poppins', sans-serif;
  color: white;
  font-size: 40px;

  @media screen and (max-width: 768px) {
    font-size: 30px;
  }
`;

export const InputContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;

  svg {
    position: absolute;
    right: 0.5em;
    color: ${({ theme }) => theme.gray};
    font-size: 1.15em;
    filter: brightness(40%);
  }
`;

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.gray};
  padding: 0.25em 0.5em;
  border: 1px;
  border-radius: 5px;
`;

export const LoginBtn = styled.button`
  width: 100%;
  background-color: ${({ theme }) => theme.lightRed};
  color: white;
  padding: 0.5em;
  border: 1px;
  border-radius: 13px;
  box-shadow: 5px 12px 4px -6px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

export const Error = styled.p`
  color: rgb(255, 255, 255, 0.75);
  font-size: 0.9rem;
`;
