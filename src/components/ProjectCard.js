import React from 'react';
import { useGlobalContext } from '../context';

const ProjectCard = ({ 
  id,
  shortdesc,
  title,
}) => {
  const { openModal, setProjectId } = useGlobalContext();

  return (
    <div className='projectcard'>
      <div className='img' onClick={() => {
        setProjectId(id);
        openModal();
      }}>
        <img src='../images/img.png' alt="" />
      </div>
      <div className="projectcard__info">
        <h2>{title}</h2>
        <p className='projectcard__desc'>{shortdesc}</p> 
      </div>
    </div>
  )
}

export default ProjectCard;