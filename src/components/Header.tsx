import React from 'react';
import styles from '../styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1>Poker Scoreboard</h1>
      <nav>
        <ul>
          <li><a href="#info">Poker Info</a></li>
          <li><a href="#features">App Features</a></li>
          <li><a href="#download">Download</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
