import React from 'react';
const links = [
  'github',
  'twitter',
  'instagram',
  'codepen']

const Footer = () => {
  return (
    <div>
      <h1>footer</h1>
      {links.map((item, index) => {
        return <div key={index}>
          {item}
        </div>
      })}
    </div>
  )
}

export default Footer;