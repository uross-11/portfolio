import React from 'react';
import './Welcome.scss';
import Hero from '../Hero/Hero';
import Date from '../Date/Date';

const Welcome = () => {
  return (
    <div className='welcome'>
      <Hero />
      <Date />
    </div>
  )
}

export default Welcome;