
import AuthContext from '../Components/Authprovider';

import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const { login, logout } = useContext(AuthContext)
  const [credentials, setCredentials] = useState({ username: '', password: '' });

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) throw new Error('Login failed');

      const data = await response.json();
      // Save the token to localStorage
      console.log(data);

      localStorage.setItem('accessToken', data.accessToken);
      localStorage.setItem('refreshToken', data.refreshToken);
      login(data.accessToken);
      navigate('/cart'); // Redirect to the cart page
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='bg-[#ff8b64] h-screen  flex justify-center items-center'>
      <form className='bg-[#ffec97] px-11 py-6 rounded-xl w-4/5 md:w-1/2 lg:w-1/3 mx-auto my-auto flex flex-col gap-9' onSubmit={handleSubmit}>
        <div className='flex flex-col items-center'>
          <h1 className='text-red-800 font-extrabold text-4.5xl' >Login</h1>
        </div>
        <div className='flex flex-col gap-2'>
          <label htmlFor="username" className='text-red-800 font-bold text-2xl' >Username: </label>
        <input className='shadow border-2 border-red-800 bg-transparent rounded-xl w-full py-2 px-3 text-red-800 font-bold focus:ring-2 focus:outline-none focus:ring-red-900' id='username' type="text" name="username" onChange={handleChange} placeholder="Username" />
          </div>

          <div className='flex flex-col gap-2'>
          <label htmlFor="pass" className='text-red-800 font-bold text-2xl' >Password: </label>
          <input className='shadow border-2 border-red-800 bg-transparent rounded-xl w-full py-2 px-3 text-red-800 font-bold focus:ring-2 focus:outline-none focus:ring-red-900' id='pass'  name="username" type="password"  onChange={handleChange} placeholder="Password" />
          </div>

        
        <button className='text:bg-[#98103b] border-2 border-[#98103b] hover:text-[#ffeea4] hover:bg-[#98103b] focus:ring-2 focus:outline-none focus:ring-black font-bold rounded-lg text-2xl px-8 py-2 my-auto text-center me-2 mb-2 hover:translate-y-1 transition-all' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
