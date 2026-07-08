import { Link } from 'react-router-dom';

const footerLinks = {
  Platform: [
    { label: 'Mining Dashboard', href: '/dashboard' },
    { label: 'Network Status', href: '#stats' },
    { label: 'Reward Calculator', href: '#plans' },
    { label: 'Whitepaper', href: '#' },
  ],
  Support: [
    { label: 'Help Center', href: '#' },
    { label: 'API Docs', href: '#' },
    { label: 'Bug Bounty', href: '#' },
    { label: 'Brand Assets', href: '#' },
  ],
  Company: [
    { label: 'About Us', href: '#' },
    { label: 'DAO Portal', href: '#' },
    { label: 'Careers', href: '#' },
    { label: 'Partners', href: '#' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Risk Disclosure', href: '#' },
  ],
};

// Inline social icon SVGs from Stitch design
const TwitterIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
  </svg>
);
const GitHubIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M12 0C5.373 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.113.793-.26.793-.577v-2.234c-3.338.726-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
  </svg>
);
const TelegramIcon = () => (
  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
    <path d="M11.944 0C5.352 0 0 5.352 0 11.944c0 6.592 5.352 11.944 11.944 11.944 6.592 0 11.944-5.352 11.944-11.944C23.888 5.352 18.536 0 11.944 0zm5.858 8.169c-.183 2.503-.951 7.027-1.341 9.108-.165.88-.49 1.176-.803 1.205-.689.064-1.213-.454-1.88-.892-1.043-.686-1.633-1.114-2.646-1.782-1.171-.773-.412-1.198.256-1.89.175-.181 3.21-2.943 3.268-3.193.007-.031.014-.146-.056-.209-.07-.063-.173-.041-.247-.024-.105.024-1.781 1.132-5.03 3.325-.476.327-.907.487-1.294.478-.426-.009-1.246-.241-1.856-.439-.748-.242-1.343-.371-1.291-.783.027-.215.324-.437.892-.667 3.504-1.527 5.84-2.535 7.009-3.024 3.334-1.396 4.027-1.638 4.479-1.646.1-.002.321.023.465.14.121.099.154.233.167.329.013.097.015.228.006.328z" />
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#0e0e10] border-t border-white/10 pt-16 pb-10 px-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-16">
        {/* Brand */}
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#4f46e5] to-[#4cd7f6] flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>bolt</span>
            </div>
            <span className="font-[Sora] text-2xl font-bold tracking-tighter text-[#c3c0ff]">Litminer</span>
          </div>
          <p className="text-[#c7c4d8] text-sm max-w-xs leading-relaxed">
            Pioneering the synthesis of industrial-scale compute and decentralized liquidity. Secure. Scalable. Sovereign.
          </p>
          <div className="flex gap-6">
            {[TwitterIcon, GitHubIcon, TelegramIcon].map((Icon, i) => (
              <a key={i} href="#" className="text-[#c7c4d8] hover:text-[#4cd7f6] transition-all">
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-8 md:col-span-3">
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="space-y-3">
              <h5 className="text-[#e5e1e4] font-bold font-[Inter] text-sm">{section}</h5>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#c7c4d8] text-sm hover:text-[#c3c0ff] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-[#c7c4d8]/40 text-[10px] font-bold tracking-[0.2em] uppercase font-[Inter]">
          © 2026 Litminr Mining. ALL RIGHTS RESERVED.
        </p>
        <p className="text-[#c7c4d8]/40 text-[10px] font-bold tracking-[0.2em] uppercase font-[Inter]">
          
        </p>
      </div>
    </footer>
  );
}
