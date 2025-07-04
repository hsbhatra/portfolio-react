import React, { useState, useEffect } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Scroll shadow effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled ? 'header-scrolled' : ''}`} id="header">
      <div className="container">
        <a href="#hero" className="logo">
          <h2>Him<span>anshu</span></h2>
        </a>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <ul>
            <a href="#stack" onClick={() => setMenuOpen(false)}><li>Tech Stack</li></a>
            <a href="#projects" onClick={() => setMenuOpen(false)}><li>Projects</li></a>
            <a href="#experience" onClick={() => setMenuOpen(false)}><li>Work Experience</li></a>
            <a href="#contact" onClick={() => setMenuOpen(false)}><li>Contact</li></a>
          </ul>
        </nav>

        <div className={`mobile-nav-toggle ${menuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburger"></div>
          <div className="hamburger bottom-line"></div>
        </div>
      </div>
    </header>
  );
};

export default Header;
