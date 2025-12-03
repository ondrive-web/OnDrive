import React, { useState } from 'react';
import styles from './ContactButton.module.css';

const ContactButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={styles.contactButton} onClick={() => setOpen(!open)}>
        КНОПКА
        <br />
        ЗВ'ЯЗКУ
      </div>

      <div className={`${styles.contactMenu} ${open ? styles.open : ''}`}>
        <a href="viber://chat?number=380000000000">Viber</a>
        <a href="https://t.me/your_username" target="_blank" rel="noreferrer">
          Telegram
        </a>
        <a
          href="https://instagram.com/your_instagram"
          target="_blank"
          rel="noreferrer"
        >
          Instagram
        </a>
      </div>
    </>
  );
};

export default ContactButton;
