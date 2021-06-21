import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';

const ProjectModal = () => {
  const { projectId, closeModal } = useGlobalContext();
  const modal = data.filter(item => item.id === projectId)[0]

  return (
    <div className='projectmodal'>
      <div className='projectmodal__image'>
        <button className='projectmodal__exit' onClick={closeModal}>x</button>
        <img src={modal.img} alt={`${modal.title} image`} />
      </div>
      <div className="projectmodal__content container">
        <h2 className='projectmodal__title'>{modal.title}</h2>
        <p className='projectmodal__description'>{modal.longdesc}</p>
        <div className='projectmodal__tech'>
          {modal.techstack.map(item => {
            return <span>{item}</span>
          })}
        </div>
        <div className='projectmodal__liveurl'>{modal.liveurl}</div>
        <div className='projectmodal__sourceurl'>{modal.sourceurl}</div>

      </div>
    </div>
  );
}

export default ProjectModal;