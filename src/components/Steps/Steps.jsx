import { useTranslation } from 'react-i18next';
import styles from './Steps.module.css';

export default function Steps() {
  const { t } = useTranslation();

  const listItems = t('steps.list', { returnObjects: true });

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>
            {t('steps.title')}{' '}
            <span className={styles.highlight}>
              {t('steps.titleHighlight')}
            </span>
          </h2>
          <p className={styles.description}>{t('steps.description')}</p>

          <ul className={styles.list}>
            {Array.isArray(listItems) &&
              listItems.map((text, index) => (
                <li key={index}>
                  <span className={styles.check}>✓</span>
                  {text}
                </li>
              ))}
          </ul>
        </div>

        <div className={styles.visual}>
          <div className={styles.docCard}>
            <div className={styles.docHeader}>{t('steps.docHeader')}</div>

            <div className={styles.line} style={{ width: '100%' }}></div>
            <div className={styles.line} style={{ width: '90%' }}></div>
            <div className={styles.line} style={{ width: '95%' }}></div>
            <div className={styles.accentLine}></div>
            <div className={styles.line} style={{ width: '85%' }}></div>

            <div className={styles.stamp}>{t('steps.docStamp')}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
