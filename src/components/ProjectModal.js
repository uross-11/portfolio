import React, { useEffect, useRef } from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';

const ProjectModal = () => {
  const { projectId, closeModal } = useGlobalContext();
  const modal = data.filter(item => item.id === projectId)[0]
  const modalRef = useRef();

  const handleExit = () => {
    modalRef.current.style.opacity = '0';
    setTimeout(() => {
      closeModal();
    }, 300);
  }

  useEffect(() => {
    modalRef.current.style.opacity = '1';
  }, [])

  return (
    <div ref={modalRef} className='projectmodal'>
      <div className='projectmodal__image'>
        <button className='projectmodal__exit' onClick={handleExit}>close</button>
        <img src={modal.img} alt={`${modal.title} img`} />
      </div>
      <div className="projectmodal__content">
        <h2 className='projectmodal__title'>{modal.title}</h2>
        <p className='projectmodal__description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem iure dolorum nobis ut tempora eveniet. Unde, incidunt ratione ad laboriosam amet magnam aspernatur ipsa distinctio exercitationem ut dicta minima at?</p>
        <div className='projectmodal__tech'>
          {modal.techstack.map((item, index) => {
            return <span key={index}>{item}</span>
          })}
        </div>
        <div className="projectmodal__url">
          <div className='projectmodal__url__live'>{modal.liveurl}</div>
          <div className='projectmodal__url__source'>{modal.sourceurl}</div>
        </div>
      </div>
    </div>
  );
}

export default ProjectModal;