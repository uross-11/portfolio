import React from 'react'
import name from './name.png'
import './Welcome.scss';

const Welcome = () => {
  return (
    <div className='welcome'>
      <h1>Hello.<br/>I am Uros</h1>
      <img src={name} alt="name" />
    </div>
  )
}

export default Welcome;