import React, { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import styles from './TelegramInfo.module.css';
import { Send, Phone } from 'lucide-react';

const TelegramNews = () => {
  const { t } = useTranslation();
  const [scrollOffset, setScrollOffset] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top < windowHeight && rect.bottom > 0) {
        let move = (windowHeight - rect.top) * 0.05;

        if (move > 40) move = 40;
        if (move < 0) move = 0;

        setScrollOffset(move);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className={styles.section}>
      <div className={styles.animatedTitles}>
        <h1
          className={styles.telegramText}
          style={{ transform: `translateX(${scrollOffset}px)` }}
        >
          {t('telegramNews.titleTelegram')}
        </h1>
        <h2
          className={styles.newsText}
          style={{ transform: `translateX(-${scrollOffset}px)` }}
        >
          {t('telegramNews.titleNews')}
        </h2>
      </div>

      <div className={styles.container}>
        <div className={styles.imageCol}>
          <div className={styles.floatingWrapper}>
            <img
              src="/images/telegram/telegram-img.webp"
              alt={t('telegramNews.imageAlt')}
              className={styles.image}
            />
          </div>
        </div>

        <div className={styles.contentCol}>
          <h3 className={styles.subtitle}>{t('telegramNews.subtitle')}</h3>

          <p className={styles.description}>{t('telegramNews.description')}</p>

          <div className={styles.buttonsWrapper}>
            <a
              href="https://invite.viber.com/?g2=AQBZ5vC0gk75m1ZZCDFjrJe9TUWpg1hOWYOPa%2BjdUj59vs9KfAjxYF7I7z%2BjBJqz"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.iconWrapper} ${styles.viberIconBg}`}>
                <Phone size={20} color="white" strokeWidth={2} />
              </div>
              <span>{t('telegramNews.btnViber')}</span>
            </a>

            <a
              href="https://t.me/runndrive_ua"
              className={styles.button}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div className={`${styles.iconWrapper} ${styles.telegramIconBg}`}>
                <Send size={20} color="white" strokeWidth={2} />
              </div>
              <span>{t('telegramNews.btnTelegram')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TelegramNews;
