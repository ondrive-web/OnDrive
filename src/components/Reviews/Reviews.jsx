import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { reviews } from '../../data/Reviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { t } = useTranslation();
  const translations = t('reviews.items', { returnObjects: true });

  const allReviews = Array.isArray(translations)
    ? reviews.map((item, index) => ({
        ...item,
        ...translations[index],
      }))
    : [];

  if (!allReviews.length) return null;
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>
          {t('reviews.title')}
          <span className={styles.highlight}>
            {t('reviews.titleHighlight')}
          </span>
        </h2>

        <div className={styles.grid}>
          {allReviews.map(review => (
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
      </div>
    </section>
  );
}
