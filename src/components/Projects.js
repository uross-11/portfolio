import React from 'react';
import ProjectCard from './ProjectCard';
import { data } from '../data';

const Projects = () => {

  return (
    <div className='container'>
      {data.map((num) => {
        return (
          <div key={num.id}>
            <ProjectCard {...num} />
          </div>
        )
      })}
    </div>
  )
}

export default Projects;