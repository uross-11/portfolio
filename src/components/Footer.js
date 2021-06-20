import React from 'react';
const links = [
  {
    text: 'GitHub',
    url: '#',
  },
  {
    text: 'Twitter',
    url: '#',
  },
  {
    text: 'CodePen',
    url: '#',
  },
];

const Footer = () => {
  return (
    <footer className='footer'>
      <div className="footer__links">
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