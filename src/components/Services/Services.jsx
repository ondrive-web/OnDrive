import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const Card = ({ title, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current.classList.add(styles.show);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.card}>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default function CardSection() {
  return (
    <section className={styles.cardSection}>
      <Card title="Коммуникация">
        Постоянное и своевременное общение в мессенджерах с отчетами.
      </Card>

      <Card title="Поддержка">
        Подбираем лот по вашим критериям…
      </Card>

      <Card title="Другое">
        Любой контент.
      </Card>
    </section>
  );
}
