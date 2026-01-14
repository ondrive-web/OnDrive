import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { CircleArrowRight } from 'lucide-react';
import HeroSlider from './HeroSlider';
import styles from './Hero.module.css';

export default function Hero({ onCTAClick }) {
  const { t } = useTranslation();

  return (
    <section className={styles.hero}>
      <HeroSlider />

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          <Trans i18nKey="hero.title">
            Авто з аукціонів <br />
            США, Канади та Кореї
          </Trans>
        </h1>

        <div>
          <p className={styles.subtitle}>{t('hero.subtitle')}</p>
        </div>

        <button className={styles.ctaButton} onClick={onCTAClick}>
          {t('hero.cta_button')}
          <CircleArrowRight size={28} />
        </button>
      </div>
    </section>
  );
}
