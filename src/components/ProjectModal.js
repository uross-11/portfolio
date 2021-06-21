import React, { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { data } from '../data';

const ProjectModal = () => {
  const { projectId, closeModal } = useGlobalContext();
  const modal = data.filter(item => item.id === projectId)[0]

  return (
    <div className='projectmodal'>
      <h1>{modal.title}</h1>
      <button onClick={closeModal}>x</button>
      <p>{modal.longdesc}</p>
      <div>{modal.techstack}</div>
      <div>{modal.liveurl}</div>
      <div>{modal.sourceurl}</div>
      <div>
        <img src={modal.img} alt="" />
      </div>
    </div>
  );
}

export default ProjectModal;