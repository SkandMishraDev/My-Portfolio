import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from '../ProjectCard/ProjectCard';

const Projects = () => {
  return (
    <div className='p-8'>
      {/* Header Section */}
      <div className='flex justify-between items-center mb-8'>
        <h1 className='text-3xl font-bold text-slate-900'>Projects</h1>
        <Link to='/Work' className='text-purple-600 hover:underline font-medium'>
          View all
        </Link>
      </div>
      
      {/* Project Card */}
      <div className='grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectCard/>
     
        
        {/* Add more project cards as needed */}
      </div>
    </div>
  );
}

export default Projects;
