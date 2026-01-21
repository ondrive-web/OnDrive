import { useTranslation } from 'react-i18next';
import { auctionsData } from '../../data/AuctionsSection.jsx';
import styles from './Auctions.module.css';

export default function AuctionsSection() {
  const { t } = useTranslation();

  const translations = t(`auctions.items`, { returnObjects: true });

  const data = Array.isArray(translations)
    ? auctionsData.map((item, index) => ({
        ...item,
        ...translations[index],
      }))
    : [];

  if (!data.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('auctions.title')}</h2>

        <div className={styles.grid}>
          {data.map((auction, index) => (
            <div
              key={auction.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={styles.front}>
                <img
                  src={auction.logo}
                  alt={auction.name}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>

              <div className={styles.overlay}>
                <h3 className={styles.name}>{auction.name}</h3>
                <p className={styles.desc}>{auction.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
