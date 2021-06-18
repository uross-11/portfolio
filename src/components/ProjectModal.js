import React from 'react';
import '../styles/components/ProjectModal.scss';
import { useGlobalContext } from '../context';

const ProjectModal = () => {
  const { projectId } = useGlobalContext();

  return (
    <div>
      <h1>modal {projectId}</h1>
    </div>
  );
}

export default ProjectModal;