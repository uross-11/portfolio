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
        onClick={() => {
          const dateText = document.getElementById('date-text');
          const dateAbout = document.getElementById('date-about')
          if(dateText.classList.contains('date__info__text--on')){
            dateText.classList.remove('date__info__text--on');
            dateAbout.classList.remove('date__info__about--off')
          } else {
            dateText.classList.add('date__info__text--on');
            dateAbout.classList.add('date__info__about--off')
          }

        }}
      >
      <div className="date__info">
        <div className='date__info__text' id='date-text'>Hi there! My name is Uroš, and I am a web developer. I enjoy creating stuff with code and learning about new things related to programming.</div>
        <div className='date__info__month overflow-h'>
          <div className='hidden__welcome__text'>{month}</div>
        </div>
        <div className='date__info__day overflow-h'>
          <div className='hidden__welcome__text'>{day}</div>
        </div>
        <div className='date__info__about overflow-h'>
          <div className='hidden__welcome__text' id='date-about'>ABOUT ME</div>
        </div>
      </div>
        <svg
          width="120"
          height="120">
          <circle
            id="circle"
            className="date__circle__progress"
            stroke="white"
            strokeWidth="0.2"
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