import { motion } from 'framer-motion';
import { Globe, Share2, MessageCircle, Link2, Heart } from 'lucide-react';
import { qiskitLogo, vesitLogo } from '../assets/index.js';

const socials = [
  { icon: Globe, href: 'https://github.com/Qiskit', label: 'GitHub' },
  { icon: Share2, href: 'https://twitter.com/Qiskit', label: 'Twitter/X' },
  { icon: MessageCircle, href: 'https://instagram.com', label: 'Instagram' },
  { icon: Link2, href: 'https://linkedin.com', label: 'LinkedIn' },
];

const footerLinks = [
  {
    title: 'Event',
    links: [
      { label: 'About', href: '#about' },
      { label: 'Schedule', href: '#schedule' },
      { label: 'Speakers', href: '#speakers' },
      { label: 'Prizes', href: '#prizes' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Qiskit Docs', href: 'https://docs.quantum.ibm.com', external: true },
      { label: 'IBM Quantum', href: 'https://quantum.ibm.com', external: true },
      { label: 'VESIT Website', href: 'https://vesit.ves.ac.in', external: true },
    ],
  },
  {
    title: 'Connect',
    links: [
      { label: 'Register', href: '#register' },
      { label: 'FAQ', href: '#faq' },
      { label: 'Contact Us', href: 'mailto:qiskit@vesit.ves.ac.in', external: true },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400 pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center p-1.5">
                <img src={qiskitLogo} alt="Qiskit" className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Qiskit Fall Fest 2026</p>
                <p className="font-mono text-xs text-purple-400">× VESIT, Mumbai</p>
              </div>
            </div>
            <p className="font-body text-sm leading-relaxed text-gray-500 mb-5 max-w-xs">
              Bringing quantum computing to campus. Join the global Qiskit community and explore the quantum frontier at VESIT.
            </p>
            <div className="flex gap-3">
              {socials.map((s) => {
                const Icon = s.icon;
                return (
                  <motion.a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-9 h-9 bg-gray-800 hover:bg-purple-700 rounded-xl flex items-center justify-center text-gray-400 hover:text-white transition-all"
                  >
                    <Icon size={15} />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-semibold text-white text-sm mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.external ? '_blank' : undefined}
                      rel={link.external ? 'noopener noreferrer' : undefined}
                      className="font-body text-sm text-gray-500 hover:text-purple-400 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Logos row */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap items-center gap-6 justify-center md:justify-start">
            <div className="opacity-40 hover:opacity-70 transition-opacity">
              <span className="font-display font-bold text-gray-600 text-sm tracking-wide">VESIT</span>
            </div>
            <div className="flex items-center gap-3 opacity-50 hover:opacity-80 transition-opacity">
              <img src={qiskitLogo} alt="Qiskit" className="h-7" />
              <span className="text-gray-500 font-bold">×</span>
              <img src={vesitLogo} alt="VESIT" className="h-5" />
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
          <p>
            © 2026 Qiskit Fall Fest × VESIT. Made with{' '}
            <Heart size={11} className="inline text-purple-500" fill="currentColor" />{' '}
            by the VESIT Quantum Club.
          </p>
          <p className="font-mono">
            Powered by{' '}
            <a href="https://qiskit.org" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">
              IBM Qiskit
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
