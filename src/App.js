import Header, { HeaderPhone } from "./components/Header";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from "react";
import Process from "./components/Process";
import Loader from "./components/Loader";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading ? (
        <Loader/>
      ) : (
        <>
          <HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
          <Home />
          <Skills />
          <Process />
          <Projects />
          <Contact />
          <Footer />
          <Toaster />
        </>
      )}
    </>
  );
}

export default App;
