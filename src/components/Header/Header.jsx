import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <a
            href="#hero"
            className={styles.logo}
            onClick={e => handleNavClick(e, '#hero')}
          >
            <div className={styles.logoIcon}>
              <img
                style={{ width: '40px', height: '40px', borderRadius: '30%' }}
                src="/headerLogo.svg"
                alt="OnDrive logo"
              />
            </div>
            <span className={styles.logoText}>OnDrive</span>
          </a>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onNavClick={handleNavClick}
            phoneNumber="+38 (111) 111-11-111"
          />

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
