import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../Images/logo.png';
import User from '../Images/user.png';
import Cart from '../Images/cart.png';
import menu from '../Images/menu.png';
import dropdown from '../Images/dropdown.png';
import Search from '../Images/search.png';
import { ShopContext } from '../context/ShopContext'

import AuthContext from '../Components/Authprovider';

function Navbar() {
  const { showsearch, setShowSearch } = useContext(ShopContext);
  const navigate=useNavigate()
  const { accessToken } = useContext(AuthContext);
  const handleNavigation = () => {
    if (accessToken) {
      navigate('/cart'); // Navigate to cart page if logged in
    } else {
      navigate('/login'); // Navigate to login page if not logged in
    }
  };
  const [visible, setVisible] = useState(false);
  return (
    <div className="bg-gradient-to-b from-[#ff964cda] to-[#ffffff00]">
      <div className="py-2 px-10 font-sans text-orange-950 font-semibold flex justify-between items-center">
        <div className="w-32 md:w-36 hover:scale-105 transition-all duration-100 ease-in">
          <img src={Logo} alt="Logo" />
        </div>
        <div className="hidden sm:visible sm:flex gap-20 items-center text-[17px]" >
          <NavLink
            to="/"
            className={({ isActive }) =>
              `hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
              }`
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/collections"
            className={({ isActive }) =>
              `hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
              }`
            }
          >
            Collections
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
              }`
            }
          >
            About
          </NavLink>
        </div>

        <div className="flex sm:gap-5 gap-0">
          <NavLink to="/login" className="p-3 rounded-full hover:scale-110 transition-all duration-100 ease-in-out">
            <img className="w-6" src={User} alt="User Icon" />
            {/* <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
            </div> */}
          </NavLink>
          <button onClick={() => setShowSearch(true)} className="p-3 rounded-full hover:scale-110 transition-all duration-100 ease-in-out">
            <img className="w-8" src={Search} alt="User Icon" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">

            </div>
          </button>
          <button
            onClick={handleNavigation}
            className="p-3 rounded-full relative hover:scale-110 transition-all duration-100 ease-in"
          >
            <img className="w-6" src={Cart} alt="Cart Icon" />
            <p className="absolute right-[0px] bottom-[0px] w-8 text-center bg-black text-white rounded-full text-xs">
              10
            </p>
          </button>
          <img onClick={() => setVisible(true)} src={menu} className="h-8 pl-1 mt-3 cursor-pointer sm:hidden" alt="" />
        </div>
        {/* sidebar menu for small screen */}
        <div className={`absolute z-10 top-0 bottom-0 right-0 overflow-hidden backdrop-blur-md transition-all ${visible ? 'w-full' : 'w-0'}`}>

          <div className='flex flex-col gap-[25px] text-gray-800'>
            <div className='flex items-center gap-4 p-7 '>
              <img className='w-7 rotate-90' src={dropdown} alt="" />
              <p onClick={() => setVisible(false)} className='text-3xl cursor-pointer'>Back</p>
            </div>
            <div className="flex flex-col gap-16 items-start px-16 text-3xl ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
                  }`
                }
              >
                Home
              </NavLink>
              <NavLink
                to="/collections"
                className={({ isActive }) =>
                  `hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
                  }`
                }
              >
                Collections
              </NavLink>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `hover:scale-105 hover:font-bold transition-all duration-100 ease-in ${isActive ? "underline font-extrabold " : ""
                  }`
                }
              >
                About
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;


