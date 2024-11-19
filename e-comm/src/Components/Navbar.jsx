import React from 'react';
import { NavLink } from 'react-router-dom';
import Logo from '../Images/logo.png';
import User from '../Images/user.png';
import Cart from '../Images/cart.png';


function Navbar() {
  return (
    <div className='bg-gradient-to-b from-[#ffa15dda] to-[#ffffff00]'>
      <div className="py-2 px-10 font-sans text-orange-950 font-semibold flex justify-between items-center">
        <div className="w-32 md:w-36 hover:scale-105 transition-all duration-100 ease-in">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="flex gap-20 items-center text-[17px]">
      <NavLink
        to="/home"
        className="hover:scale-105 hover:font-bold transition-all duration-100 ease-in"
        activeClassName="text-blue-700 font-bold"
      >
        Home
      </NavLink>
      <NavLink
        to="/product"
        className="hover:scale-105 hover:font-bold transition-all duration-100 ease-in"
        activeClassName="text-blue-700 font-bold"
      >
        Product
      </NavLink>
      <NavLink
        to="/about"
        className="hover:scale-105 hover:font-bold transition-all duration-100 ease-in"
        activeClassName="text-blue-700 font-bold"
      >
        About
      </NavLink>
    </div>

        <div className="flex gap-9">
            <button className='p-3  hover:bg-orange-100 rounded-full hover:scale-105 transition-all duration-100 ease-in-out'>
          <img className="w-6" src={User} alt="User Icon" />
            </button>
            <button className='p-3 hover:bg-orange-100 rounded-full hover:scale-105 transition-all duration-100 ease-in'>
            <img className="w-6" src={Cart} alt="Cart Icon" />
            </button>
          
        </div>
      </div>
      </div>
  );
}

export default Navbar;

