import React from 'react'
import { Link } from 'react-router-dom'
const Hero = () => {
  return (
    <div className='justify-center flex'>
        <div>
    <div className='flex gap-1 '>
    <h1 className='text-3xl font-Merriweather'>Skand Mishra is a <span className='text-purple-400'>full stack devloper.</span></h1>
    </div>
    <p className='text-gray w-full font-serif text-lg'>He crafts responsive website where technology meets creativity</p>
    <Link to={'/contact'}>
    <button
    className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-semibold py-2 px-6 rounded-lg shadow-lg transform transition-all hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-pink-400 focus:ring-opacity-75"

    >Contact me</button>
    </Link>
    </div>
    <div className=' items-center'>
    <img src ="https://res.cloudinary.com/dpxkotl1n/image/upload/v1726472372/mjepl4jweilf1qghdwcv.png" alt="My photo"/>
    <p className='text-gray flex flex-row items-center border border-gray p-2'>
      <div className='w-4 h-4 bg-primary mx-2'></div>Currently learning Next.js
    </p>
    </div>

    </div>
  )
}

export default Hero