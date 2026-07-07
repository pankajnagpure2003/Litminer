import { motion } from 'framer-motion';

const features = [
  {
    id: 'security',
    col: 'md:col-span-8',
    icon: 'shield_lock',
    iconColor: 'text-[#4cd7f6]',
    title: 'End-to-End Cryptographic Security',
    desc: 'Every hashing cycle is protected by multi-signature governance and real-time threat detection algorithms.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWSqEIF7xgVzibvsqTWeO-0BTGl0mix1MJcJJWCWqmE3bV6SbZvkroZOSvkvCDrYrHfuwP774Ars_j2ql1K6x6dRyNf0o2hcA4r345PxKzK353co2ZzKbel5guQQ0RFsH5hBqDvxLU2dq8kbzDC2Os7mOZMC11dto3KCRiN7T03clctb1fDSMKEdZPCzCTZk0IKeptN1irbQAMFUNDalqfC0uJWKB2uUSbHitL6omvbqKq2LjkSziUUatWHsxjDqZNcI_yGubbomc',
  },
  {
    id: 'speed',
    col: 'md:col-span-4',
    icon: 'bolt',
    iconColor: 'text-[#c3c0ff]',
    title: 'Ultra-Low Latency',
    desc: 'Proprietary nodes distributed globally ensure sub-ms block propagation and zero orphan rates.',
  },
  {
    id: 'scale',
    col: 'md:col-span-4',
    icon: 'dynamic_form',
    iconColor: 'text-[#d0bcff]',
    title: 'Infinite Scaling',
    desc: 'Our cluster-based architecture grows seamlessly with your demand, from single units to industrial farms.',
  },
  {
    id: 'ai',
    col: 'md:col-span-8',
    icon: 'memory',
    iconColor: 'text-[#c3c0ff]',
    title: 'AI-Driven Yield Auto-Optimization',
    desc: 'Neural networks automatically switch hashing power to the most profitable chains in real-time, maximizing your ROI.',
    gradient: true,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 px-12" id="features">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="font-[Sora] text-[32px] md:text-[48px] font-bold text-[#e5e1e4] mb-2">
          Institutional Grade <span className="text-[#4cd7f6]">Performance</span>
        </h2>
        <p className="font-[Inter] text-lg text-[#c7c4d8] max-w-2xl">
          Precision-engineered protocols that redefine what mining can achieve.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-2 gap-6 h-auto md:h-[600px]">
        {features.map((f, i) => (
          <motion.div
            key={f.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -8 }}
            className={`${f.col} bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/10 rounded-xl p-10 relative overflow-hidden group transition-transform duration-300`}
          >
            {/* Image for card 1 */}
            {f.image && (
              <div className="absolute bottom-0 right-0 w-1/2 h-full opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity">
                <img src={f.image} alt="" className="w-full h-full object-cover" />
              </div>
            )}
            {/* Gradient for card 4 */}
            {f.gradient && (
              <div className="absolute inset-0 bg-gradient-to-l from-[#c3c0ff]/10 to-transparent" />
            )}
            <div className={`relative z-10 ${f.col === 'md:col-span-8' ? 'max-w-md' : ''} ${f.col === 'md:col-span-4' ? 'flex flex-col justify-end h-full' : ''}`}>
              <span className={`material-symbols-outlined text-5xl mb-6 block ${f.iconColor}`}>{f.icon}</span>
              <h3 className="font-[Sora] text-2xl font-semibold text-[#e5e1e4] mb-3">{f.title}</h3>
              <p className="text-[#c7c4d8] font-[Inter]">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
