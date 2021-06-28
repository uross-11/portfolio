import React from 'react';
import ShowDate from './ShowDate';
import { VscArrowDown } from 'react-icons/vsc';

const Welcome = () => {

  return (
    <div className='welcome'>
      <div className="hero">
        <h1>
          <div className='overflow-h'>
            <p className='hero__span'>Hello,</p>
          </div>
          <div className="overflow-h">
            <p className='hero__span'>I am Uroš</p>
          </div>
        </h1>
        <h3 className='job overflow-h'>
          <div>
            <VscArrowDown className='job__arrow' />
            <span className='job__title'>frontend developer</span>
          </div>
        </h3>
      </div>
      <ShowDate />
      <div className="next">
        <img
          id='arrow'
          className='next__inner'
          src="https://uploads-ssl.webflow.com/5fa2eabfcd722774771f4fa2/606e304b7cbbedcb1e174f6f_footer%20arrow.svg"
          alt="next-arrow"
          onClick={() =>{
            document.getElementById('work').scrollIntoView();
          }}
        />
      </div>
    </div>
  )
}

export default Welcome;