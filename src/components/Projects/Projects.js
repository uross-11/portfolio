import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
const temparr = [1, 2, 3, 4];

const Projects = () => {
  return (
    <div>
      {temparr.map((num) => {
        return <div><ProjectCard key={num} num={num} /></div>
      })}
    </div>
  )
}

export default Projects;