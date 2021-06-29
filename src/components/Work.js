import React from 'react';
import Projects from './Projects';
import { VscArrowDown } from 'react-icons/vsc';

const Work = () => {
  return (
    <div id='work' className='work'>
      <h1 className='work__title'>
        <div className='overflow-h'>
          <p className='hidden__work__text'>
            Work
            <VscArrowDown className='work__title__arrow' />
          </p>
        </div>
      </h1>
      <Projects />
    </div>
  )
}

export default Work;