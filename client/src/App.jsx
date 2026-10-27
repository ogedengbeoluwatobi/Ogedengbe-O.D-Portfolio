import { useCallback, useState } from "react";
import Navbar from "./components/Navbar";
import ContactModal from "./components/ContactModal";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import useScrollReveal from "./hooks/useScrollReveal";

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const openModal = useCallback(() => setModalOpen(true), []);
  const closeModal = useCallback(() => setModalOpen(false), []);

  useScrollReveal();

  return (
    <>
      <Navbar />
      <ContactModal open={modalOpen} onClose={closeModal} />
      <main>
        <Hero onContact={openModal} />
        <About onContact={openModal} />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}
