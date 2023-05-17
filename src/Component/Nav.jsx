import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

const Nav = () => (
  <nav className="nav">
    <div className="header">Math Magician</div>
    <ul className="link">
      <li>
        <Link to="/Home" className="font">Home</Link>
      </li>
      |
      <li>
        <Link to="/Calculator">Calculator</Link>
      </li>
      |
      <li>
        <Link to="/Quote">Quote</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;
