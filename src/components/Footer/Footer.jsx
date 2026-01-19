import { Instagram, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    aria-label={label}
    className={styles.socialLink}
    target="_blank"
    rel="noopener noreferrer"
  >
    {icon}
  </a>
);

const FooterLink = ({ href, children, target = '_blank' }) => (
  <li>
    <a
      href={href}
      className={styles.linkItem}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
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
                href="https://instagram.com/your_profile"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Аукціони</h4>
            <ul className={styles.linkList}>
              <FooterLink href="https://www.copart.com/">Copart</FooterLink>
              <FooterLink href="https://car.encar.com/">Encar</FooterLink>
              <FooterLink href="https://site.manheim.com/">Manheim</FooterLink>
              <FooterLink href="https://www.iaai.com/">IAAI</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>Напрямки</h4>
            <ul className={styles.linkList}>
              <FooterLink href="#usa" target="_self">
                Авто з США
              </FooterLink>
              <FooterLink href="#europe" target="_self">
                Авто з Європи
              </FooterLink>
              <FooterLink href="#korea" target="_self">
                Авто з Кореї
              </FooterLink>
              <FooterLink href="#china" target="_self">
                Електромобілі
              </FooterLink>
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
                  Житомир, Україна <br />
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
                  <a href="tel:+380632161386" className={styles.contactPhone}>
                    +38 (063) 216-13-86
                  </a>
                  <span className={styles.subText}>Telegram / Viber</span>
                </div>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:ondrive.ua@gmail.com"
                  className={`${styles.contactText} ${styles.contactLink}`}
                >
                ondrive.ua@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p>
            © {currentYear} Run&Drive. Імпорт автомобілів з США, Канади та
            Кореї.
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
