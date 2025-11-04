import { useState, useEffect } from 'react';
import { Car, Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import { navLinks } from '../../data/NavLinks';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ''}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <a
            href="#hero"
            className={styles.logo}
            onClick={e => handleNavClick(e, '#hero')}
          >
            <div className={styles.logoIcon}>
              <Car size={28} />
            </div>
            <span className={styles.logoText}>OnDrive USA</span>
          </a>

          <nav
            className={`${styles.nav} ${isMobileMenuOpen ? styles.navOpen : ''}`}
          >
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={styles.navLink}
                onClick={e => handleNavClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className={`btn btn-primary ${styles.ctaButton}`}
              onClick={e => handleNavClick(e, '#contact')}
            >
              Залишити заявку
            </a>
          </nav>

          <button
            className={styles.mobileMenuButton}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
