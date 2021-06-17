import React from 'react';
import Projects from '../Projects/Projects';

const ProjectCard = ({ 
  shortdesc,
  longdesc,
  img,
  title,
  techstack,
  liveurl,
  sourceurl
}) => {
  return (
    <div>
      {shortdesc}
      {longdesc}
      {img}
      {title}
    </div>
  )
}

export default ProjectCard;