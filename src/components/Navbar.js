import React from 'react';
import { VscGithubAlt, VscArrowDown } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <a href='#'>
        resume
        <VscArrowDown />
      </a>
      {/* <VscGithubAlt /> */}
      <a href='#'>
        Work
      </a>
      <a href='#'>
        Contact Me
      </a>
    </nav>
  )
}

export default Navbar;