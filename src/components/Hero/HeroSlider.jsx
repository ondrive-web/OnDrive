import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
// import 'swiper/css/pagination';
import styles from './Hero.module.css';
import heroSlides from '../../data/HeroSlides.js';

export default function HeroSlider() {
  return (
    <div className={styles.sliderWrapper}>
      <Swiper
        modules={[Autoplay, Pagination]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        style={{ width: '100%', height: '100%' }}
      >
        {heroSlides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
