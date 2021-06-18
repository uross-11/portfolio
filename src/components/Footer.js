import React from 'react';
const links = [
  {
    text: 'GitHub',
    url: '',
  },
  {
    text: 'Twitter',
    url: '',
  },
  {
    text: 'CodePen',
    url: '',
  },
];

const Footer = () => {
  return (
    <footer>
      <h1>footer</h1>
      {links.map((item, index) => {
        return <a key={index} href={item.url}>
          {item.text}
        </a>
      })}
    </footer>
  );
}

export default Footer;