import React from 'react';
import './ShowDate.scss';

function ShowDate() {
  const date = Date().split(' ');
  const month = date[1];
  const day = date[2];
  return (
    <div>
      {month}
      {day}
    </div>
  )
}

export default ShowDate;