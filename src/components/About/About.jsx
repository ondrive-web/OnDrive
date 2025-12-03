import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Глобальні стилі Swiper залишаються як є
import 'swiper/css';

// Імпорт вашого CSS модуля
import s from './About.module.css';

const testimonialsData = [
  {
    id: 1,
    name: 'ЗАГОЛОВОК 1',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
  {
    id: 2,
    name: 'ЗАГОЛОВОК 2',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
  {
    id: 3,
    name: 'ЗАГОЛОВОК 3',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
  {
    id: 4,
    name: 'ЗАГОЛОВОК 4',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
  {
    id: 5,
    name: 'ЗАГОЛОВОК 5',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
  {
    id: 6,
    name: 'ЗАГОЛОВОК 6',
    text: 'ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ ТЕКСТ',
  },
];

const About = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section className={s.testimonialsSection}>
      <div className={s.container}>
        <h2 className={s.sectionTitle}>
          Наші стандарти якості / Наші переваги / Чому клієнти обирають нас{' '}
        </h2>

        <div className={s.testimonialsWrapper}>
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={30}
            slidesPerView={1}
            navigation={{
              prevEl: prevRef.current,
              nextEl: nextRef.current,
            }}
            onBeforeInit={swiper => {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            // Клас для самого Swiper контейнера
            className={s.testimonialsSlider}
          >
            {testimonialsData.map(item => (
              // SwiperSlide приймає className, передаємо туди стилі з модуля
              <SwiperSlide key={item.id} className={s.testimonialSlide}>
                <div className={s.testimonialCard}>
                  <p className={s.testimonialText}>{item.text}</p>
                  <div className={s.testimonialAuthor}>
                    <div className={s.testimonialName}>{item.name}</div>
                    <div className={s.testimonialPosition}>{item.position}</div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Стрілки навігації */}
          <div className={s.testimonialsArrows}>
            <button
              ref={prevRef}
              className={s.arrowBtn}
              aria-label="Попередній відгук"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M15 18L9 12L15 6"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            <button
              ref={nextRef}
              className={s.arrowBtn}
              aria-label="Наступний відгук"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 18L15 12L9 6"
                  stroke="#A0A0A0"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
