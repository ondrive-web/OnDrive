import styles from './MobileMenu.module.css';
import { navLinks } from '../../data/NavLinks';

export default function MobileMenu({isOpen, onNavClick}) {
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

      <a href="tel:+380991112233" className={styles.phoneLink}>
        +38 (111) 111-11-111
      </a>

      <a
        href="#contact"
        className={`btn btn-primary ${styles.ctaButton}`}
        onClick={e => onNavClick(e, '#contact')}
      >
        Залишити заявку
      </a>
    </nav>
  );
}
