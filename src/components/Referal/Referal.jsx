import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import styles from './ReferralSection.module.css';

// Дані для графіку (крива зростання)
const chartData = [
  { name: 'Старт', income: 0 },
  { name: '1-3 клієнти', income: 300 },
  { name: '4-9 клієнтів', income: 1500 }, // Накопичувальний ефект
  { name: 'VIP рівень', income: 4500 },
];

// Дані для карток
const tiersData = [
  {
    id: 1,
    title: 'Початківець',
    count: '1-3 клієнти',
    price: '$300',
    subtext: 'за кожну успішну угоду',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4M12 20V4" /> {/* Плюс */}
      </svg>
    )
  },
  {
    id: 2,
    title: 'Партнер',
    count: 'від 4-го клієнта',
    price: '$500',
    subtext: 'підвищений бонус + пріоритет',
    isPopular: true,
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" /> {/* Зростання */}
      </svg>
    )
  },
  {
    id: 3,
    title: 'VIP Ексклюзив',
    count: 'Топ-партнери',
    price: 'до $1000',
    subtext: 'індивідуальні умови та % від оберту',
    icon: (
      <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" /> {/* Блискавка */}
      </svg>
    )
  }
];

const ReferralSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        
        {/* Заголовок */}
        <div className={styles.header}>
          <h2 className={styles.title}>
            Партнерська <span className={styles.highlight}>програма</span>
          </h2>
          <p className={styles.subtitle}>
            Чим більше клієнтів ви залучаєте, тим вищі ваші винагороди.
            Ми цінуємо довгострокові відносини.
          </p>
        </div>

        {/* Картки рівнів */}
        <div className={styles.cardsGrid}>
          {tiersData.map((tier) => (
            <div 
              key={tier.id} 
              className={`${styles.card} ${tier.isPopular ? styles.popularCard : ''}`}
            >
              {tier.isPopular && <div className={styles.badge}>Найпопулярніше</div>}
              
              <div className={styles.iconWrapper}>
                {tier.icon}
              </div>
              
              <div className={styles.tierInfo}>
                <span className={styles.tierCount}>{tier.count}</span>
                <h3 className={styles.tierPrice}>{tier.price}</h3>
                <p className={styles.tierSubtext}>{tier.subtext}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Блок з графіком */}
        <div className={styles.chartSection}>
          <div className={styles.chartHeader}>
            <h3>Динаміка вашого прибутку</h3>
            <p>Наочна візуалізація потенційного доходу за місяць</p>
          </div>
          
          <div className={styles.chartWrapper}>
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={chartData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  {/* Градієнт для заливки графіка */}
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#dfa878" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#dfa878" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e0d8" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#8c8177', fontSize: 12 }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fill: '#8c8177', fontSize: 12 }}
                  tickFormatter={(value) => `$${value}`} 
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#fff', 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 30px rgba(0,0,0,0.1)' 
                  }}
                  itemStyle={{ color: '#4a403a', fontWeight: 'bold' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#dfa878" 
                  strokeWidth={3}
                  fillOpacity={1} 
                  fill="url(#colorIncome)" 
                  animationDuration={2000}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        <button className={styles.ctaButton}>Стати партнером</button>

      </div>
    </section>
  );
};

export default ReferralSection;