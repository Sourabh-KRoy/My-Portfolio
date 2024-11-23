import React, { useState } from 'react';
import './Navbar.css';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <a href="/">
          <span>S</span>ourabh.
        </a>
      </div>
      <ul className={`navbar-nav ${mobileMenuOpen ? 'mobile show' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/about" className="nav-link">
            About
          </a>
        </li>
        <li className="nav-item">
          <a href="/education" className="nav-link">
            Education
          </a>
        </li>
        <li className="nav-item">
          <a href="/service" className="nav-link">
            Services
          </a>
        </li>
        <li className="nav-item">
          <a href="/project" className="nav-link">
            Projects
          </a>
        </li>
        <li className="nav-item">
          <a href="/contact" className="nav-link">
            Contact
          </a>
        </li>
      </ul>
      <i
        id="menu-icon"
        className={`bx ${mobileMenuOpen ? 'bx-x' : 'bx-menu'}`}
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
