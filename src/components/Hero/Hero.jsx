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
            <div className={styles.statCard}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>
                Понад 500 авто успішно доставлено
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>$300</div>
              <div className={styles.statLabel}>
                Отримай від $300 за кожного нового клієнта
              </div>
            </div>

            <div className={styles.statCard}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>
                Понад 100 надійних партнерів по всій країні
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
