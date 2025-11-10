import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
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
              <img
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '30%',
                }}
                src="/src/assets/svg/header_logo.svg"
                alt="OnDrive logo"
              />
            </div>
            <span className={styles.logoText}>OnDrive</span>
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

            <a href="tel:+380991112233" className={styles.phoneLink}>
              +38 (111) 111-11-111
            </a>

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
