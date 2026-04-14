import React from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin } from 'lucide-react';
import {
  FaInstagram,
  FaTelegramPlane,
  FaTiktok,
  FaViber,
} from 'react-icons/fa';
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

const Footer = ({ id }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.mainGrid}>
          <div className={styles.brandColumn}>
            <div className={styles.brandLogo}>
              <div className={styles.logoIconBox}>
                <img
                  src="/headerLogo.svg"
                  style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '12px',
                  }}
                  alt="Run&Drive Logo"
                />
              </div>
              <span style={{ fontStyle: 'italic', fontWeight: '800' }}>
                RunNDrive
              </span>
            </div>
            <p className={styles.brandDesc}>{t('footer.description')}</p>
            <div className={styles.socialRow}>
              <SocialLink
                href="https://www.instagram.com/runndrive.ua/"
                icon={<FaInstagram size={20} />}
                label="Instagram"
              />
              <SocialLink
                href="https://t.me/runndrive_ua"
                icon={<FaTelegramPlane size={20} />}
                label="Telegram"
              />
              <SocialLink
                href="https://www.tiktok.com/@runndrive.ua"
                icon={<FaTiktok size={20} />}
                label="TikTok"
              />
              <SocialLink
                href="https://invite.viber.com/?g2=AQBZ5vC0gk75m1ZZCDFjrJe9TUWpg1hOWYOPa%2BjdUj59vs9KfAjxYF7I7z%2BjBJqz"
                icon={<FaViber size={20} />}
                label="Viber"
              />
            </div>
          </div>

          <div>
            <h4 className={styles.columnTitle}>{t('footer.colAuctions')}</h4>
            <ul className={styles.linkList}>
              <FooterLink href="https://www.copart.com/">Copart</FooterLink>
              <FooterLink href="https://car.encar.com/">Encar</FooterLink>
              <FooterLink href="https://site.manheim.com/">Manheim</FooterLink>
              <FooterLink href="https://www.iaai.com/">IAAI</FooterLink>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>{t('footer.colDirections')}</h4>
            <ul className={styles.linkList}>
              <FooterLink href="#countries" target="_self">
                {t('footer.directions.usa')}
              </FooterLink>
              <FooterLink href="#countries" target="_self">
                {t('footer.directions.canada')}
              </FooterLink>
              <FooterLink href="#countries" target="_self">
                {t('footer.directions.korea')}
              </FooterLink>
              <FooterLink href="#countries" target="_self">
                {t('footer.directions.china')}
              </FooterLink>
            </ul>
          </div>

          <div>
            <h4 className={styles.columnTitle}>{t('footer.colContact')}</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <MapPin size={16} />
                </div>
                <div className={styles.contactText}>
                  {t('footer.address')} <br />
                  <span className={styles.subText}>
                    {t('footer.addressSub')}
                  </span>
                </div>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Phone size={16} />
                </div>
                <div>
                  <a href="tel:+380632161386" className={styles.contactPhone}>
                    +38 (063) 216-13-86
                  </a>
                  <span className={styles.subText}>
                    {t('footer.messenger')}
                  </span>
                </div>
              </li>

              <li className={styles.contactItem}>
                <div className={styles.iconCircle}>
                  <Mail size={16} />
                </div>
                <a
                  href="mailto:runndrive.ua@gmail.com"
                  className={styles.contactLink}
                >
                  runndrive.ua@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            {t('footer.copy', { year: currentYear })}
          </p>
          <div className={styles.legalLinks}>
            <span className={styles.legalLink}>{t('footer.rights')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
