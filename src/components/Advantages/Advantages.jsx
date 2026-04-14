import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.css';
import { advantagesIcons } from '../../data/AdvantagesIcons.jsx';

const AdvantagesSection = ({ id }) => {
  const { t } = useTranslation();

  const items = t('advantages.items', { returnObjects: true });

  if (!Array.isArray(items)) return null;

  const totalItemsCount = String(items.length).padStart(2, '0');

  return (
    <section id={id} className={styles.section}>
      <div className={styles.container}>
        {items.map((item, index) => {
          const stickyTop = 100 + index * 40;
          const icon = advantagesIcons[index] || null;

          const currentNumber = String(index + 1).padStart(2, '0');

          return (
            <div
              key={index}
              className={styles.cardWrapper}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.tag}>{t('advantages.tag')}</div>

                  <div className={styles.number}>
                    {currentNumber}
                    <span className={styles.totalNumber}>
                      /{totalItemsCount}
                    </span>
                  </div>
                </div>

                <div className={styles.imageWrapper}>{icon}</div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ height: '100px' }}></div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
