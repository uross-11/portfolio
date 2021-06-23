import React from 'react';
import ShowDate from './ShowDate';
import { VscArrowDown } from 'react-icons/vsc';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="hero">
        <h1>Hello,<br/>I am Uroš</h1>
        <h3 className='job'>
          <VscArrowDown className='job__arrow' />
          <span className='job__title'>frontend developer</span>
        </h3>
      </div>
      <ShowDate />
      <VscArrowDown className='next' onClick={() =>{
        document.getElementById('work').scrollIntoView();
      }} />

    </div>
  )
}

export default Welcome;