import React from 'react';
import styles from './Advantages.module.css';
import { advantagesData } from '../../data/Advantages.jsx';

const AdvantagesSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {advantagesData.map((item, index) => {
        
          const stickyTop = 100 + index * 40;

          return (
            <div
              key={item.id}
              className={styles.cardWrapper}
              style={{ top: `${stickyTop}px` }} 
            >
              <div className={styles.card}>
                <div className={styles.cardHeader}>
                  <div className={styles.tag}>НАШІ ПЕРЕВАГИ</div>
                  <div className={styles.number}>
                    0{index + 1}
                    <span className={styles.totalNumber}>/06</span>
                  </div>
                </div>

                <div className={styles.imageWrapper}>{item.icon}</div>

                <div className={styles.content}>
                  <h3 className={styles.title}>{item.title}</h3>
                  <p className={styles.description}>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}

        <div style={{ height: '100px' }}></div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
