import styles from '../styles/Testimonials.module.css';

function Testimonials() {
  return (
    <section id="testimonials" className={styles.testimonials}>
      <h2>What Our Users Say</h2>
      <blockquote>
        <p>"This app has completely changed the way we play poker with friends. No more disputes over chip counts!"</p>
        <footer>- John Doe</footer>
      </blockquote>
      <blockquote>
        <p>"A must-have tool for any serious poker player. It keeps everything organized and easy to track."</p>
        <footer>- Jane Smith</footer>
      </blockquote>
    </section>
  );
}

export default Testimonials;
