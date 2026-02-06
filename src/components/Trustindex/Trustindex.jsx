import { useEffect, useRef } from 'react';
import styles from './Trustindex.module.css';

const TrustindexWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;
    if (container.querySelector('script[src*="trustindex.io"]')) return;

    const script = document.createElement('script');
    script.src =
      'https://cdn.trustindex.io/loader.js?55247e0647f0223ad926dc0e234';
    script.async = true;
    script.defer = true;

    container.appendChild(script);
  }, []);

  return (
    <section className={styles.sectionWrapper}>
      <h2 className={styles.mainTitle}>
        Відгуки наших клієнтів з <span className={styles.accent}>Google</span>
      </h2>

      <div className={styles.widgetCard}>
        <div ref={containerRef} style={{ width: '100%' }}></div>
      </div>
    </section>
  );
};

export default TrustindexWidget;
