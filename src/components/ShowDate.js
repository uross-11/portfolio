import React from 'react';

const ShowDate = () => {
  const date = Date().split(' ');
  const month = date[1].toUpperCase();
  const day = date[2];

  return (
    <div className="date container">
      <div className="date__circle"
        onMouseEnter={() => {
          document.getElementById('circle').classList.add('date__circle__progress--on')
        }}
        onMouseLeave={() => {
          document.getElementById('circle').classList.remove('date__circle__progress--on');
        }}
      >
      <div className="date__info">
        <div className='date__info__month overflow-h'>
          <div className='hidden__welcome__text'>{month}</div>
        </div>
        <div className='date__info__day overflow-h'>
          <div className='hidden__welcome__text'>{day}</div>
        </div>
        <div className='date__info__about overflow-h'>
          <div className='hidden__welcome__text'>ABOUT ME</div>
        </div>
      </div>
        <svg
          width="120"
          height="120">
          <circle
            id="circle"
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