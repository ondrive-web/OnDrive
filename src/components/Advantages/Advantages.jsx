import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.css';
import { advantagesIcons } from '../../data/AdvantagesIcons.jsx';

const AdvantagesSection = () => {
  const { t } = useTranslation();

  const items = t('advantages.items', { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {Array.isArray(items) &&
          items.map((item, index) => {
            const stickyTop = 100 + index * 40;

            const icon = advantagesIcons[index];

            return (
              <div
                key={index}
                className={styles.cardWrapper}
                style={{ top: `${stickyTop}px` }}
              >
                <div className={styles.card}>
                  <div className={styles.cardHeader}>
                    <div className={styles.tag}>{t('advantages.tag')}</div>

                    <div className={styles.number}>
                      0{index + 1}
                      <span className={styles.totalNumber}>/06</span>
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
