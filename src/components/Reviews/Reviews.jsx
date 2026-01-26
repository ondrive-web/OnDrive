import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

import { reviews } from '../../data/Reviews';
import styles from './Reviews.module.css';

export default function Reviews() {
  const { t } = useTranslation();
  const translations = t('reviews.items', { returnObjects: true });

  const allReviews = Array.isArray(translations)
    ? reviews
        .map((item, index) => ({
          ...item,
          ...translations[index],
        }))
        .slice(0, 6)
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

        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className={styles.swiperContainer}
        >
          {allReviews.map(review => (
            <SwiperSlide key={review.id} className={styles.slide}>
              <div className={styles.card}>
                <div className={styles.imageWrapper}>
                  <img
                    src={review.image}
                    alt={review.name}
                    className={styles.reviewImage}
                  />
                </div>

                <div className={styles.stars}>
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#fd7902" stroke="#fd7902" />
                  ))}
                </div>

                <h3 className={styles.name}>{review.name}</h3>

                <p className={styles.carModel}>
                  <strong>Авто:</strong> {review.carModel}{' '}
                </p>

                <p className={styles.reviewText}>{review.text}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
