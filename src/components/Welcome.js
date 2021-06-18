import React from 'react';
import '../styles/components/Welcome.scss';
import Hero from './Hero';
import ShowDate from './ShowDate';

const Welcome = () => {
  return (
    <div className='welcome'>
      <Hero />
      <p>frontend developer</p>
      <ShowDate />
    </div>
  )
}

export default Welcome;