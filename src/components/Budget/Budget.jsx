import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './BudgetSection.module.css';
import { budgetData } from '../../data/BudgetSection';

export default function BudgetSection() {
  const [activeTab, setActiveTab] = useState(0);

  const { t } = useTranslation();

  const translations = t('budget.items', { returnObjects: true });

  const data = Array.isArray(translations)
    ? budgetData.map((item, index) => ({
        ...item,
        ...translations[index],
      }))
    : [];

  if (!data.length) return null;

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>
            {t('budget.title')}{' '}
            <span className={styles.highlight}>
              {t('budget.titleHighlight')}
            </span>
          </h2>
          <p className={styles.subtitle}>{t('budget.subtitle')}</p>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.tabsList}>
            {data.map((item, index) => (
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
            {data.map((item, index) => (
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
                </div>

                <div className={styles.info}>
                  <h3 className={styles.itemTitle}>{item.title}</h3>

                  <div className={styles.modelsBlock}>
                    <span className={styles.label}>
                      {t('budget.modelsLabel')}
                    </span>
                    <p className={styles.models}>{item.models}</p>
                  </div>

                  <p className={styles.desc}>{item.desc}</p>

                  <a
                    href="https://t.me/VoFkA146"
                    className={styles.ctaButton}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t('budget.ctaButton')}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
