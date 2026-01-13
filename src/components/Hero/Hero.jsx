import React from 'react';
import { useTranslation, Trans } from 'react-i18next'; // 1. Імпортуємо хук і компонент Trans
import { CircleArrowRight } from 'lucide-react';
import HeroSlider from './HeroSlider';
import styles from './Hero.module.css';

export default function Hero({ onCTAClick }) {
  // 2. Ініціалізуємо хук
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <HeroSlider />

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          {/* 3. Використовуємо Trans для заголовка з <br/>.
             i18nKey вказує на ключ у JSON.
             Все, що всередині тегу Trans тут — це дефолтне значення (якщо переклад не знайдеться).
          */}
          <Trans i18nKey="hero.title">
            Авто з аукціонів <br />
            США, Канади та Кореї
          </Trans>
        </h1>

        <div>
          <p className={styles.subtitle}>
            {/* 4. Звичайний текст замінюємо на t() */}
            {t('hero.subtitle')}
          </p>
        </div>

        <button className={styles.ctaButton} onClick={onCTAClick}>
          {t('hero.cta_button')}
          <CircleArrowRight size={28} />
        </button>
      </div>
    </section>
  );
}