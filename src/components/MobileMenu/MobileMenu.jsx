import { useTranslation } from 'react-i18next';
import styles from './MobileMenu.module.css';
import { navLinks } from '../../data/NavLinks';

export default function MobileMenu({ isOpen, onNavClick }) {
  const { t } = useTranslation();

  return (
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
      <div className={styles.navLinksWrapper}>
        {navLinks.map(link => (
          <a
            key={link.href}
            href={link.href}
            className={styles.navLink}
            onClick={onNavClick}
          >
            {t(link.key)}
          </a>
        ))}
      </div>

      <div className={styles.bottomActions}>
        <a href="tel:+380632161386" className={styles.phoneLink}>
          +38 (063) 216-13-87
        </a>

        <a
          href="https://t.me/Volodymyr_runndrive"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.ctaButton}
          onClick={onNavClick}
        >
          {t('nav.cta_button')}
        </a>
      </div>
    </nav>
  );
}
