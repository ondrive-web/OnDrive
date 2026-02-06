import { useTranslation } from 'react-i18next';
import styles from './ReferralSection.module.css';
import { tiersData } from '../../data/TiersData';

const ReferralSection = () => {
  const { t } = useTranslation();
  const translations = t('referral.items', { returnObjects: true });

  const data = Array.isArray(translations)
    ? tiersData.map((item, i) => ({
        ...item,
        ...translations[i],
      }))
    : [];

  if (!data.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('referral.title')}
            <span className={styles.highlight}>
              {t('referral.titleHighlight')}
            </span>
          </h2>
          <p className={styles.subtitle}>{t('referral.subtitle')}</p>
        </div>

        <div className={styles.cardsGrid}>
          {data.map(tier => {
            const IconComponent = tier.icon;

            return (
              <div
                key={tier.id}
                className={`${styles.card} ${tier.isPopular ? styles.popularCard : ''}`}
              >
                <div className={styles.iconWrapper}>
                  <IconComponent size={24} strokeWidth={2} />
                </div>

                <div className={styles.tierInfo}>
                  <h3 className={styles.tierTitle}>{tier.title}</h3>
                  <span className={styles.tierCount}>{tier.count}</span>
                  <div className={styles.tierPrice}>{tier.price}</div>
                  <p className={styles.tierSubtext}>{tier.subtext}</p>
                </div>
              </div>
            );
          })}
        </div>

        <a
          href="https://t.me/Volodymyr_OnDrive"
          className={styles.ctaButton}
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('referral.ctaButton')}
        </a>
      </div>
    </section>
  );
};

export default ReferralSection;
