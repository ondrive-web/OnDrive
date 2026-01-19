import {
  Facebook,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

import styles from './Footer.module.css';

const SocialLink = ({ href, icon, label }) => (
  <a href={href} aria-label={label} className={styles.socialLink}>
    {icon}
  </a>
);

const FooterLink = ({ href, children }) => (
  <li>
    <a href={href} className={styles.linkItem}>
      <span className={styles.dot}></span>
      <span className={styles.linkText}>{children}</span>
    </a>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <h3 className={styles.brandLogo}>
              <div className={styles.logoIconBox}>
                <img
                  src="/headerLogo.svg"
                  style={{ width: '60px', height: '60px', borderRadius: '30%' }}
                  alt="Run&Drive Logo"
                />
              </div>

              <span style={{ fontStyle: 'italic' }}>Run&Drive</span>
            </h3>
            <p className={`${styles.subscribeText} ${styles.brandDesc}`}>
              Повний супровід купівлі авто з-за кордону. Ми беремо на себе
              підбір, перевірку, доставку та розмитнення.
            </p>
            <div className={styles.socialRow}>
              <SocialLink
                href="#"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="#"
                icon={<Youtube size={20} />}
                label="Youtube"
              />
              <SocialLink
                href="#"
                icon={<Facebook size={20} />}
                label="Facebook"
              />
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Меню</h4>
            <ul className={styles.linkList}>
              <FooterLink href="#catalog">Каталог авто</FooterLink>
              <FooterLink href="#calculator">Калькулятор</FooterLink>
              <FooterLink href="#how-it-works">Етапи роботи</FooterLink>
              <FooterLink href="#reviews">Відгуки</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Напрямки</h4>
            <ul className={styles.linkList}>
              <FooterLink href="#usa">Авто з США</FooterLink>
              <FooterLink href="#europe">Авто з Європи</FooterLink>
              <FooterLink href="#korea">Авто з Кореї</FooterLink>
              <FooterLink href="#china">Електромобілі</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Зв'язок</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <MapPin size={16} />
                </div>
                <span className={styles.contactText}>
                  Київ, Україна <br />
                  <span className={styles.subText}>
                    Працюємо по всій країні
                  </span>
                </span>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Phone size={16} />
                </div>
                <div style={{ display: 'flex', flexDirection: 'column' }}>
                  <a href="tel:+380990000000" className={styles.contactPhone}>
                    +38 (099) 000-00-00
                  </a>
                  <span className={styles.subText}>Telegram / Viber</span>
                </div>
              </li>
              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:sales@Run&Drive.ua"
                  className={`${styles.contactText} ${styles.contactLink}`}
                >
                  sales@Run&Drive.ua
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {currentYear} Run&Drive. Імпорт автомобілів з США, Канади та Кореї.
          </p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>
              Всі права захищені.
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
