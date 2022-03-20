import React from 'react';
import { useGlobalContext } from '../context';

const ProjectCard = ({ 
  id,
  shortdesc,
  title,
  img
}) => {
  const { openModal, setProjectId } = useGlobalContext();

  return (
    <div className='projectcard'>
      <div className='projectcard__img__container' onClick={() => {
        setProjectId(id);
        openModal();
      }}>
        <img className='projectcard__img hidden__work__image' src={img} alt="" />
      </div>
      <div className="projectcard__info">
        <div className="overflow-h">
          <h2 className='projectcard__title hidden__work__text'>{title}</h2>
        </div>
        <div className="overflow-h">
          <p className='projectcard__desc hidden__work__text'>{shortdesc}</p> 
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;