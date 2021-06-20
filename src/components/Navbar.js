import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a className='navbar__link' href='#'>
        resume
        <VscArrowDown />
      </a>
      <a className='navbar__link' href='#work'>
        Work
      </a>
      <a className='navbar__link' href='#contact'>
        Contact Me
      </a>
    </nav>
  )
}

export default Navbar;