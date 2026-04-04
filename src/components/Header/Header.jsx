import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    document.body.style.overflow = !isMobileMenuOpen ? 'hidden' : 'unset';
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <header
      className={[styles.header, isScrolled ? styles.scrolled : '']
        .filter(Boolean)
        .join(' ')}
    >
      <div className="container">
        <div className={styles.headerContent}>
          <a href="/">
            <div className={styles.logoIcon}>
              <img src="/headerLogo.svg" alt="Run&Drive logo" />
            </div>
          </a>

          <MobileMenu isOpen={isMobileMenuOpen} onNavClick={closeMenu} />

          <div className={styles.rightControls}>
            <LanguageSwitcher />
            <button className={styles.mobileMenuButton} onClick={toggleMenu}>
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
