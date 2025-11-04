import { ArrowRight, Car } from 'lucide-react';
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
          <div className={styles.iconWrapper}>
            <Car className={styles.icon} size={60} />
          </div>

          <h1 className={styles.title}>Партнерська програма</h1>

          <p className={styles.subtitle}>
            Ваш надійний партнер у пошуку та доставці авто з США
          </p>

          <p className={styles.description}>
            Приєднуйтесь до нашої партнерської програми та отримуйте гарантовані
            винагороди за кожного клієнта. Швидку доставку авто, професійний
            сервіс, прозорі умови, вигідні бонуси, та багато іншого.
          </p>

          <button
            onClick={onCTAClick}
            className={`btn btn-primary ${styles.ctaButton}`}
          >
            Прорахувати вартість
            <ArrowRight size={20} />
          </button>

          <div className={styles.stats}>
            <div className={styles.stat}>
              <div className={styles.statNumber}>500+</div>
              <div className={styles.statLabel}>Доставлених авто</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>100+</div>
              <div className={styles.statLabel}>Активних партнерів</div>
            </div>
            <div className={styles.stat}>
              <div className={styles.statNumber}>$500</div>
              <div className={styles.statLabel}>Бонус за клієнта</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
