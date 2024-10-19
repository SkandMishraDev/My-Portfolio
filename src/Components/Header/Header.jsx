import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 h-20 md:h-24 flex justify-between items-center px-8 shadow-lg'>
      <h2 className='font-bold text-3xl text-white'>Skand Mishra</h2>
      
      <div className='flex space-x-8'>
        <NavLink
          to='/'
          className={({ isActive }) =>
            isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-200 hover:text-white'
          }
        >
          Home
        </NavLink>
        
        <NavLink
          to='/work'
          className={({ isActive }) =>
            isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-200 hover:text-white'
          }
        >
          Work
        </NavLink>

        <NavLink
          to='/about'
          className={({ isActive }) =>
            isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-200 hover:text-white'
          }
        >
          About
        </NavLink>

        <NavLink
          to='/contact'
          className={({ isActive }) =>
            isActive ? 'text-white font-semibold border-b-2 border-white' : 'text-gray-200 hover:text-white'
          }
        >
          Contact
        </NavLink>
      </div>
    </div>
  );
}

export default Header;
