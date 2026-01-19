import styles from './ReferralSection.module.css';
import { tiersData } from '../../data/TiersData';

const ReferralSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Партнерська <span className={styles.highlight}>програма</span>
          </h2>
          <p className={styles.subtitle}>
            Чим більше клієнтів ви залучаєте, тим вищі ваші винагороди. Ми
            цінуємо довгострокові відносини.
          </p>
        </div>

        <div className={styles.cardsGrid}>
          {tiersData.map(tier => (
            <div
              key={tier.id}
              className={`${styles.card} ${tier.isPopular ? styles.popularCard : ''}`}
            >
              <div className={styles.iconWrapper}>{tier.icon}</div>

              <div className={styles.tierInfo}>
                <span className={styles.tierCount}>{tier.count}</span>
                <h3 className={styles.tierPrice}>{tier.price}</h3>
                <p className={styles.tierSubtext}>{tier.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        <a
          href="https://t.me/VoFkA146"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          Стати партнером
        </a>
      </div>
    </section>
  );
};

export default ReferralSection;
