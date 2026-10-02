import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Sparkles, CheckCircle2, ExternalLink } from 'lucide-react';
import { qiskitLogo, sticker02 } from '../assets/index.js';

// Official Google Form URL
const GOOGLE_FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLSfpkKFkpV9Hm0eKULWxEhgRWWJL3OrNpXhQIIh420bXyYWI6w/viewform';

const perks = [
  '4 days of quantum sessions & hands-on workshops',
  'Access to real IBM Quantum hardware & simulators',
  'Expert mentorship from IBM Qiskit Advocates',
  'Win IBM Quantum swag, goodies & prizes',
  'Official Certificate of Participation',
  'Exclusively offline Hackathon for VESIT students',
  'Connect with Mumbai’s growing quantum community',
];

export default function Register() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="quantum-blob absolute w-72 h-72 -top-10 -right-10 opacity-20" />
      <div className="quantum-blob absolute w-60 h-60 bottom-10 -left-10 opacity-20" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-5 font-mono">
            <Sparkles size={14} />
            Register Now
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            Secure Your{' '}
            <span className="gradient-text">Spot Today</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-xl mx-auto">
            Free entry & open to all students! Register via our official Google Form to join Mumbai's biggest quantum computing event of 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left: Perks */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-purple rounded-3xl p-8 md:p-10 border border-purple-200 h-full flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img src={qiskitLogo} alt="Qiskit" className="h-8 w-auto" />
                  <span className="font-display font-bold text-gray-800 text-xl">What You Get</span>
                </div>
                <ul className="space-y-3.5">
                  {perks.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm md:text-base text-gray-700">
                      <CheckCircle2 size={18} className="text-purple-600 flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-purple-200/60 flex flex-wrap items-center gap-3 text-xs font-mono text-purple-700">
                <span className="px-3 py-1 bg-purple-100/80 rounded-full">✦ 100% Free</span>
                <span className="px-3 py-1 bg-purple-100/80 rounded-full">✦ Beginners Welcome</span>
                <span className="px-3 py-1 bg-purple-100/80 rounded-full">✦ No Prior Physics Needed</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Google Form CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 border border-purple-200 h-full flex flex-col items-center justify-center text-center relative overflow-hidden shadow-lg shadow-purple-100/40">
              {/* Floating sticker illustration */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                className="w-32 mb-6"
              >
                <img src={sticker02} alt="Register sticker" className="w-full drop-shadow-md" />
              </motion.div>

              <h3 className="font-display font-bold text-2xl text-gray-800 mb-2">
                Ready to Dive In?
              </h3>
              <p className="font-body text-gray-500 text-sm mb-8 max-w-xs">
                Fill out the quick Google Form to confirm your seat and receive session links & resources.
              </p>

              {/* Google Form Button */}
              <a
                id="google-form-btn"
                href={GOOGLE_FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 px-6 bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-base rounded-2xl shadow-lg shadow-purple-200 hover:shadow-purple-300 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 group"
              >
                <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
                <span>Register via Google Form</span>
                <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform opacity-80" />
              </a>

              <p className="font-mono text-xs text-gray-400 mt-4">
                Opens in Google Forms ↗
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
