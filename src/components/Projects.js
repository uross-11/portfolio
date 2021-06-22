import React from 'react';
import ProjectCard from './ProjectCard';
import { data } from '../data';

const Projects = () => {

  return (
    <div className='container projects'>
      {data.map((num) => <ProjectCard key={num.id} {...num} />)}
    </div>
  )
}

export default Projects;