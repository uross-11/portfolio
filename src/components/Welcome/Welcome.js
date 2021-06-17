import React from 'react';
import './Welcome.scss';
import Hero from '../Hero/Hero';
import ShowDate from '../ShowDate/ShowDate';

const Welcome = () => {
  return (
    <div className='welcome'>
      <Hero />
      <p>frontend developer</p>
      <ShowDate />
      about
    </div>
  )
}

export default Welcome;