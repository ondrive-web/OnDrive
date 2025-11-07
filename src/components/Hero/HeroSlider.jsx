import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
// import 'swiper/css/navigation';
import styles from './Hero.module.css';

// импорт картинок из src/assets
import hero1 from '../../assets/images/hero1.jpg';
import hero2 from '../../assets/images/hero2.jpg';

export default function HeroSlider() {
  const slides = [hero1, hero2];

  return (
    <div className={styles.hero_background_slider}>
      <Swiper
        spaceBetween={30}
        centeredSlides
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation
        loop
        modules={[Autoplay, Pagination, Navigation]}
        className={styles.mySwiper}
      >
        {slides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.overlayContent}>
        <h1 className={styles.title}>ON DRIVE</h1>
        <p className={styles.subtitle}>
          Ми прагнемо, щоб після отримання авто Ви відчували не лише задоволення
          від покупки, а й підтримку на кожному кілометрі шляху.
        </p>
      </div>
    </div>
  );
}
