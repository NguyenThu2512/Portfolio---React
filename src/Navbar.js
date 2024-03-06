import React, { useState, useEffect } from 'react'



function Navbar() {
  const [activeSection, setActiveSection] = useState('');
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('.section');
      sections.forEach((section) => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        if (window.pageYOffset >= top && window.pageYOffset < top + height) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <div className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
            THUNGUYEN.
        </div>
        <div className="navbar-menu">
          <a href="#about" className={activeSection === 'about' ? 'active' : ''}>About</a>
          <a href="#skills" className={activeSection === 'skills' ? 'active' : ''}>Skills</a>
          <a href="#works" className={activeSection === 'works' ? 'active' : ''}>Works</a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>Contacts</a>
          
        </div>
      </div>
    </div>
  )
}

export default Navbar
