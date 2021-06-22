import React from 'react';

const ShowDate = () => {
  const date = Date().split(' ');
  const month = date[1].toUpperCase();
  const day = date[2];
  return (
    <div className="date container">
      <div className="date__circle">
      <div className="date__info">
        <span className='date__info__month'>{month}</span>
        <span className='date__info__day'>{day}</span>
        <span className='date__info__about'>ABOUT ME</span>
      </div>
        <svg
          width="120"
          height="120">
          <circle
            class="date__circle__progress"
            stroke="white"
            stroke-width="0.2"
            fill="transparent"
            r="53"
            cx="60"
            cy="62"/>
        </svg>
      </div>
    </div>
  )
}

export default ShowDate;