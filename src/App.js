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
    const arrow = document.querySelector('.next');
    const arrowInner = document.querySelector('.next__inner');
    const workTitle = document.getElementById('work__title');
    const projectCardTitle = document.querySelectorAll('.projectcard__title');
    const projectCardDesc = document.querySelectorAll('.projectcard__desc');
    const projectCardImg = document.querySelectorAll('.projectcard__img');

    arrow.classList.add('active__arrow');
    window.addEventListener('scroll', () => {

      if (workTitle.getBoundingClientRect().top < 600) {
        workTitle.classList.add('active__text');
        projectCardTitle.forEach(title => {
          title.classList.add('active__text');
        })
        projectCardDesc.forEach(description => {
          description.classList.add('active__text');
        })
        projectCardImg.forEach(image => {
          image.classList.add('active__image');
        })
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