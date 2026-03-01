import React, { useState, useEffect, useRef } from 'react';
import styles from './TelegramInfo.module.css';
import { Send, Phone } from 'lucide-react';

const TelegramNews = () => {
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Анімуємо тільки тоді, коли блок видно на екрані
      if (rect.top < windowHeight && rect.bottom > 0) {
        // Легкий зсув
        let move = (windowHeight - rect.top) * 0.05;

        // Омеження: текст роз'їжджається максимум на 40px
        if (move > 40) move = 40;
        if (move < 0) move = 0;

        setScrollOffset(move);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Задаємо початкову позицію

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      {/* АНІМОВАНІ ЗАГОЛОВКИ (ПОВЕРХ УСЬОГО) */}
      <div className={styles.animatedTitles}>
        <h1
          className={styles.telegramText}
          style={{ transform: `translateX(-${scrollOffset}px)` }} // Їде вліво
        >
          TELEGRAM
        </h1>
        <h2
          className={styles.newsText}
          style={{ transform: `translateX(${scrollOffset}px)` }} // Їде вправо
        >
          NEWS
        </h2>
      </div>

      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.floatingWrapper}>
            <img
              src="../../../public/images/Дизайн без назви (25).webp"
              alt="Telegram News on Smartphone"
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          <h3 className={styles.subtitle}>
            НАЙВИГІДНІШІ І ПЕРЕВІРЕНІ
            <br />
            ЛОТИ З США ТА ЄВРОПИ
            <br />У НАШИХ СПІЛЬНОТАХ
          </h3>

          <p className={styles.description}>
            Кожного дня інформуємо про кращі пропозиції з аукціонів США. Ви
            будете в курсі всіх свіжих, вигідних американські авто та Європи.
            Завдяки чому зможете підібрати собі відмінне авто за найнижчою
            ціною!
          </p>

          <div className={styles.buttonsWrapper}>
            <a href="#viber" className={styles.button}>
              <div className={`${styles.iconWrapper} ${styles.viberIconBg}`}>
                <div className={styles.buttonsWrapper}>
                  <a href="#viber" className={styles.button}>
                    <div
                      className={`${styles.iconWrapper} ${styles.viberIconBg}`}
                    >
                      <Phone size={20} color="white" strokeWidth={2} />
                    </div>
                    <span>Viber</span>
                  </a>

                  <a href="#telegram" className={styles.button}>
                    <div
                      className={`${styles.iconWrapper} ${styles.telegramIconBg}`}
                    >
                      <Send size={20} color="white" strokeWidth={2} />
                    </div>
                    <span>Telegram</span>
                  </a>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramNews;
