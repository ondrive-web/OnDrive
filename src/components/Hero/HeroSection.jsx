import React from 'react';
import { CircleArrowRight } from 'lucide-react';
import HeroSlider from './HeroSlider';
import styles from './Hero.module.css';

export default function Hero({ onCTAClick }) {
  return (
    <section className={styles.hero}>
      <HeroSlider />

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Авто з аукціонів <br />
          США, Канади та Кореї
        </h1>

        <div>
          <p className={styles.subtitle}>
            Ексклюзивний доступ до широкого асортименту авто та повний супровід
            – ми Ваш путівник від першої ідеї до моменту, коли ви тримаєте ключі
            в руках: радимо, пояснюємо, попереджаємо про ризики й залишаємо
            фінальне рішення за вами.
          </p>
        </div>

        <button className={styles.ctaButton} onClick={onCTAClick}>
          Прорахувати вартість
          <CircleArrowRight size={28} />
        </button>
      </div>
    </section>
  );
}
