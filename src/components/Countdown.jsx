import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { qiskitLogo } from '../assets/index.js';

function CountdownUnit({ value, label }) {
  return (
    <div className="flex flex-col items-center">
      <div className="glass-card rounded-2xl w-20 h-20 md:w-24 md:h-24 flex items-center justify-center shadow-md shadow-purple-100/50 mb-2">
        <span className="font-display font-black text-3xl md:text-4xl gradient-text-2">
          {String(value).padStart(2, '0')}
        </span>
      </div>
      <span className="font-mono text-xs text-gray-400 uppercase tracking-widest">{label}</span>
    </div>
  );
}

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState(() => {
    const diff = new Date(targetDate) - new Date();
    return diff > 0 ? diff : 0;
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const diff = new Date(targetDate) - new Date();
      setTimeLeft(diff > 0 ? diff : 0);
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  return { days, hours, minutes, seconds };
}

export default function Countdown() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const { days, hours, minutes, seconds } = useCountdown('2026-10-15T09:00:00+05:30');

  return (
    <section className="py-20 bg-gradient-to-br from-purple-700 via-violet-700 to-indigo-800 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        {[1, 2, 3, 4].map((r) => (
          <div
            key={r}
            className="absolute rounded-full border border-white"
            style={{
              width: `${r * 200}px`,
              height: `${r * 200}px`,
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
          />
        ))}
      </div>

      <motion.img
        src={qiskitLogo}
        alt=""
        className="absolute right-8 top-1/2 -translate-y-1/2 w-28 md:w-40 opacity-10 pointer-events-none"
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 text-white/80 text-sm font-semibold px-4 py-2 rounded-full mb-6 font-mono backdrop-blur-sm">
            <span className="w-2 h-2 bg-white rounded-full animate-pulse" />
            Event Starts In
          </div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-white mb-10">
            The Countdown is On! ⚛️
          </h2>
          <div className="flex gap-4 md:gap-8 justify-center">
            <CountdownUnit value={days} label="Days" />
            <div className="font-display font-bold text-3xl text-purple-300 pt-5">:</div>
            <CountdownUnit value={hours} label="Hours" />
            <div className="font-display font-bold text-3xl text-purple-300 pt-5">:</div>
            <CountdownUnit value={minutes} label="Minutes" />
            <div className="font-display font-bold text-3xl text-purple-300 pt-5">:</div>
            <CountdownUnit value={seconds} label="Seconds" />
          </div>
          <p className="font-body text-purple-200 text-sm mt-8">
            📅 October 15–17, 2026 &nbsp;|&nbsp; 📍 VESIT, Chembur, Mumbai
          </p>
        </motion.div>
      </div>
    </section>
  );
}
