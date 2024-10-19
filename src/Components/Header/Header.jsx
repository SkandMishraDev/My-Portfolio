import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <div
    className='bg-blue-400  flex h-auto md:h-52 justify-between'>
      <h2 className='font-semibold'>Skand Mishra</h2>
        <div className='flex w-full lg:w-96 '>
          <div>
          <NavLink
          to=''
          className={({isActive})=>( isActive?  "text-white" : "")}
          >
            Home
          </NavLink>
        </div>
        <div>
          <NavLink
          to='/work'
          className={({isActive})=>( isActive?  "text-white" : "")}
          >
            Work
          </NavLink>
        </div>
        <div>
          <NavLink
          to='/about'
          className={({isActive})=>( isActive?  "text-white" : "")}
          >
            About Me
          </NavLink>
        </div>
        <div>
          <NavLink
          to='/contact'
          className={({isActive})=>( isActive?  "text-white" : "")}
          >
            Contact
          </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Header;