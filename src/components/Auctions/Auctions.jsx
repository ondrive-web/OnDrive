import { auctionsData } from '../../data/AuctionsSection.jsx'
import styles from './Auctions.module.css';

export default function AuctionsSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Аукціони, з якими ми{' '}
          <span className={styles.highlight}>працюємо</span>
        </h2>

        <div className={styles.grid}>
          {auctionsData.map((auction, index) => (
            <div
              key={auction.id}
              className={styles.card}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Передня частина */}
              <div className={styles.front}>
                <img
                  src={auction.logo}
                  alt={auction.name}
                  className={styles.logo}
                  loading="lazy"
                />
              </div>

              {/* Оверлей при наведенні */}
              <div className={styles.overlay}>
                <h3 className={styles.name}>{auction.name}</h3>
                <p className={styles.desc}>{auction.description}</p>
                <div className={styles.badge}>
                  <span>Краще для:</span> {auction.bestFor}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
