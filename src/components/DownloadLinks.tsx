import React from 'react';
import styles from '../styles/DownloadLinks.module.css';

function DownloadLinks() {
  return (
    <section id="download" className={styles.downloadLinks}>
      <h2>Download Poker Scoreboard</h2>
      <p>Get the app on Google Play and the App Store:</p>
      <a href="https://play.google.com/store" target="_blank" rel="noopener noreferrer">
        <img src="path/to/google-play-badge.png" alt="Google Play Store" />
      </a>
      <a href="https://www.apple.com/app-store/" target="_blank" rel="noopener noreferrer">
        <img src="path/to/app-store-badge.png" alt="Apple App Store" />
      </a>
    </section>
  );
}

export default DownloadLinks;
