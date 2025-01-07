import { createContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthContext = createContext();

export const Authprovider = ({ children }) => {
  const navigate = useNavigate();
  const [cart, setCart] = useState(null);



  const [accessToken, setAccessToken] = useState(localStorage.getItem('accessToken'));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem('refreshToken'));

  const login = (token) => {
    setAccessToken(token);
    localStorage.setItem('accessToken', token);
  };

  const logout = () => {
    setAccessToken(null);
    localStorage.removeItem('accessToken');
    setRefreshToken(null);
    localStorage.removeItem('refreshToken');
    navigate('/');
  };

  console.log(cart);

  return (
    <AuthContext.Provider value={{
      accessToken,
      refreshToken,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
