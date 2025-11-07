import { CircleArrowRight } from 'lucide-react';
import HeroSlider from './HeroSlider';

import styles from './Hero.module.css';

export default function Hero({ onCTAClick }) {
  return (
    <section className={styles.hero}>
      <div className={styles.background}>
        <div className={styles.gradient1} />
        <div className={styles.gradient2} />
        <div className={styles.gradient3} />
      </div>

      <div className="container">
        <div className={styles.content}>
          <HeroSlider />

          <button
            onClick={onCTAClick}
            className={`btn btn-primary ${styles.ctaButton}`}
          >
            Прорахувати вартість
            <CircleArrowRight size={40} />
          </button>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Доставлених авто</div>
            </div>
            <div className={styles.stat}>
              <div className={`${styles.statNumber} ${styles.bonus}`}>$300</div>
              <div className={styles.statLabel}>Бонус за клієнта</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Активних партнерів</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
