import React from 'react';

const ContactHome = () => {
  return (
    <div className='p-8 bg-gray-100'>
      <h2 className='text-4xl font-bold text-slate-900 mb-6'>Contact Me</h2>
      <p className='text-lg text-gray-700 mb-4'>
        I’d love to hear from you! Whether you have a question or just want to say hello, feel free to reach out.
      </p>

      <div className='flex flex-col md:flex-row md:space-x-8'>
        {/* Contact Details */}
        <div className='md:w-1/2'>
          <h3 className='text-2xl font-semibold text-slate-800 mb-4'>Get in Touch</h3>
          <p className='text-gray-700 mb-2'>
            📞 Phone: <a href='tel:+1234567890' className='text-purple-600 hover:underline'>+1 (234) 567-890</a>
          </p>
          <p className='text-gray-700 mb-2'>
            📧 Email: <a href='mailto:your-email@example.com' className='text-purple-600 hover:underline'>skandmishra9169@gmail.com</a>
          </p>
        </div>

        {/* Social Links */}
        <div className='md:w-1/2 flex justify-end'>
          <div className='mx-10'>
          <h3 className='text-2xl font-semibold text-slate-800 mb-4'>Follow Me</h3>
          <div className='flex  space-y-2'>
            <a
              href='https://www.linkedin.com/in/skand-mishra-561623328?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ' // Replace with your LinkedIn URL
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-purple-600 hover:underline'
            >
              <span className='mr-2 '><img src='https://res.cloudinary.com/dgktguczj/image/upload/v1729372059/MY-portfolio/kqsmdtdeg5ta8naw0cep.svg' className='w-12  m-2'/> LinkedIn</span>
            </a>
            <a
              href='https://www.instagram.com/your-instagram-profile' // Replace with your Instagram URL
              target='_blank'
              rel='noopener noreferrer'
              className='flex items-center text-purple-600 hover:underline'
            >
              <span className='mr-2'><img src='https://res.cloudinary.com/dgktguczj/image/upload/v1729372035/MY-portfolio/r8vfckiwlitp7bkjuwbv.svg' className='w-12 m-2'/> Instagram</span>
            </a>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactHome;
