import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Header.css';

function Header() {
  return (
    <header className="App-header">
      <h1>My Awesome App</h1>
      <nav>
        <Link to="/" className="nav-link">Home (Text Gallery)</Link>
        <Link to="/blog" className="nav-link">Blog (Poems)</Link>
      </nav>
    </header>
  );
}

export default Header;
