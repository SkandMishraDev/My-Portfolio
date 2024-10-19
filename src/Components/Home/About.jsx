import React from 'react'

const About = () => {
  return (
    <div className='p-8 bg-gray-100'>
    <h2 className='text-4xl font-bold text-slate-900 mb-6'>About Me</h2>
    <div className='flex flex-col md:flex-row md:space-x-8'>
      {/* Left Column: Personal Info */}
      <div className='md:w-1/2 mb-6'>
        <h3 className='text-2xl font-semibold text-slate-800 mb-2'>Who Am I?</h3>
        <p className='text-gray-700 mb-4'>
          I am Skand Mishra, a passionate Full Stack Developer with a background in Computer Science. I specialize in building responsive and user-friendly web applications that provide seamless experiences. My journey in technology began with a fascination for coding and problem-solving, which has evolved into a career that blends creativity with technical skills.
        </p>
        <h3 className='text-2xl font-semibold text-slate-800 mb-2'>My Skills</h3>
        <ul className='list-disc pl-5 text-gray-700'>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Vite</li>
          <li>Node.js, Express</li>
          <li>Tailwind CSS, Bootstrap</li>
          <li>Version Control (Git)</li>
          <li>APIs and RESTful Services</li>
        </ul>
      </div>

      {/* Right Column: Image */}

    </div>

    {/* Additional Info */}
    <div className='mt-8'>
      <h3 className='text-2xl font-semibold text-slate-800 mb-2'>My Journey</h3>
      <p className='text-gray-700'>
        Throughout my career, I have had the opportunity to work on various projects, ranging from startups to established enterprises. I thrive on challenges and continually seek opportunities to learn and grow. Whether it’s collaborating with a team or working independently, I am dedicated to delivering high-quality work that meets the needs of users.
      </p>
    </div>
  </div>
  )
}

export default About