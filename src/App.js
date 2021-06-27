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

  const body = document.querySelector('body');

  // Prevent scroll when modal opens
  useEffect(() => {
    if (isModalOpen) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'scroll'
    }
  })

  return (
    <div
      className={`${darkMode ? 'dark' : 'light'} app`
    }> 
      {/* <Loading /> */}
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