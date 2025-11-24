import React, { useEffect, useRef } from "react";
import styles from "./Services.module.css";

const Card = ({ title, number, children }) => {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        ref.current.classList.add(styles.show);
      }
    });

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={styles.card}>
      <div className={styles.number}>{number}</div>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
};

export default function CardSection() {
  return (
    <section className={styles.wrapper}>
      <Card title="Коммуникация" number="01">
        Постоянное и своевременное общение.
      </Card>

      <Card title="Поддержка" number="02">
        Подбираем лот по вашим критериям.
      </Card>

      <Card title="Скорость" number="03">
        Быстрая работа.
      </Card>
    </section>
  );
}
