import { motion } from 'framer-motion';

const whyItems = [
  {
    icon: 'hub',
    color: 'primary',
    title: 'Decentralized Governance',
    desc: 'Operated by a DAO of 50,000+ members, ensuring no single point of failure or centralized control.',
  },
  {
    icon: 'eco',
    color: 'secondary',
    title: 'Carbon-Negative Mining',
    desc: 'Our infrastructure is powered 100% by stranded methane energy and hydroelectric excess.',
  },
  {
    icon: 'assured_workload',
    color: 'tertiary',
    title: 'Audited Smart Contracts',
    desc: 'Third-party verification from CertiK and OpenZeppelin on all automated payout protocols.',
  },
];

const colorMap = {
  primary: { bg: 'bg-[#c3c0ff]/10', hover: 'group-hover:bg-[#c3c0ff]/20', border: 'border-[#c3c0ff]/20', icon: 'text-[#c3c0ff]' },
  secondary: { bg: 'bg-[#4cd7f6]/10', hover: 'group-hover:bg-[#4cd7f6]/20', border: 'border-[#4cd7f6]/20', icon: 'text-[#4cd7f6]' },
  tertiary: { bg: 'bg-[#d0bcff]/10', hover: 'group-hover:bg-[#d0bcff]/20', border: 'border-[#d0bcff]/20', icon: 'text-[#d0bcff]' },
};

export default function WhyUsSection() {
  return (
    <section className="py-16 px-12" id="why-us">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Text Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-[Sora] text-[48px] font-bold text-[#e5e1e4] mb-10 leading-tight">
            The Frontier of <span className="text-[#d0bcff]">Cryptographic Reliability</span>
          </h2>
          <div className="space-y-10">
            {whyItems.map((item) => {
              const c = colorMap[item.color];
              return (
                <div key={item.title} className="flex gap-6 group">
                  <div className={`w-14 h-14 shrink-0 rounded-lg ${c.bg} ${c.hover} flex items-center justify-center transition-all border ${c.border}`}>
                    <span className={`material-symbols-outlined text-3xl ${c.icon}`}>{item.icon}</span>
                  </div>
                  <div>
                    <h4 className="font-[Inter] text-lg font-bold text-[#e5e1e4] mb-1">{item.title}</h4>
                    <p className="text-[#c7c4d8] font-[Inter]">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-[#c3c0ff]/10 blur-3xl rounded-full opacity-50 animate-pulse" />
          <div className="bg-[rgba(24,24,27,0.6)] backdrop-blur-[12px] border border-white/20 p-2 rounded-2xl relative overflow-hidden">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAclz-67YdJ8utb8MNenbpyUhoWx6LDlfRDvU3tCZMqVhgFW9Iy6aMCjN7KSc8xvv9Ky_DmukL5F558lj2A2s4CkTa8l1eHueXQuhPdwbuRHgzpieBCHlXBdSFOVewNkBmj0H3kwm6vh_siufhoWnegcLM0lMFrQf-RisLXoD5k5OBDhyWDNDGTJql-Xj8x_o4XuRwjGiqjeOsLsTQ5w0o2PVwy3ISaTsdNjOBTKB4MIIS-GghMGdfPmkwvVqyQP2SRKs4EQqagOUE"
              alt="Mining Dashboard"
              className="rounded-xl w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
