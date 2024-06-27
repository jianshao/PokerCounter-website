import styles from '../styles/PokerInfo.module.css';

function PokerInfo() {
  return (
    <section id="info" className={styles.pokerInfo}>
      <h2>About Poker</h2>
      <p>Poker is a family of card games that combines gambling, strategy, and skill. All poker variants involve betting as an intrinsic part of play, and determine the winner of each hand according to the combinations of players' cards, at least some of which remain hidden until the end of the hand.</p>
      <p>Notable players in the world of poker include legends like Doyle Brunson, Phil Ivey, and Daniel Negreanu, who have not only won numerous tournaments but have also significantly contributed to the game's popularity.</p>
    </section>
  );
}

export default PokerInfo;
