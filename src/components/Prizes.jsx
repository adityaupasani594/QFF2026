import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Trophy, Star, Award, Gift } from 'lucide-react';

const prizes = [
  {
    rank: '🥇 1st Place',
    title: 'Quantum Champion',
    prize: '₹25,000 + IBM Swag',
    perks: ['IBM Quantum Credits', 'Certificate of Excellence', 'Exclusive Merchandise', 'LinkedIn Feature'],
    color: 'from-yellow-400 to-orange-400',
    bgLight: 'bg-yellow-50',
    border: 'border-yellow-200',
    icon: Trophy,
    size: 'lg:scale-110',
  },
  {
    rank: '🥈 2nd Place',
    title: 'Quantum Innovator',
    prize: '₹15,000 + Swag',
    perks: ['IBM Quantum Credits', 'Certificate', 'Merchandise'],
    color: 'from-gray-400 to-slate-500',
    bgLight: 'bg-gray-50',
    border: 'border-gray-200',
    icon: Award,
    size: '',
  },
  {
    rank: '🥉 3rd Place',
    title: 'Quantum Builder',
    prize: '₹10,000 + Swag',
    perks: ['IBM Quantum Credits', 'Certificate', 'Merchandise'],
    color: 'from-orange-400 to-amber-500',
    bgLight: 'bg-orange-50',
    border: 'border-orange-200',
    icon: Star,
    size: '',
  },
];

const otherPrizes = [
  { label: 'Best Beginner Team', value: '₹5,000 + Certificate' },
  { label: 'Most Creative Solution', value: '₹5,000 + Certificate' },
  { label: 'Best Quantum ML Project', value: '₹5,000 + Certificate' },
  { label: 'All Participants', value: 'Participation Certificate + IBM Badge' },
];

export default function Prizes() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="prizes" className="py-24 bg-white overflow-hidden">
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
            <Trophy size={14} />
            Prizes & Rewards
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            Win Big at{' '}
            <span className="gradient-text">Qiskit Fall Fest</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-xl mx-auto">
            Over <span className="text-purple-600 font-bold">₹55,000+</span> in prizes, IBM Quantum credits, exclusive swag, and recognition from the global quantum community.
          </p>
        </motion.div>

        {/* Podium layout */}
        <div className="flex flex-col lg:flex-row items-end justify-center gap-6 mb-16">
          {/* 2nd Place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`w-full lg:w-80 rounded-3xl overflow-hidden border ${prizes[1].border} ${prizes[1].bgLight} shadow-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className={`h-24 bg-gradient-to-br ${prizes[1].color} flex items-center justify-center`}>
              <span className="font-display text-5xl">🥈</span>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-gray-400 mb-1">{prizes[1].rank}</p>
              <h3 className="font-display font-bold text-xl text-gray-800">{prizes[1].title}</h3>
              <p className="font-display font-black text-2xl text-gray-700 mt-1 mb-4">{prizes[1].prize}</p>
              <ul className="space-y-1">
                {prizes[1].perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 1st Place - elevated */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0 }}
            className="w-full lg:w-80 rounded-3xl overflow-hidden border border-yellow-200 shadow-xl shadow-yellow-100 hover:shadow-2xl hover:shadow-yellow-100 transition-all duration-300 z-10"
          >
            <div className={`h-32 bg-gradient-to-br ${prizes[0].color} flex items-center justify-center relative overflow-hidden`}>
              <div className="absolute inset-0 opacity-20">
                {[1, 2].map((r) => (
                  <div key={r} className="absolute rounded-full border border-white" style={{ width: `${r * 100}px`, height: `${r * 100}px`, top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                ))}
              </div>
              <span className="font-display text-6xl relative z-10">🥇</span>
            </div>
            <div className="p-6 bg-yellow-50">
              <p className="font-mono text-xs text-gray-400 mb-1">{prizes[0].rank}</p>
              <h3 className="font-display font-bold text-2xl text-gray-800">{prizes[0].title}</h3>
              <p className="font-display font-black text-3xl text-yellow-600 mt-1 mb-4">{prizes[0].prize}</p>
              <ul className="space-y-1.5">
                {prizes[0].perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* 3rd Place */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`w-full lg:w-80 rounded-3xl overflow-hidden border ${prizes[2].border} ${prizes[2].bgLight} shadow-sm hover:shadow-lg transition-all duration-300`}
          >
            <div className={`h-24 bg-gradient-to-br ${prizes[2].color} flex items-center justify-center`}>
              <span className="font-display text-5xl">🥉</span>
            </div>
            <div className="p-6">
              <p className="font-mono text-xs text-gray-400 mb-1">{prizes[2].rank}</p>
              <h3 className="font-display font-bold text-xl text-gray-800">{prizes[2].title}</h3>
              <p className="font-display font-black text-2xl text-orange-600 mt-1 mb-4">{prizes[2].prize}</p>
              <ul className="space-y-1">
                {prizes[2].perks.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-sm text-gray-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange-400" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>

        {/* Other prizes */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6 }}
          className="glass-purple rounded-3xl p-8 border border-purple-200"
        >
          <div className="flex items-center gap-3 mb-6">
            <Gift size={20} className="text-purple-600" />
            <h3 className="font-display font-bold text-xl text-gray-800">Special Category Prizes</h3>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {otherPrizes.map((p, i) => (
              <motion.div
                key={p.label}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="flex justify-between items-center bg-white/60 rounded-2xl px-5 py-3"
              >
                <span className="font-body text-sm text-gray-700">{p.label}</span>
                <span className="font-display font-bold text-sm text-purple-700">{p.value}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
