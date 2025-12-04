import React from 'react';
import styles from './Advantages.module.css';
import { advantagesData } from '../../data/Advantages.jsx';

const AdvantagesSection = () => {
  return (
    <section className={styles.section}>
      <h1>Title</h1>
      <div className={styles.container}>
        {advantagesData.map((item, index) => {
          // Розраховуємо відступ зверху, щоб картки трохи виглядали одна з-під одної
          // Перша картка: top: 100px
          // Друга картка: top: 140px і т.д.
          const stickyTop = 100 + index * 40;

          return (
            <div
              key={item.id}
              className={styles.cardWrapper}
              style={{ top: `${stickyTop}px` }} // Динамічний стиль для Sticky ефекту
            >
              <div className={styles.card}>
                {/* Верхня частина: Тег та Номер */}
                <div className={styles.cardHeader}>
                  <div className={styles.tag}>НАШІ ПЕРЕВАГИ</div>
                  <div className={styles.number}>
                    0{index + 1}
                    <span className={styles.totalNumber}>/04</span>
                  </div>
                </div>

                {/* Місце для 3D ілюстрації (зараз тут іконка) */}
                <div className={styles.imageWrapper}>{item.icon}</div>

                {/* Текст знизу */}
                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Цей блок потрібен, щоб після останньої картки був простір проскролити далі */}
        <div style={{ height: '100px' }}></div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
