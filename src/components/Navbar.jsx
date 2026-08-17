import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { qiskitLogo, vesitLogo } from '../assets/index.js';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Speakers', href: '#speakers' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Register', href: '#register' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'glass-card shadow-lg shadow-purple-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={qiskitLogo} alt="Qiskit" className="h-9 w-auto" />
          <span className="font-display font-bold text-purple-300 text-xl leading-none">×</span>
          <img src={vesitLogo} alt="VESIT" className="h-9 w-auto" />
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.slice(0, -1).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm font-medium text-gray-600 hover:text-purple-600 transition-colors duration-200 relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 rounded-full transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
          <a
            href="#register"
            className="px-5 py-2 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all duration-200 shadow-md shadow-purple-200 hover:shadow-purple-300 hover:scale-105"
          >
            Register Now ✦
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          id="mobile-menu-toggle"
          className="md:hidden text-purple-600 hover:text-purple-800 transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-card border-t border-purple-100 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`font-medium text-sm transition-colors ${
                    link.label === 'Register'
                      ? 'text-purple-600 font-bold'
                      : 'text-gray-600 hover:text-purple-600'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
