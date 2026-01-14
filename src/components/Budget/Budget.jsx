import { useState } from 'react';
import styles from './BudgetSection.module.css';
import { budgetData } from '../../data/BudgetSection';

export default function BudgetSection() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            Що можна придбати{' '}
            <span className={styles.highlight}>в ваш бюджет?</span>
          </h2>
          <p className={styles.subtitle}>
            Оберіть ціновий діапазон, щоб побачити реальні можливості ринку США
          </p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.tabsList}>
            {budgetData.map((item, index) => (
              <button
                key={item.id}
                className={`${styles.tabButton} ${activeTab === index ? styles.active : ''}`}
                onClick={() => setActiveTab(index)}
              >
                <span className={styles.rangeText}>{item.range}</span>
                <span className={styles.arrow}>→</span>
              </button>
            ))}
          </div>

          <div className={styles.contentArea}>
            {budgetData.map((item, index) => (
              //!Рендеримо всі, але показуємо лише активний для анімації
              <div
                key={item.id}
                className={`${styles.contentItem} ${activeTab === index ? styles.show : ''}`}
              >
                <div className={styles.imageWrapper}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className={styles.image}
                  />
                  <div className={styles.priceTag}>{item.range}</div>
                </div>

                <div className={styles.info}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <div className={styles.modelsBlock}>
                    <span className={styles.label}>Популярні моделі:</span>
                    <p className={styles.models}>{item.models}</p>
                  </div>
                  <p className={styles.desc}>{item.desc}</p>

                  <button className={styles.ctaButton}>Розрахувати авто</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
