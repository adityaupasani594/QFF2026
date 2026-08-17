import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Monitor, Users } from 'lucide-react';

const speakers = [
  {
    name: 'IBM Quantum Employee',
    role: 'Quantum Computing Expert',
    org: 'IBM Quantum',
    topic: 'Intro to Quantum Computing & Why You Should Learn It',
    day: 'Day 1 · Oct 2',
    mode: 'Online',
    color: 'from-blue-500 to-indigo-600',
    initials: 'IBM',
    tba: true,
  },
  {
    name: 'Aditya Upasani',
    role: 'Qiskit Advocate',
    org: 'IBM / Qiskit Community',
    topic: 'Basics of Quantum Computing',
    day: 'Day 1 · Oct 2',
    mode: 'Online',
    color: 'from-purple-500 to-violet-600',
    initials: 'AU',
    tba: false,
  },
  {
    name: 'Shravani Kale',
    role: 'Qiskit Advocate',
    org: 'IBM / Qiskit Community',
    topic: 'Quantum Applications & QKD',
    day: 'Day 2 · Oct 3',
    mode: 'Online',
    color: 'from-violet-500 to-fuchsia-600',
    initials: 'SK',
    tba: false,
  },
  {
    name: 'Dr. Ranjan Bala Jain',
    role: 'Quantum Technologies Faculty',
    org: 'VESIT',
    topic: 'Getting Started with Qiskit',
    day: 'Day 2 · Oct 3',
    mode: 'Online',
    color: 'from-fuchsia-500 to-pink-500',
    initials: 'RBJ',
    tba: false,
  },
];

function SpeakerCard({ speaker, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      className="glass-card rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-purple-100/50 transition-all duration-300 hover:-translate-y-2 group"
    >
      {/* Avatar / gradient header */}
      <div className={`h-36 bg-gradient-to-br ${speaker.color} relative flex items-center justify-center overflow-hidden`}>
        {/* Decorative rings */}
        <div className="absolute inset-0 opacity-20">
          {[1, 2, 3].map((r) => (
            <div
              key={r}
              className="absolute rounded-full border border-white"
              style={{
                width: `${r * 60}px`,
                height: `${r * 60}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
        <div className="relative w-20 h-20 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center text-white font-display font-bold text-xl border-2 border-white/40">
          {speaker.tba ? '?' : speaker.initials}
        </div>
        {/* Day badge */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center">
          <span className="font-mono text-[10px] bg-black/20 text-white/90 px-3 py-1 rounded-full">
            {speaker.day}
          </span>
        </div>
      </div>

      {/* Info */}
      <div className="p-5">
        {speaker.tba ? (
          <div className="mb-1">
            <h3 className="font-display font-bold text-base text-gray-800">Speaker</h3>
            <p className="font-body text-sm text-purple-600 font-medium">{speaker.role}</p>
          </div>
        ) : (
          <div className="mb-1">
            <h3 className="font-display font-bold text-base text-gray-800">{speaker.name}</h3>
            <p className="font-body text-sm text-purple-600 font-medium">{speaker.role}</p>
          </div>
        )}
        <p className="font-mono text-xs text-gray-400 mt-0.5 mb-3">{speaker.org}</p>

        <div className="border-t border-gray-100 pt-3 space-y-2">
          <p className="font-body text-xs text-gray-600 leading-relaxed">
            <span className="font-semibold text-gray-700">Talk: </span>
            {speaker.topic}
          </p>
          <div className="flex items-center gap-1.5 mt-1">
            <Monitor size={10} className="text-purple-400" />
            <span className="font-mono text-[10px] text-purple-500">{speaker.mode} · Open to All</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Speakers() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="speakers" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-5 font-mono">
            <span className="w-2 h-2 bg-purple-500 rounded-full" />
            Speakers & Facilitators
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            Learn from{' '}
            <span className="gradient-text">Quantum Experts</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-xl mx-auto">
            IBM Quantum employees, Qiskit Advocates, and quantum faculty — our speakers bring
            real-world expertise to every session.
          </p>
        </motion.div>

        {/* Speaker Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {speakers.map((s, i) => (
            <SpeakerCard key={s.name + i} speaker={s} index={i} />
          ))}
        </div>

        {/* Hackathon mentors note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-3 glass-purple rounded-2xl px-6 py-4 border border-purple-200">
            <Users size={15} className="text-purple-500" />
            <span className="font-mono text-purple-600 text-sm">
              Hackathon mentors to be announced · Oct 5–6 at VESIT
            </span>
            <span className="animate-pulse text-purple-400">✦</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
