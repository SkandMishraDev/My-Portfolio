import React from 'react'
import PaytmLogo from './PaytmLogo'

const ProjectCard = () => {
  return (
    <>
    <div>
    <div className='border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow'>
    <img
    className='w-full h-48 object-cover rounded-md mb-4'
    src='https://res.cloudinary.com/dgktguczj/image/upload/v1729360322/samples/cloudinary-icon.png'
    alt='Password Generator'
     />  
    <p className='text-purple-500 font-semibold text-sm mb-2'>HTML • CSS • JavaScript • React • Node.js • MongoDb</p>
    <h3 className='text-xl font-medium text-slate-900 mb-2'>PayTm Clone</h3>
    <p className='text-slate-700 mb-4'>
      Created a Paytm clone to sharpen my skills in web development.
    </p>
    <a
      href='https://github.com/SkandMishraDev/Paytm-Clone' // Replace with your actual project link
      target='_blank' // Open in a new tab
      rel='noopener noreferrer' // Security best practice
      className='inline-block bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors'
    >
      View Project
    </a>
  </div>
  </div>
  
    <div>
  <div className='border border-gray-300 rounded-lg shadow-md p-6 bg-white hover:shadow-lg transition-shadow'>
  <img
    className='w-full h-48 object-cover rounded-md mb-4'
    src='https://res.cloudinary.com/dgktguczj/image/upload/v1729368657/MY-portfolio/w3d0i9i9shta62uf3ije.jpg'
    alt='Password Generator'
  />
  <p className='text-purple-500 font-semibold text-sm mb-2'>HTML • React • JavaScript</p>
  <h3 className='text-xl font-medium text-slate-900 mb-2'>Password Generator</h3>
  <p className='text-slate-700 mb-4'>
    Created a Paytm clone to sharpen my skills in web development.
  </p>
  <a
    href='https://github.com/SkandMishraDev/React-password-Generator' // Replace with your actual project link
    target='_blank' // Open in a new tab
    rel='noopener noreferrer' // Security best practice
    className='inline-block bg-purple-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-purple-600 transition-colors'
  >
    View Project
  </a>
</div>
</div>
</>

  )
}

export default ProjectCard