import HeroSlider from './HeroSlider';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
        <div className={styles.gradient3} />
      </div>

      <div className={styles.content}>
        <HeroSlider />


      </div>
    </section>
  );
}
