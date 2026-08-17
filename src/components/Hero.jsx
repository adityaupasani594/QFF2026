import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { qiskitLogo, vesitLogo, sticker07, sticker02 } from '../assets/index.js';

const particles = Array.from({ length: 14 }, (_, i) => ({
  id: i,
  w: Math.random() * 8 + 4,
  top: Math.random() * 90,
  left: Math.random() * 90,
  dur: Math.random() * 3 + 3,
  delay: Math.random() * 3,
}));

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen hero-bg flex flex-col items-center justify-center overflow-hidden">

      {/* Soft particle dots */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-purple-400/25"
          style={{ width: p.w, height: p.w, top: `${p.top}%`, left: `${p.left}%` }}
          animate={{ y: [0, -18, 0], opacity: [0.25, 0.6, 0.25] }}
          transition={{ duration: p.dur, repeat: Infinity, delay: p.delay }}
        />
      ))}

      {/* Background blobs */}
      <div className="quantum-blob absolute w-[520px] h-[520px] -top-40 -left-40 opacity-25" />
      <div className="quantum-blob absolute w-96 h-96 -bottom-20 right-0 opacity-15" />

      {/* Floating sticker – falcon top-right (purple outline, fits theme perfectly) */}
      <motion.img
        src={sticker07}
        alt=""
        className="absolute top-20 right-4 md:right-16 w-36 md:w-48 drop-shadow-xl pointer-events-none"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0, y: [0, -14, 0], rotate: [2, -2, 2] }}
        transition={{
          opacity: { duration: 0.7, delay: 0.9 },
          x: { duration: 0.7, delay: 0.9 },
          y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
          rotate: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 },
        }}
      />

      {/* Floating sticker – two birds bottom-left */}
      <motion.img
        src={sticker02}
        alt=""
        className="absolute bottom-28 left-4 md:left-14 w-28 md:w-36 drop-shadow-lg pointer-events-none"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0, y: [0, -10, 0], rotate: [-3, 2, -3] }}
        transition={{
          opacity: { duration: 0.7, delay: 1.3 },
          x: { duration: 0.7, delay: 1.3 },
          y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
          rotate: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 1 },
        }}
      />

      {/* ── Main content ── */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">

        {/* Logo lockup: Qiskit × VESIT */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 md:gap-6 mb-10 flex-wrap"
        >
          {/* Qiskit Bloch sphere logo */}
          <img
            src={qiskitLogo}
            alt="Qiskit"
            className="h-16 md:h-20 w-auto drop-shadow-md"
          />

          {/* × separator */}
          <span className="font-display font-bold text-4xl md:text-5xl text-purple-400 select-none leading-none">
            ×
          </span>

          {/* VESIT logo */}
          <img
            src={vesitLogo}
            alt="VESIT"
            className="h-14 md:h-16 w-auto drop-shadow-sm"
          />
        </motion.div>

        {/* Main title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
        >
          <h1 className="font-display font-black text-5xl md:text-7xl lg:text-8xl leading-tight mb-4 gradient-text">
            Qiskit Fall Fest
          </h1>
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="font-mono text-xl font-bold text-purple-500">2026</span>
            <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse" />
            <span className="font-display font-semibold text-lg text-gray-500">
              VESIT, Mumbai
            </span>
          </div>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="font-body text-base md:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Where quantum meets curiosity. Dive into quantum computing, build circuits, win prizes, and
          join the global{' '}
          <span className="text-purple-600 font-semibold">Qiskit community</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <a
            id="hero-register-btn"
            href="#register"
            className="group px-8 py-4 bg-purple-600 text-white font-display font-bold text-base rounded-full shadow-lg shadow-purple-200 hover:bg-purple-700 hover:shadow-purple-300 hover:scale-105 transition-all duration-200 flex items-center gap-2"
          >
            <Sparkles size={18} className="group-hover:rotate-12 transition-transform" />
            Register Now — It&apos;s Free!
          </a>
          <a
            id="hero-learn-btn"
            href="#about"
            className="px-8 py-4 glass-purple text-purple-700 font-display font-semibold text-base rounded-full border border-purple-200 hover:border-purple-400 hover:scale-105 transition-all duration-200"
          >
            Learn More ↓
          </a>
        </motion.div>

        {/* Quick stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.0 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          {[
            { value: '4', label: 'Live Sessions' },
            { value: '₹0', label: 'Entry Fee' },
            { value: '🌐', label: 'Open to All' },
            { value: '🏆', label: 'Hackathon @ VESIT' },
          ].map((s) => (
            <div
              key={s.label}
              className="glass-card rounded-2xl px-5 py-3 text-center shadow-sm hover:shadow-purple-100 transition-shadow"
            >
              <div className="font-display font-bold text-2xl text-purple-700">{s.value}</div>
              <div className="font-body text-xs text-gray-500 mt-0.5">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 text-purple-400"
      >
        <span className="font-mono text-xs tracking-widest">scroll</span>
        <motion.div animate={{ y: [0, 7, 0] }} transition={{ duration: 1.4, repeat: Infinity }}>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
