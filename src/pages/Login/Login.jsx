import React, { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useInput from '../../hooks/useInput';

import logoPath from '../../assets/BSU-Logo.png';

import {
  Container,
  Form,
  Logo,
  Title,
  Input,
  LoginBtn,
  InputContainer,
  Error,
} from './styled';

import { FaUserCircle, FaKey } from 'react-icons/fa';

// Context
import { useAuth } from '../../hooks/useAuth';

function Login() {
  const [username, usernameBinder, resetUsername] = useInput('');
  const [password, passwordBinder, resetPassword] = useInput('');
  const [error, setError] = useState(null);

  const navigate = useNavigate();
  const auth = useAuth();

  const loginHandler = async (e) => {
    e.preventDefault();

    // Check if both fields are not empty
    if (!username || !password) {
      setError('Please enter all fields');
      return;
    } else {
      setError(null);
    }

    let response = await auth.login(username, password);
    setError(response.msg);

    if (response.loggedIn) {
    }
    // navigate('/');
  };

  useEffect(() => {
    if (auth.user) {
      navigate('/dashboard');
    }
  }, []);

  return (
    <Container>
      <Form>
        <Logo src={logoPath} />
        <Title>VIOLATION SYSTEM LOGIN</Title>

        <InputContainer>
          <Input type="text" placeholder="Username" {...usernameBinder} />
          <FaUserCircle />
        </InputContainer>

        <InputContainer>
          <Input type="password" placeholder="Password" {...passwordBinder} />
          <FaKey />
        </InputContainer>

        {error && <Error>{error}</Error>}

        <LoginBtn onClick={loginHandler}>LOGIN</LoginBtn>
      </Form>
    </Container>
  );
}

export default Login;
