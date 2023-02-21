import axios from 'axios';
import { useState, createContext, useContext } from 'react';
import { checkToken, saveToken, clearToken } from '../utils/tokenHandler';
import { useNavigate } from 'react-router-dom';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(checkToken());
  const navigate = useNavigate();

  const login = async (username, password) => {
    return await axios
      .post('http://localhost:8080/api/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const resToken = res.data.token;

        if (resToken) {
          setToken(resToken);
          saveToken(resToken);
        }

        return res.data;
      })
      .catch((err) => {});
  };

  const logout = () => {
    setToken(null);
    clearToken();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
