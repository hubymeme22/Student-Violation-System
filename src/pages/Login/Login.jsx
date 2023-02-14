import React, { useContext } from 'react';
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

import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../App';

function Login() {
  const auth = useContext(AuthContext);
  const navigate = useNavigate();

  const loginHandler = (e) => {
    e.preventDefault();

    auth.loginHandler(true);

    navigate('/dashboard');
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
