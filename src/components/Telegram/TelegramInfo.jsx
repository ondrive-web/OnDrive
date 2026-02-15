import React from 'react';
import { useTranslation } from 'react-i18next';
import { Send, CheckCircle2, BellRing } from 'lucide-react';
import styles from './TelegramInfo.module.css';

const CAR_IMAGE_URL =
  'https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&w=1000&auto=format&fit=crop';

export default function TelegramSection() {
  const { t } = useTranslation();

  return (
    <section className={styles.section}>
      <div className={styles.glowBgLeft}></div>

      <div className={styles.container}>
        <div className={styles.textContent}>
          <div className={styles.badge}>
            <span className={styles.pulseDot}></span>
            {t('telegram.badge')}
          </div>

          <h2 className={styles.title}>
            {t('telegram.title_start')} <br />
            <span className={styles.highlight}>
              {t('telegram.title_highlight')}
            </span>
          </h2>

          <p className={styles.description}>
            {t('telegram.description_start')}{' '}
            <span className={styles.highlight}>Run & Drive</span>
            {t('telegram.description_end')}
          </p>

          <ul className={styles.benefitsList}>
            <li>
              <div className={styles.iconBox}>
                <CheckCircle2 size={18} />
              </div>{' '}
              {t('telegram.benefits.exclusive')}
            </li>
            <li>
              <div className={styles.iconBox}>
                <CheckCircle2 size={18} />
              </div>{' '}
              {t('telegram.benefits.history')}
            </li>
            <li>
              <div className={styles.iconBox}>
                <CheckCircle2 size={18} />
              </div>{' '}
              {t('telegram.benefits.managers')}
            </li>
          </ul>

          <a
            href="https://t.me/runndrive_ua"
            target="_blank"
            rel="noreferrer"
            className={styles.ctaButton}
          >
            <Send size={20} className={styles.sendIcon} />
            <span>{t('telegram.cta_button')}</span>
            <div className={styles.buttonGlow}></div>
          </a>
        </div>

        <div className={styles.visualContent}>
          <div className={styles.chatCard}>
            <div className={styles.notificationBadge}>
              <BellRing size={16} fill="currentColor" />
              <span>{t('telegram.card.notification')}</span>
            </div>

            <div className={styles.chatHeader}>
              <div className={styles.avatar}>OD</div>
              <div className={styles.chatInfo}>
                <h4>OnDrive | USA Import</h4>
                <p>{t('telegram.card.sub_header')}</p>
              </div>
            </div>

            <div className={styles.messageBody}>
              <div className={styles.imageWrapper}>
                <img src={CAR_IMAGE_URL} alt="Car Example" />
                <div className={styles.statusTag}>Run & Drive 🟢</div>
              </div>
              <div className={styles.messageText}>
                <p className={styles.carTitle}>
                  🔥 <b>{t('telegram.card.car_title')}</b>
                </p>
                <div className={styles.priceTag}>
                  {t('telegram.card.bid_label')} <b>$28,400</b>
                </div>
                <p className={styles.savingsText}>
                  {t('telegram.card.savings_label')} ~$12,000!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
