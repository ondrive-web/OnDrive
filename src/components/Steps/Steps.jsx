import styles from './Steps.module.css';

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* ЛІВА ЧАСТИНА: Текст */}
        <div className={styles.content}>
          <h2 className={styles.title}>
            Працюємо за <span className={styles.highlight}>офіційним договором</span>
          </h2>
          <p className={styles.description}>
            Жодних прихованих умов. Фіксуємо ціну, терміни та відповідальність юридично.
          </p>

          <ul className={styles.list}>
            <li>
              <span className={styles.check}>✓</span>
              Фіксація бюджету без доплат
            </li>
            <li>
              <span className={styles.check}>✓</span>
              Повна матеріальна відповідальність
            </li>
            <li>
              <span className={styles.check}>✓</span>
              Авто розмитнюється відразу на вас
            </li>
          </ul>

          <button className={styles.button}>
            Завантажити зразок договору
          </button>
        </div>

        <div className={styles.visual}>
          <div className={styles.docCard}>
            <div className={styles.docHeader}>ДОГОВІР №2024/UA</div>
            <div className={styles.line} style={{ width: '100%' }}></div>
            <div className={styles.line} style={{ width: '90%' }}></div>
            <div className={styles.line} style={{ width: '95%' }}></div>
            <div className={styles.accentLine}></div> 
            <div className={styles.line} style={{ width: '85%' }}></div>
            
            <div className={styles.stamp}>APPROVED</div>
          </div>
        </div>

      </div>
    </section>
  );
}