import './App.css';
import './styles/main.scss';
import Welcome from './components/Welcome/Welcome';
import Work from './components/Work/Work';
import Contact from './components/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { useState } from 'react';

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? 'dark' : 'light'} app`}> 
      <Navbar />
      <Welcome />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;