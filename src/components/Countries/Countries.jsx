import { countriesData } from '../../data/CountriesSection';
import styles from './Countries.module.css';

export default function Countries() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Країни, з якими ми працюємо</h2>

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
                    alt={country.name}
                    className={styles.flag}
                    loading="lazy"
                  />
                </div>
                <p className={styles.name}>{country.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
