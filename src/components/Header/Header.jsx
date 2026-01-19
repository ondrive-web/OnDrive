import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import styles from './Header.module.css';
import MobileMenu from '../MobileMenu/MobileMenu';
import LanguageSwitcher from '../LanguageSwitcher/LanguageSwitcher';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const closeMenu = () => setIsMobileMenuOpen(false);
  return (
    <header className={`${styles.header}`}>
      <div className="container">
        <div className={styles.headerContent}>
          <a>
            <div className={styles.logoIcon}>
              <img
                style={{ width: '60px', height: '60px', borderRadius: '30%' }}
                src="/headerLogo.svg"
                alt="Run&Drive logo"
              />
            </div>
          </a>

          <MobileMenu
            isOpen={isMobileMenuOpen}
            onNavClick={closeMenu}
            phoneNumber="+38 (063) 216-13-87"
          />

          <button className={styles.mobileMenuButton} onClick={toggleMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          <LanguageSwitcher />
        </div>
      </div>
    </header>
  );
}
