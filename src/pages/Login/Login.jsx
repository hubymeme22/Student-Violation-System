import React from 'react';
import logoPath from '../../assets/BSU-Logo.png';

import {
  Container,
  Form,
  Logo,
  Title,
  Input,
  LoginBtn,
  InputContainer,
} from './styled';

import { FaUserCircle, FaKey } from 'react-icons/fa';

function Login() {
  const loginHandler = (e) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Form>
        <Logo src={logoPath} />
        <Title>VIOLATION SYSTEM LOGIN</Title>

        <InputContainer>
          <Input type="text" placeholder="Username" />
          <FaUserCircle />
        </InputContainer>

        <InputContainer>
          <Input type="password" placeholder="Password" />
          <FaKey />
        </InputContainer>

        <LoginBtn onClick={loginHandler}>LOGIN</LoginBtn>
      </Form>
    </Container>
  );
}

export default Login;
