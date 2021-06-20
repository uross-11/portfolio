import React from 'react';

const ShowDate = () => {
  const date = Date().split(' ');
  const month = date[1].toUpperCase();
  const day = date[2];
  return (
    <div className='container'>
      <div className="date">
        <div className="date__circle">
          <div className="date__inner">
            <div className="date__info">
              <span>{month}</span>
              <span>{day}</span>
              <span>ABOUT ME</span>
            </div>
          </div>
          <div className="date__border">
            <div className="date__border__bar date__left">
              <div className="date__progress"></div>
            </div>
            <div className="date__border__bar date__right">
              <div className="date__progress"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowDate;