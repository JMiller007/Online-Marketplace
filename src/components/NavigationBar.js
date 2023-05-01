import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar__container">
        
        <ul className="navbar__menu">
          <li className="navbar__item">
            <Link to="/" className="navbar__link">
              Home
            </Link>
          </li>
          <li className="navbar__item">
            <Link to="/account" className="navbar__link">
              Account
            </Link>
          </li>
          <li className="navbar__item">
            <Link to= "/signin" className="navbar__link">
              Sign In
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
