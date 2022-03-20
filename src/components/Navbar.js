import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <nav className='navbar hidden__navbar'>
      <a className='navbar__link resume' href='/'>
        resume
        <VscArrowDown />
      </a>
      <span className='navbar__link' onClick={() => {
        document.getElementById('work').scrollIntoView();
      }}>
        Work
      </span>
      <span className='navbar__link' onClick={() => {
        document.getElementById('contact').scrollIntoView();
      }}>
        Contact Me
      </span>
    </nav>
  )
}

export default Navbar;