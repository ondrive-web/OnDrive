import React from 'react';
import styles from './Advantages.module.css';
// Можна використовувати іконки з бібліотеки, наприклад lucide-react,
// або вставити свої <img> в блок .imageWrapper
import { MessageCircle, Search, Zap, ClipboardCheck } from 'lucide-react';

const advantagesData = [
  {
    id: 1,
    title: 'Комунікація',
    description:
      'Постійна та своєчасна комунікація в месенджерах, зі звітністю по етапам доставки авто, для вашого спокою та комфорту.',
    icon: <MessageCircle size={120} color="white" strokeWidth={1} />,
  },
  {
    id: 2,
    title: 'Підтримка',
    description:
      'Підбираємо лот за вашими критеріями протягом місяця. Даємо рекомендації для розширення критеріїв.',
    icon: <Search size={120} color="white" strokeWidth={1} />,
  },
  {
    id: 3,
    title: 'Швидкість',
    description:
      'Підбираємо оптимальний порт для завантаження авто в США. Нам важливо доставити вам авто якнайшвидше.',
    icon: <Zap size={120} color="white" strokeWidth={1} />, // Іконка блискавки для швидкості
  },
  {
    id: 4,
    title: 'Відповідальність',
    description:
      'Слідкуємо за кожним етапом доставки, своєчасно оновлюємо статус, запитуємо документи та виставляємо рахунки.',
    icon: <ClipboardCheck size={120} color="white" strokeWidth={1} />, // Іконка списку
  },
];

const AdvantagesSection = () => {
  return (
    <section className={styles.section}>
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
