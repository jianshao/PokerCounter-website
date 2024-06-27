import React from 'react';
import styles from '../styles/AppFeatures.module.css';

function AppFeatures() {
  return (
    <section id="features" className={styles.appFeatures}>
      <h2>App Features</h2>
      <p>Our Poker Scoreboard app offers a range of features to enhance your poker game experience:</p>
      <ul>
        <li>Real-time tracking of buy-ins and scores</li>
        <li>View your historical game data</li>
        <li>Easy-to-use interface</li>
        <li>Avoid mistakes in chip calculations</li>
      </ul>
      <p>Whether you're playing with friends or competing in a serious game, our app ensures accurate scorekeeping and a smoother gameplay experience.</p>
    </section>
  );
}

export default AppFeatures;
