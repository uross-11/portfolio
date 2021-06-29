import { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

import Welcome from './components/Welcome';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import Loading from './components/Loading';
import ProgressBar from './components/ProgressBar';

import './styles/main.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const {isModalOpen} = useGlobalContext();

  // Prevent scroll when modal opens
  const body = document.querySelector('body');
  if (isModalOpen) {
    body.style.overflowY = 'hidden'
  } else {
    body.style.overflowY = 'scroll'
  }

  // Animations
  document.addEventListener('DOMContentLoaded', () => {
    // Navbar
    const navbar = document.querySelector('.navbar');

    // Welcome
    const arrow = document.querySelector('.next');
    const arrowInner = document.querySelector('.next__inner');
    const hiddenWelcomeText = document.querySelectorAll('.hidden__welcome__text')

    // Work
    const workTitle = document.querySelector('.work__title')
    const hiddenWorkText = document.querySelectorAll('.hidden__work__text');
    const projectCardImg = document.querySelectorAll('.projectcard__img');

    // Contact
    const contact = document.querySelector('.contact__title');
    const hiddenContactText = document.querySelectorAll('.hidden__contact__text');
    const form = document.querySelectorAll('.hidden__contact__form');

    // On page load
    arrowInner.classList.add('disabled__arrow');
    setTimeout(() => {
      navbar.classList.add('active__navbar');
      arrowInner.classList.remove('disabled__arrow');
      arrow.classList.add('active__arrow');
      hiddenWelcomeText.forEach(text => text.classList.add('active__text'));
    }, 2000)

    // On scroll load
    window.addEventListener('scroll', () => {

      if (workTitle.getBoundingClientRect().top < 600) {
        hiddenWorkText.forEach(text => text.classList.add('active__text'));
        projectCardImg.forEach(image => image.classList.add('active__image'))
      }

      if (contact.getBoundingClientRect().top < 600) {
        hiddenContactText.forEach(text => text.classList.add('active__text'));
        form.forEach(item => item.classList.add('active__form'));
      }
      
      if (window.scrollY < 100) {
        arrowInner.classList.remove('disabled__arrow');
        arrow.classList.add('active__arrow');
      } else {
        arrow.classList.remove('active__arrow');
        arrowInner.classList.add('disabled__arrow')
      }
    })
  })

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} app`
    }> 
      <Loading />
      <Navbar />
      {isModalOpen && <ProjectModal />}
      <ProgressBar />
      <Welcome />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;