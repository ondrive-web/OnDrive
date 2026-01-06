import styles from './Steps.module.css';

export default function Steps() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Ліва частина: Текст та Гарантії */}
        <div className={styles.contentSide}>
          <h2 className={styles.title}>
            Працюємо виключно за{' '}
            <span className={styles.highlight}>офіційним договором</span>
          </h2>
          <p className={styles.subtitle}>
            Ваша безпека — наш пріоритет. Жодних прихованих платежів чи усних
            домовленостей.
          </p>

          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.benefitText}>
                <strong>Фіксація бюджету.</strong> Вартість авто та послуг
                прописана в договорі і не змінюється в процесі доставки.
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.benefitText}>
                <strong>Повна матеріальна відповідальність.</strong> Ми
                відповідаємо за стан авто з моменту покупки на аукціоні до
                вручення вам ключів.
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.checkIcon}>✓</div>
              <div className={styles.benefitText}>
                <strong>Юридична чистота.</strong> Авто розмитнюється відразу на
                вас. Ви — перший власник в Україні.
              </div>
            </li>
          </ul>

          <button className={styles.downloadButton}>
            <span className={styles.icon}>📄</span>
            Завантажити зразок договору (PDF)
          </button>
        </div>

        {/* Права частина: Візуалізація договору */}
        <div className={styles.visualSide}>
          <div className={styles.documentCard}>
            {/* Декоративні елементи "паперу" */}
            <div className={styles.docHeader}>
              <div className={styles.docTitle}>ДОГОВІР №2024/UA</div>
              <div className={styles.docDate}>м. Київ</div>
            </div>
            <div className={styles.docLines}>
              <div className={styles.line} style={{ width: '90%' }}></div>
              <div className={styles.line} style={{ width: '85%' }}></div>
              <div className={styles.line} style={{ width: '95%' }}></div>
              <div className={styles.line} style={{ width: '60%' }}></div>
              <br />
              <div className={styles.line} style={{ width: '88%' }}></div>
              <div className={styles.line} style={{ width: '92%' }}></div>
              <div className={styles.line} style={{ width: '70%' }}></div>
            </div>

            {/* Ефект "Мокрої печатки" */}
            <div className={styles.stamp}>
              APPROVED
              <span>Premium Auto</span>
            </div>

            {/* Декоративна скріпка або куточок */}
            <div className={styles.clip}></div>
          </div>

          {/* Фонова декоративна пляма */}
          <div className={styles.blob}></div>
        </div>
      </div>
    </section>
  );
}
