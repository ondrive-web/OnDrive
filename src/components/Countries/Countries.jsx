import { useTranslation } from 'react-i18next';
import { countriesData } from '../../data/CountriesSection';
import styles from './Countries.module.css';

export default function Countries() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>{t('countries.title')}</h2>

        <div className="">
          <div className={styles.grid}>
            {countriesData.map((country, index) => (
              <div
                key={country.id}
                className={styles.card}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={styles.flagWrapper}>
                  <img
                    src={country.flag}
                    alt={t(`countries.list.${country.key}`)}
                    className={styles.flag}
                    loading="lazy"
                  />
                </div>
                <p className={styles.name}>
                  {t(`countries.list.${country.key}`)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
