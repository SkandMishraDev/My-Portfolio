import React from 'react'

const Footer = () => {
  return (
  <div className='bg-blue-400 border-t-2 pt-8 border-gray h-auto md:h-52'>
    <div className='flex gap-6'>
    <div className=' font-medium'>
      Skand Mishra
    </div>
    <a href="https://github.com/SkandMishraDev" target="_blank" rel="noopener noreferrer">
      GitHub
    </a>
    </div>
    <div className='flex justify-between items-center'>
    <div className='font-serif left-content'>
    Backend devloper and Front-end devloper
    </div>
    <div className='right-content'>
      Copyright 2024. Made by Skand
    </div>
    </div>
    </div>
  )
}

export default Footer