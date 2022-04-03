import React from 'react';
import { VscArrowDown } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <nav className='navbar hidden__navbar'>
      <a className='navbar__link resume' href='/'>
        RESUME
        <VscArrowDown />
      </a>
      <span className='navbar__link' onClick={() => {
        document.getElementById('work').scrollIntoView();
      }}>
        WORK
      </span>
      <span className='navbar__link' onClick={() => {
        document.getElementById('contact').scrollIntoView();
      }}>
        CONTACT ME
      </span>
    </nav>
  )
}

export default Navbar;