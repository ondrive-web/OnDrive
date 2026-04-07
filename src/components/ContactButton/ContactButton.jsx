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
          href="https://invite.viber.com/?g2=AQBZ5vC0gk75m1ZZCDFjrJe9TUWpg1hOWYOPa%2BjdUj59vs9KfAjxYF7I7z%2BjBJqz"
          target="_blank"
          className={styles.link}
          style={{ '--delay': '0s' }}
        >
          <Phone size={20} />
          <span>Viber</span>
        </a>

        <a
          href="https://t.me/runndrive_ua"
          target="_blank"
          rel="noreferrer"
          className={styles.link}
          style={{ '--delay': '0.1s' }}
        >
          <Send size={20} />
          <span>Telegram</span>
        </a>

        <a
          href="https://www.instagram.com/runndrive.ua/"
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
