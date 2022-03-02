import React from 'react';
const links = [
  {
    text: 'GitHub',
    url: '#',
  },
  {
    text: 'LinkedIn',
    url: '#',
  },
  {
    text: 'Twitter',
    url: '#',
  },
  {
    text: 'Dribbble',
    url: '#',
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__links container">
        {links.map((item, index) => {
          return <a className='footer__link' key={index} href={item.url}>
            {item.text}
          </a>
        })}
      </div>
    </footer>
  );
}

export default Footer;