import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../utils/constants';

const plans = [
  {
    id: 'starter',
    tier: 'BASIC ACCESS',
    tierColor: 'text-[#c7c4d8]',
    name: 'Starter',
    price: '$49',
    featured: false,
    features: ['25 TH/s Hashing Power', 'Standard Security', 'Weekly Payouts'],
    cta: 'CHOOSE STARTER',
    ctaClass: 'w-full py-2 border border-[#918fa1] rounded-md hover:bg-white/5 transition-all font-[Inter] font-bold text-xs uppercase tracking-wider',
  },
  {
    id: 'pro',
    tier: 'MOST POPULAR',
    tierColor: 'text-[#c3c0ff]',
    name: 'Pro',
    price: '$199',
    featured: true,
    badge: 'Recommended',
    features: ['150 TH/s Hashing Power', 'Advanced Firewall Protection', 'Daily Payouts', 'Priority Node Support'],
    cta: 'CHOOSE PRO',
    ctaClass: 'w-full py-2 bg-[#c3c0ff] text-[#1d00a5] rounded-md shadow-lg hover:shadow-[#c3c0ff]/30 transition-all font-[Inter] font-bold text-xs uppercase tracking-wider',
  },
  {
    id: 'elite',
    tier: 'INSTITUTIONAL',
    tierColor: 'text-[#c7c4d8]',
    name: 'Elite',
    price: '$999',
    featured: false,
    features: ['1.2 PH/s Hashing Power', 'Custom Hardware Allocation', 'Instant Rewards Withdraw', '24/7 Personal Architect'],
    cta: 'CHOOSE ELITE',
    ctaClass: 'w-full py-2 border border-[#918fa1] rounded-md hover:bg-white/5 transition-all font-[Inter] font-bold text-xs uppercase tracking-wider',
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 bg-[#0e0e10]/50" id="plans">
      <div className="px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-[Sora] text-[48px] font-bold text-[#e5e1e4]">
            Select Your <span className="text-[#c3c0ff]">Protocol</span>
          </h2>
          <p className="text-[#c7c4d8] font-[Inter]">Scalable solutions tailored for every tier of investor.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              className={`relative bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border rounded-xl p-10 flex flex-col transition-all duration-300
                ${plan.featured
                  ? 'border-[#c3c0ff]/50 shadow-[0_0_30px_rgba(79,70,229,0.1)] scale-105'
                  : 'border-white/5'
                }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c3c0ff] text-[#1d00a5] text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tight">
                  {plan.badge}
                </div>
              )}
              <span className={`font-[Inter] font-bold text-[10px] tracking-[0.1em] uppercase mb-1 ${plan.tierColor}`}>
                {plan.tier}
              </span>
              <h3 className="font-[Sora] text-2xl font-semibold mb-6">{plan.name}</h3>
              <div className="flex items-baseline gap-1 mb-10">
                <span className="font-[Sora] text-4xl font-bold text-[#e5e1e4]">{plan.price}</span>
                <span className="text-[#c7c4d8] font-[Inter]">/month</span>
              </div>
              <ul className="space-y-3 mb-16 flex-grow">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-center gap-3 text-[#c7c4d8] font-[Inter]">
                    <span className="material-symbols-outlined text-[#c3c0ff] text-base">check_circle</span>
                    {f}
                  </li>
                ))}
              </ul>
              <Link to={ROUTES.REGISTER}>
                <button className={plan.ctaClass}>{plan.cta}</button>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
