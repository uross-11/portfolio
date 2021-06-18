import React from 'react';
import '../styles/components/ShowDate.scss';

const ShowDate = () => {
  const date = Date().split(' ');
  const month = date[1];
  const day = date[2];
  return (
    <div>
      {month}
      {day}
      about me
    </div>
  )
}

export default ShowDate;