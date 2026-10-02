import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Users, User } from 'lucide-react';

import sharmilaPhoto from './photos/SharmilaSengupta.png';
import adityaPhoto from './photos/AdityaUpasani.png';
import nupurPhoto from './photos/NupurGiri.png';
import vedantPhoto from './photos/VedantMhatre.png';
import ranjanPhoto from './photos/Ranjan.png';
import shravaniPhoto from './photos/Shravani.png';

const committee = [
  {
    name: 'Dr. Nupur Giri',
    role: 'HOD, Computer Engineering',
    org: 'VESIT',
    badge: 'Faculty Leadership',
    color: 'from-slate-700 to-blue-900',
    photo: nupurPhoto,
    initials: 'NG',
  },
  {
    name: 'Dr. Sharmila Sengupta',
    role: 'CodeCell++ IBM Qiskit Committee In-charge',
    org: 'VESIT',
    badge: 'Committee In-charge',
    color: 'from-teal-600 to-cyan-700',
    photo: sharmilaPhoto,
    initials: 'SS',
  },
  {
    name: 'Dr. Ranjan Bala Jain',
    role: 'Quantum Technologies Faculty',
    org: 'VESIT',
    badge: 'Faculty Coordinator',
    color: 'from-amber-600 to-orange-700',
    photo: ranjanPhoto,
    initials: 'RBJ',
  },
  {
    name: 'Aditya Upasani',
    role: 'Qiskit Advocate',
    org: 'IBM / Qiskit Community · VESIT',
    badge: 'Organizer',
    color: 'from-blue-700 to-indigo-800',
    photo: adityaPhoto,
    initials: 'AU',
  },
  {
    name: 'Shravani Kale',
    role: 'Qiskit Advocate',
    org: 'IBM / Qiskit Community · VESIT',
    badge: 'Organizer',
    color: 'from-emerald-600 to-teal-700',
    photo: shravaniPhoto,
    initials: 'SK',
  },
  {
    name: 'Vedant Mhatre',
    role: 'Senior PR Manager',
    org: 'CodeCell++ VESIT',
    badge: 'Senior PR Manager',
    color: 'from-stone-600 to-zinc-700',
    photo: vedantPhoto,
    initials: 'VM',
  },
];

function CommitteeCard({ member, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-card rounded-3xl overflow-hidden hover:shadow-xl hover:shadow-zinc-200/80 transition-all duration-300 hover:-translate-y-2 group flex flex-col"
    >
      {/* Full-bleed photo stretching end to end of the card */}
      <div className={`w-full aspect-square bg-gradient-to-br ${member.color} relative flex items-end justify-center overflow-hidden`}>
        {/* Decorative rings */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          {[1, 2, 3].map((r) => (
            <div
              key={r}
              className="absolute rounded-full border border-white"
              style={{
                width: `${r * 80}px`,
                height: `${r * 80}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>

        {/* Photo stretching end to end or Placeholder Square */}
        {member.photo ? (
          <img
            src={member.photo}
            alt={member.name}
            className="w-full h-full object-cover object-top relative z-10 transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full flex flex-col items-center justify-center relative z-10">
            <div className="w-28 h-28 rounded-2xl bg-white/20 backdrop-blur-sm flex flex-col items-center justify-center text-white border-2 border-dashed border-white/40 shadow-inner">
              <User size={44} strokeWidth={1.4} className="text-white/85 mb-1" />
              <span className="font-display font-bold text-sm tracking-wider text-white">
                {member.initials}
              </span>
            </div>
          </div>
        )}

        {/* Badge */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center z-20">
          <span className="font-mono text-[10px] bg-black/35 backdrop-blur-md text-white px-3 py-1 rounded-full border border-white/20 shadow-sm">
            {member.badge}
          </span>
        </div>
      </div>

      {/* Details */}
      <div className="p-6 flex flex-col flex-1 text-center items-center justify-center">
        <h3 className="font-display font-bold text-lg text-gray-800 mb-1.5 leading-snug">
          {member.name}
        </h3>
        <p className="font-body text-sm text-teal-700 font-semibold mb-2 leading-snug">
          {member.role}
        </p>
        <span className="font-mono text-xs text-gray-400 bg-gray-50 px-3 py-1 rounded-full border border-gray-100">
          {member.org}
        </span>
      </div>
    </motion.div>
  );
}

export default function OrganizingCommittee() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="committee" className="py-24 section-bg-alt">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-slate-100 text-slate-700 text-sm font-semibold px-4 py-2 rounded-full mb-5 font-mono">
            <Users size={14} className="text-slate-600" />
            Organizing Committee
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            Meet the{' '}
            <span className="gradient-text">Organizing Committee</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-xl mx-auto">
            The visionary faculty leadership and student leads from VESIT driving Qiskit Fall Fest 2026.
          </p>
        </motion.div>

        {/* Committee Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {committee.map((member, index) => (
            <CommitteeCard key={member.name} member={member} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
