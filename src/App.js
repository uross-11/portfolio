import { useState, useEffect } from 'react';
import { useGlobalContext } from './context';

import Welcome from './components/Welcome';
import Work from './components/Work';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';

import './App.css';
import './styles/main.scss';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);
  const {isModalOpen} = useGlobalContext();

  /* useEffect(() => {
    return
  }, []) */

  return (
    <div className={`${darkMode ? 'dark' : 'light'} app`}> 
      <Navbar />
      {isModalOpen && <ProjectModal />}
      <Welcome />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;