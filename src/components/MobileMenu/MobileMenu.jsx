import styles from './MobileMenu.module.css';
import { navLinks } from '../../data/NavLinks';

export default function MobileMenu({ isOpen, onNavClick }) {
  return (
    <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
      {navLinks.map(link => (
        <a
          key={link.href}
          href={link.href}
          className={styles.navLink}
          onClick={e => onNavClick(e, link.href)}
        >
          {link.label}
        </a>
      ))}

      <a href="tel:+380632161386" className={styles.phoneLink}>
        +38 (063) 216-13-87
      </a>

      <a
        href="https://t.me/VoFkA146"
        target="blank"
        className={styles.ctaButton}
        onClick={e => onNavClick(e, '#contact')}
      >
        Залишити заявку
      </a>
    </nav>
  );
}
