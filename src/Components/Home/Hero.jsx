import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center p-8 md:py-16 bg-gradient-to-r from-blue-50 to-indigo-100'>
      {/* Left Section */}
      <div className='flex flex-col items-start space-y-4 md:w-1/2'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 font-Merriweather'>
          Skand Mishra is a <span className='text-purple-600'>Full Stack Developer.</span>
        </h1>
        <p className='text-gray-600 font-serif text-lg md:text-xl'>
          He crafts responsive websites where technology meets creativity.
        </p>
        <Link to='/contact'>
          <button className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75">
            Contact Me
          </button>
        </Link>
      </div>

      {/* Right Section */}
      <div className='flex flex-col items-center md:w-1/2 mt-8 md:mt-0'>
        <img
          className="w-64 md:w-80 rounded-lg shadow-lg"
          src="https://res.cloudinary.com/dgktguczj/image/upload/v1729360422/MY-portfolio/i0gtmrzodzmwjrdackxp.jpg"
          alt="Skand Mishra"
        />
        <p className='flex items-center text-gray-700 border border-gray-300 rounded-md p-3 mt-4 shadow-sm'>
          <div className='w-4 h-4 bg-purple-500 rounded-full mr-2'></div> 
          Currently learning Next.js
        </p>
      </div>
    </div>
  );
};

export default Hero;
