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
      <div className='img__container' onClick={() => {
        setProjectId(id);
        openModal();
      }}>
        <img className='projectcard__img' src='../images/img.png' alt="" />
      </div>
      <div className="projectcard__info">
        <div className="overflow-h">
          <h2 className='projectcard__title'>{title}</h2>
        </div>
        <div className="overflow-h">
          <p className='projectcard__desc'>{shortdesc}</p> 
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;