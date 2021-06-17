import React from 'react';
import './Navbar.scss';
import { VscGithubAlt, VscArrowDown } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <button>
        resume
        <VscArrowDown />
      </button>
      {/* <VscGithubAlt /> */}
      <button>
        Work
      </button>
      <button>
        Contact Me
      </button>
    </nav>
  )
}

export default Navbar;