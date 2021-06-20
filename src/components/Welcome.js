import React from 'react';
import ShowDate from './ShowDate';

const Welcome = () => {
  return (
    <div className='welcome'>
      <div className="hero container">
        <h1>Hello,<br/>I am Uroš</h1>
        
        <h3 className='job'>
          <svg className='job__arrow' width="24" height="24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd"><path d="M0 21l12-18 12 18h-24zm12-16.197l-10.132 15.197h20.263l-10.131-15.197"/></svg>
          <span className='job__title'>frontend developer</span>
        </h3>
      </div>
      <ShowDate />
    </div>
  )
}

export default Welcome;