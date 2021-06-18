import React from 'react';
import { useGlobalContext } from '../context';

const ProjectCard = ({ 
  id,
  shortdesc,
  longdesc,
  img,
  title,
  techstack,
  liveurl,
  sourceurl
}) => {
  const { openModal, setProjectId } = useGlobalContext();

  return (
    <div>
      {title}
      {shortdesc}
      <div onClick={() => {
        setProjectId(id);
        openModal();
      }}>
        {img}
      </div>
    </div>
  )
}

export default ProjectCard;