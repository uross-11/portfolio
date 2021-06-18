import React from 'react';

const ShowDate = () => {
  const date = Date().split(' ');
  const month = date[1];
  const day = date[2];
  return (
    <div className='container'>
      <div className="date">
        <span>{month}</span>
        <span>{day}</span>
        <span>about me</span>
      </div>
    </div>
  )
}

export default ShowDate;