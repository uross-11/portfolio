import React from 'react';
import ShowDate from './ShowDate';
import { VscArrowDown } from 'react-icons/vsc';

const Welcome = () => {

  return (
    <div className='welcome'>
      <div className="hero">
        <h1>
          <div className='overflow-h'>
            <p className='hidden__welcome__text'>Hello,</p>
          </div>
          <div className="overflow-h">
            <p className='hidden__welcome__text'>I am Uroš</p>
          </div>
        </h1>
        <h3 className='job overflow-h'>
          <div className='hidden__welcome__text'>
            <VscArrowDown className='job__arrow' />
            <span className='job__title'>frontend developer</span>
          </div>
        </h3>
      </div>
      <ShowDate />
      <div
        className="next overflow-h"
      >
        <VscArrowDown
          className='hidden__next__button next__button'
          onClick={() => {
            document.getElementById('work').scrollIntoView();
          }}
        />
      </div>
    </div>
  )
}

export default Welcome;