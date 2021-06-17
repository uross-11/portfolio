import React from 'react';
import './ProjectModal.scss';
import {listOfProjects} from '../../listOfProjects';
import { useGlobalContext } from '../../context';

const ProjectModal = () => {
  const { projectId } = useGlobalContext();

  return (
    <div>
      <h1>modal {projectId}</h1>
    </div>
  );
}

export default ProjectModal;