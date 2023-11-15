import { useEffect } from "react";
import { useGlobalContext } from "./useGlobalContext";
import { handleAnimation, handleScrollLock } from "./utils";
import {
  ProgressBar,
  Loading,
  ProjectModal,
  Footer,
  Navbar,
  Contact,
  Work,
  Welcome,
} from "./components/";
import "./styles/main.scss";

const App = () => {
  const { isModalOpen } = useGlobalContext();

  useEffect(() => {
    window.scrollTo(0, 0);

    handleAnimation();
  }, []);

  useEffect(() => handleScrollLock(isModalOpen), [isModalOpen]);

  return (
    <div className="dark app">
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
};

export default App;
