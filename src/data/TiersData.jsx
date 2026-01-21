// export const tiersData = [
//   {
//     id: 1,
//     title: 'Початківець',
//     count: '1-3 клієнти',
//     price: '$200',
//     subtext: 'за кожну успішну угоду',
//     icon: (
//       <svg
//         width="24"
//         height="24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M20 12H4M12 20V4"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 2,
//     title: 'Партнер',
//     count: 'від 4-го клієнта',
//     price: '$400',
//     subtext: 'підвищений бонус + пріоритет',
//     isPopular: true,
//     icon: (
//       <svg
//         width="24"
//         height="24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
//         />
//       </svg>
//     ),
//   },
//   {
//     id: 3,
//     title: 'VIP Ексклюзив',
//     count: 'Топ-партнери',
//     price: 'до $800',
//     subtext: 'індивідуальні умови та % від оберту',
//     icon: (
//       <svg
//         width="24"
//         height="24"
//         fill="none"
//         stroke="currentColor"
//         strokeWidth="2"
//         viewBox="0 0 24 24"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M13 10V3L4 14h7v7l9-11h-7z"
//         />
//       </svg>
//     ),
//   },
// ];

import { Plus, TrendingUp, Zap } from 'lucide-react';

export const tiersData = [
  {
    id: 1,
    icon: Plus,
    isPopular: false,
  },
  {
    id: 2,
    icon: TrendingUp,
    isPopular: true,
  },
  {
    id: 3,
    icon: Zap,
    isPopular: false,
  },
];
