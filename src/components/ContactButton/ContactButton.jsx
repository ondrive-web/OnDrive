import React, { useState } from 'react';
import { MessageCircle, X, Send, Instagram, Phone } from 'lucide-react';
import styles from './ContactButton.module.css';

const ContactButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.wrapper}>
      <div className={`${styles.menu} ${isOpen ? styles.menuOpen : ''}`}>
        <a
          href="viber://chat?number=380000000000"
          className={styles.link}
          style={{ '--delay': '0s' }}
        >
          <Phone size={20} />
          <span>Viber</span>
        </a>

        <a
          href="https://t.me/your_username"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          style={{ '--delay': '0.1s' }}
        >
          <Send size={20} />
          <span>Telegram</span>
        </a>

        <a
          href="https://instagram.com/your_instagram"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          style={{ '--delay': '0.2s' }}
        >
          <Instagram size={20} />
          <span>Instagram</span>
        </a>
      </div>

      <button
        className={`${styles.mainButton} ${isOpen ? styles.buttonActive : ''}`}
        onClick={toggleMenu}
        aria-label="Зв'язатися з нами"
      >
        {isOpen ? <X size={28} /> : <MessageCircle size={28} />}
      </button>
    </div>
  );
};

export default ContactButton;
