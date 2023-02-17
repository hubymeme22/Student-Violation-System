import axios from 'axios';
import { useState, createContext, useContext } from 'react';
import { checkToken, saveToken } from '../utils/tokenHandler';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(checkToken());

  const login = async (username, password) => {
    return await axios
      .post('http://localhost:8080/api/login', {
        username: username,
        password: password,
      })
      .then((res) => {
        const token = res.data.token;

        if (token) {
          setToken(token);
          saveToken(token);
        }

        return res.data;
      })
      .catch((err) => {});
  };

  const logout = () => {
    //
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
