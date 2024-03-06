import React from 'react';
import './App.css';

import Navbar from './Navbar';
import About from './About';
import Works from './Works';
import Contact from './Contact';
import Skills from './Skills';
import Footer from './Footer';


function App() {
  return (
    <div className="App">
      <Navbar />
      <About />
      <Skills />
      <Works />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
