import React from 'react';
import { useTranslation } from 'react-i18next';
import styles from './Advantages.module.css';
import { advantagesIcons } from '../../data/AdvantagesIcons.jsx'; // Імпортуємо іконки

const AdvantagesSection = () => {
  const { t } = useTranslation();
  
  // 1. Отримуємо масив текстів із JSON
  // returnObjects: true обов'язково, щоб повернувся масив, а не рядок
  const items = t('advantages.items', { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Перевіряємо, чи є items (щоб не впало, якщо переклади не завантажились) */}
        {Array.isArray(items) && items.map((item, index) => {
          
          const stickyTop = 100 + index * 40;
          
          // 2. Беремо іконку під тим же номером, що й текст
          const icon = advantagesIcons[index]; 

          return (
            <div
              key={index} // Використовуємо індекс як ключ, бо список статичний
              className={styles.cardWrapper}
              style={{ top: `${stickyTop}px` }}
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  {/* Переклад заголовка "НАШІ ПЕРЕВАГИ" */}
                  <div className={styles.tag}>{t('advantages.tag')}</div>
                  
                  <div className={styles.number}>
                    0{index + 1}
                    <span className={styles.totalNumber}>/06</span>
                  </div>
                </div>

                {/* Вставляємо іконку */}
                <div className={styles.imageWrapper}>{icon}</div>

                <div className={styles.content}>
                  {/* Вставляємо тексти з JSON */}
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