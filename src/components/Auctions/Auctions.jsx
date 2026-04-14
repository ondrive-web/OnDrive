import React from 'react';
import { useTranslation } from 'react-i18next';
import { auctionsData } from '../../data/AuctionsSection.jsx';
import styles from './Auctions.module.css';

export default function AuctionsSection({ id }) {
  const { t } = useTranslation();

  const translations = t('auctions.items', { returnObjects: true });
  const transArray = Array.isArray(translations) ? translations : [];

  if (!auctionsData || auctionsData.length === 0) return null;

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('auctions.title', 'Аукциони')}</h2>

        <div className={styles.grid}>
          {auctionsData.map((auction, index) => {
            const translatedItem = transArray[index] || {};

            return (
              <div
                key={auction.id || index}
                className={styles.card}
                tabIndex="0"
              >
                <div className={styles.front}>
                  <img
                    src={auction.logo}
                    alt={translatedItem.name || auction.name || 'Auction'}
                    className={styles.logo}
                    loading="lazy"
                  />
                </div>

                <div className={styles.overlay}>
                  <h3 className={styles.name}>
                    {translatedItem.name || auction.name}
                  </h3>
                  <p className={styles.desc}>
                    {translatedItem.description || auction.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
