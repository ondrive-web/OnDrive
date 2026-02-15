import React from 'react';
import { useTranslation } from 'react-i18next';
import { Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';
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
                Run&Drive
              </span>
            </div>
            <p className={styles.brandDesc}>{t('footer.description')}</p>
            <div className={styles.socialRow}>
              <SocialLink
                href="https://instagram.com/your_profile"
                icon={<Instagram size={20} />}
                label="Instagram"
              />
              <SocialLink href="" icon={<Send size={20} />} label="Telegram" />
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
              <FooterLink href="#usa" target="_self">
                {t('footer.directions.usa')}
              </FooterLink>
              <FooterLink href="#europe" target="_self">
                {t('footer.directions.europe')}
              </FooterLink>
              <FooterLink href="#korea" target="_self">
                {t('footer.directions.korea')}
              </FooterLink>
              <FooterLink href="#china" target="_self">
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
                  href="mailto:ondrive.ua@gmail.com"
                  className={styles.contactLink}
                >
                  ondrive.ua@gmail.com
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
