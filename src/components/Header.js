import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h1>Welcome to RapsodAz</h1>
      <nav>
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/blog" className="nav-link">Blog Poems</Link>
        <Link to="/blogtwo" className="nav-link">Heart</Link>
        <Link to="/motivation" className="nav-link">Motivation</Link>
      </nav>
    </header>
  );
}

export default Header;
