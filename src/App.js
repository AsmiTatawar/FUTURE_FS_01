import React from 'react';
import Navbar from './components/Navbar';
import Intro from './components/Intro';
import About from './components/About';
import Skills from './components/Skills';
import Project from './components/Project';
import Achievements from './components/Achievements';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <Navbar />
      <main>
        <Intro/>
        <About/>
        <Skills/>
        <Project/>
        <Achievements/>
        <Resume/>
        <Contact/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
