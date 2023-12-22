// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        React Dashboard
      </Link>
      <ul className="navbar-links">
        <li className="navbar-item">
          <Link to="/dashboard" className="navbar-link">
            Dashboard
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
