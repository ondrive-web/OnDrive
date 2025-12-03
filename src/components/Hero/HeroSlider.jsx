import { CircleArrowRight } from 'lucide-react';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import styles from './Hero.module.css';
import heroSlides from '../../data/HeroSlides.js';

export default function HeroSlider({ onCTAClick }) {
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
        {heroSlides.map((src, idx) => (
          <SwiperSlide key={idx}>
            <div
              className={styles.slide}
              style={{ backgroundImage: `url(${src})` }}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className={styles.overlayContent}>
        <h1 className={styles.title}>Авто з аукціонів США, Канади та Кореї</h1>
        <p className={styles.subtitle}>
          Ексклюзивний доступ до широкого асортименту авто та повний супровід –
          ми Ващ путівник від першої ідеї до моменту, коли ви тримаєте ключі в
          руках: радимо, пояснюємо, попереджаємо про ризики й залишаємо фінальне
          рішення за вами.
        </p>

        <button
          onClick={onCTAClick}
          className={`btn btn-primary ${styles.ctaButton}`}
        >
          Прорахувати вартість
          <CircleArrowRight size={40} />
        </button>
      </div>
    </div>
  );
}
