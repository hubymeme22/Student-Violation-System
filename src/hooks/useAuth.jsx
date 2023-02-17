import axios from 'axios';
import { useState, createContext, useContext } from 'react';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  const login = async (username, password) => {
    const response = await axios.post('http://localhost:8080/api/login', {
      username: username,
      password: password,
    });

    return response.data;
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
