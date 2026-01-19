import { Star } from 'lucide-react';
import { reviews } from '../../data/Reviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  const displayReviews = reviews.slice(0, 3);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          Відгуки <span className={styles.highlight}>наших клієнтів</span>
        </h2>

        <div className={styles.grid}>
          {displayReviews.map(review => (
            <div key={review.id} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={18} fill="#fd7902" stroke="#fd7902" />
                ))}
              </div>
              <h3 className={styles.name}>{review.name}</h3>
              <p className={styles.reviewText}>{review.text}</p>
            </div>
          ))}
        </div>

        <div className={styles.ctaWrapper}>
          <button className={styles.ctaButton}>Залишити заявку</button>
        </div>
      </div>
    </section>
  );
}
