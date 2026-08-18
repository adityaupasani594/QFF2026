import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Atom, Globe, Zap, Users } from 'lucide-react';
import { sticker01, sticker05 } from '../assets/index.js';

const features = [
  {
    icon: Atom,
    title: 'Quantum Workshops',
    desc: 'Hands-on sessions — from superposition to entanglement. No prior quantum knowledge needed!',
    color: 'bg-purple-100 text-purple-600',
  },
  {
    icon: Globe,
    title: 'Global Community',
    desc: "Part of IBM's worldwide Qiskit Fall Fest initiative happening across 200+ universities globally.",
    color: 'bg-blue-100 text-blue-600',
  },
  {
    icon: Zap,
    title: 'Hackathon',
    desc: 'Compete in quantum challenges, and win IBM Quantum goodies! (Exclusively for VESIT students)',
    color: 'bg-pink-100 text-pink-600',
  },
  {
    icon: Users,
    title: 'Expert Talks',
    desc: 'Learn from quantum experts, IBM Qiskit advocates, and industry leaders pushing the frontier of quantum tech.',
    color: 'bg-indigo-100 text-indigo-600',
  },
];

function FeatureCard({ feature, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const Icon = feature.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="glass-card rounded-3xl p-7 hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 hover:-translate-y-1 group"
    >
      <div className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}>
        <Icon size={22} />
      </div>
      <h3 className="font-display font-bold text-lg text-gray-800 mb-2">{feature.title}</h3>
      <p className="font-body text-sm text-gray-500 leading-relaxed">{feature.desc}</p>
    </motion.div>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="py-24 section-bg-alt">
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
            <span className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
            About the Event
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            What is{' '}
            <span className="gradient-text">Qiskit Fall Fest?</span>
          </h2>
          <p className="font-body text-base md:text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
            Qiskit Fall Fest is IBM's flagship quantum computing event series, brought to campus by student
            communities worldwide. At VESIT, we're making quantum computing{' '}
            <span className="text-purple-600 font-medium">accessible, fun, and exciting</span> for every student.
          </p>
        </motion.div>

        {/* Feature cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
          {features.map((f, i) => (
            <FeatureCard key={f.title} feature={f} index={i} />
          ))}
        </div>

        {/* Banner with birds sticker */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-700 p-10 md:p-14 text-white"
        >
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-white/50"
                style={{
                  width: `${(i + 1) * 80}px`,
                  height: `${(i + 1) * 80}px`,
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                }}
              />
            ))}
          </div>

          <div className="relative z-10 flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <p className="font-mono text-purple-200 text-sm mb-3">✦ Hosted at VESIT, Mumbai</p>
              <h3 className="font-display font-bold text-3xl md:text-4xl mb-4">
                Join the Quantum Revolution
              </h3>
              <p className="font-body text-purple-100 text-base leading-relaxed max-w-xl">
                Whether you're a complete beginner or already know your Hadamard gates from your CNOT gates —
                this event is designed to level up your quantum game.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                {['Beginners Welcome', 'Free Entry', 'Cool Swag'].map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-white/10 border border-white/20 rounded-full text-sm font-medium text-white backdrop-blur-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex-shrink-0">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={sticker01} alt="Qiskit sticker" className="w-48 md:w-56 drop-shadow-2xl" />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
