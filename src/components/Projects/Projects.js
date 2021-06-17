import React from 'react';
import ProjectCard from '../ProjectCard/ProjectCard';
import {listOfProjects} from '../../listOfProjects';
import { useGlobalContext } from '../../context';

const Projects = () => {
  const { openModal, setProjectId  } = useGlobalContext();

  return (
    <div>
      {listOfProjects.map((num, index) => {
        return (
          <div key={index}>
            <ProjectCard {...num} />
            <button onClick={() => {
              setProjectId(index);
              openModal();
            }}>open</button>
          </div>
        )
      })}
    </div>
  )
}

export default Projects;