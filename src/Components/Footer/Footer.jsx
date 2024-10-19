import React from 'react';

const Footer = () => {
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-500 border-t-2 border-gray-300 h-24 md:h-40 flex flex-col justify-center items-center text-white'>
      {/* Top section with name and GitHub link */}
      <div className='flex flex-col md:flex-row gap-4 items-center md:justify-between w-full max-w-5xl px-8'>
        <div className='font-bold text-xl'>
          Skand Mishra
        </div>
        <a
          href="https://github.com/SkandMishraDev"
          target="_blank"
          rel="noopener noreferrer"
          className='text-gray-200 hover:text-white font-medium'
        >
          GitHub
        </a>
      </div>
      
      {/* Bottom section with description and copyright */}
      <div className='flex justify-between items-center w-full max-w-5xl px-8 mt-4'>
        <div className='text-gray-300 font-serif text-sm'>
          Backend Developer and Front-end Developer
        </div>
        <div className='text-gray-400 text-sm'>
          &copy; 2024. Made by Skand Mishra
        </div>
      </div>
    </div>
  );
}

export default Footer;
