import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import {
  Clock,
  MapPin,
  Monitor,
  Users,
  Code2,
  Zap,
  Sparkles,
  Cpu,
  Trophy,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';

const sessionList = [
  {
    id: 1,
    day: 'Day 1',
    date: 'Monday, Oct 5',
    time: '6:00 PM IST',
    theme: 'Keynote',
    color: 'from-purple-600 to-indigo-600',
    light: 'bg-purple-50/70 border-purple-200',
    dot: 'bg-purple-600',
    title: 'Quantum 101: Why the Quantum Revolution Matters',
    speaker: 'Ms. Guncha Malik',
    org: 'STSM at IBM',
    icon: Sparkles,
    desc: 'An inspiring keynote on why the quantum revolution matters, fundamental concepts, and what IBM is doing on the frontier of quantum computation.',
  },
  {
    id: 2,
    day: 'Day 1',
    date: 'Monday, Oct 5',
    time: '7:00 PM onwards',
    theme: 'Career Journey',
    color: 'from-indigo-600 to-violet-600',
    light: 'bg-indigo-50/70 border-indigo-200',
    dot: 'bg-indigo-600',
    title: 'From Internship to PPO: Journey into IBM Quantum',
    speaker: 'Alfiya Siddique',
    org: 'IBM Quantum Intern',
    icon: Zap,
    desc: 'Sharing her journey of getting placed in IBM Quantum through an internship and converting it into a Pre-Placement Offer (PPO).',
  },
  {
    id: 3,
    day: 'Day 2',
    date: 'Tuesday, Oct 6',
    time: '7:00 PM IST',
    theme: 'Hands-On',
    color: 'from-violet-600 to-purple-600',
    light: 'bg-violet-50/70 border-violet-200',
    dot: 'bg-violet-600',
    title: 'From Qubits to Code: Your First Quantum Program',
    speaker: 'Aditya Upasani',
    org: 'Qiskit Advocate',
    icon: Code2,
    desc: 'Demystify qubits, superposition, and entanglement. Get hands-on writing and simulating your very first quantum circuits with Qiskit.',
  },
  {
    id: 4,
    day: 'Day 3',
    date: 'Wednesday, Oct 7',
    time: '7:00 PM IST',
    theme: 'QML',
    color: 'from-indigo-600 to-sky-600',
    light: 'bg-sky-50/70 border-sky-200',
    dot: 'bg-sky-600',
    title: 'QML Unleashed: Quantum Meets Machine Learning',
    speaker: 'Aditya Upasani',
    org: 'Qiskit Advocate',
    icon: Cpu,
    desc: 'Explore the powerful intersection of quantum algorithms and AI. Learn how parameterized quantum circuits, quantum kernels, and hybrid models solve complex problems.',
  },
  {
    id: 5,
    day: 'Day 4',
    date: 'Thursday, Oct 8',
    time: '7:00 PM IST',
    theme: 'Applications & QKD',
    color: 'from-fuchsia-600 to-pink-600',
    light: 'bg-fuchsia-50/70 border-fuchsia-200',
    dot: 'bg-fuchsia-600',
    title: 'Beyond Experimentation: Quantum in the Real World',
    speaker: 'Shravani Kale',
    org: 'Qiskit Advocate · VESIT',
    icon: Zap,
    desc: 'Discover practical applications of quantum technologies, Quantum Key Distribution (QKD), security implications, and how quantum is moving from labs to reality.',
  },
  {
    id: 6,
    day: 'Day 4',
    date: 'Thursday, Oct 8',
    time: '7:45 PM onwards',
    theme: 'Logistics & Optimization',
    color: 'from-pink-600 to-rose-600',
    light: 'bg-rose-50/70 border-rose-200',
    dot: 'bg-rose-600',
    title: 'Quantum on the Move: Traffic & Logistics',
    speaker: 'Vedant Mhatre',
    org: 'Senior PR Manager · VESIT',
    icon: MapPin,
    desc: 'Explore how quantum computing and optimization algorithms tackle real-world traffic routing, congestion management, and supply chain logistics.',
  },
];

const hackathon = {
  day: 'The Hackathon',
  date: 'Fri–Sat, Oct 9–10, 2026',
  theme: 'Grand Finale',
  color: 'from-fuchsia-600 via-pink-600 to-rose-600',
  light: 'bg-pink-50/60 border-pink-200',
  dot: 'bg-fuchsia-600',
  mode: 'Offline · VESIT Students Only',
  modeIcon: Users,
  events: [
    {
      time: 'Oct 9 · Morning',
      title: 'Hackathon Kickoff',
      speaker: 'Organizing Committee & Mentors',
      org: 'VESIT Chembur (As a part of Syrus)',
      icon: Zap,
      desc: 'Team up, brainstorm quantum solutions, build circuits, and get dedicated mentor guidance.',
    },
    {
      time: 'Oct 10 · Afternoon',
      title: 'Project Demos & Grand Closing Ceremony',
      speaker: 'Judging Panel',
      org: 'VESIT Chembur',
      icon: Trophy,
      desc: 'Pitch and demonstrate your quantum projects, celebrate top teams, and take home IBM Quantum swag, certificates & prizes!',
    },
  ],
};

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 640) {
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) {
        setItemsPerPage(2);
      } else {
        setItemsPerPage(3);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, sessionList.length - itemsPerPage);

  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex);
    }
  }, [itemsPerPage, maxIndex, currentIndex]);

  const handlePrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, maxIndex));
  };

  return (
    <section id="schedule" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-5 font-mono">
            <Clock size={14} />
            Event Schedule
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            4 Days +{' '}
            <span className="gradient-text">The Hackathon</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-2xl mx-auto">
            Four days of online learning sessions open to everyone, followed by an in-person hackathon
            exclusively for VESIT students. Kicks off{' '}
            <span className="font-semibold text-purple-600">Monday, October 5th at 6 PM</span>.
          </p>
        </motion.div>

        {/* Carousel Controls Bar */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs font-semibold text-purple-700 bg-purple-50 border border-purple-200/80 px-3 py-1.5 rounded-full">
              Showing {currentIndex + 1}–{Math.min(currentIndex + itemsPerPage, sessionList.length)} of {sessionList.length} Sessions
            </span>
          </div>

          {/* Prev / Next Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              aria-label="Previous session"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 shadow-sm transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              aria-label="Next session"
              className="w-10 h-10 rounded-full flex items-center justify-center border border-purple-200 bg-white hover:bg-purple-50 text-purple-700 shadow-sm transition-all active:scale-95 disabled:opacity-30 disabled:pointer-events-none cursor-pointer"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Sessions Carousel */}
        <div className="overflow-hidden py-2 -my-2">
          <motion.div
            className="flex gap-6"
            animate={{
              x: `calc(-${currentIndex} * (${100 / itemsPerPage}% + ${24 / itemsPerPage}px))`,
            }}
            transition={{ type: 'spring', stiffness: 280, damping: 28 }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(e, { offset }) => {
              if (offset.x < -40) {
                handleNext();
              } else if (offset.x > 40) {
                handlePrev();
              }
            }}
          >
            {sessionList.map((session) => {
              const Icon = session.icon;
              return (
                <div
                  key={session.id}
                  className="flex-shrink-0"
                  style={{
                    width: `calc((100% - ${(itemsPerPage - 1) * 24}px) / ${itemsPerPage})`,
                  }}
                >
                  <div className="h-[430px] rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:shadow-purple-100 transition-all duration-300 flex flex-col border border-purple-100/80 bg-white select-none">
                    {/* Header */}
                    <div className={`bg-gradient-to-br ${session.color} p-5 text-white relative overflow-hidden flex-shrink-0 h-32 flex flex-col justify-between`}>
                      <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
                      <div className="flex justify-between items-start relative z-10">
                        <div>
                          <p className="font-mono text-white/80 text-[11px] mb-0.5">{session.date}</p>
                          <h3 className="font-display font-bold text-xl">{session.day}</h3>
                        </div>
                        <span className="px-2.5 py-1 bg-white/20 backdrop-blur-sm rounded-full text-[11px] font-semibold font-mono text-white">
                          {session.theme}
                        </span>
                      </div>
                      {/* Time & Mode */}
                      <div className="flex items-center gap-2 relative z-10">
                        <div className="flex items-center gap-1.5 bg-black/25 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-mono text-white font-medium">
                          <Clock size={11} className="text-white/80" />
                          <span>{session.time}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-white/15 backdrop-blur-sm rounded-full px-2.5 py-1 text-[11px] font-mono text-white/90">
                          <Monitor size={11} className="text-white/80" />
                          <span>Online</span>
                        </div>
                      </div>
                    </div>

                    {/* Content Body - Equal height */}
                    <div className={`${session.light} p-5 flex flex-col flex-1 justify-between`}>
                      <div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className={`w-2 h-2 rounded-full ${session.dot}`} />
                          <span className="font-mono text-[11px] font-semibold text-purple-700 flex items-center gap-1">
                            <Icon size={12} />
                            Live Webinar
                          </span>
                        </div>

                        <h4 className="font-display font-bold text-base text-gray-800 leading-snug mb-2 min-h-[44px] line-clamp-2">
                          {session.title}
                        </h4>

                        <div className="mb-2.5">
                          <p className="font-mono text-xs text-purple-700 font-bold">
                            {session.speaker}
                          </p>
                          <p className="font-mono text-[11px] text-gray-500 font-medium">
                            {session.org}
                          </p>
                        </div>

                        <p className="font-body text-xs text-gray-600 leading-relaxed line-clamp-3">
                          {session.desc}
                        </p>
                      </div>

                      <div className="pt-3 border-t border-purple-200/50 flex items-center justify-between text-[11px] font-mono text-gray-400 mt-2">
                        <span className="text-purple-600 font-semibold">Free Registration ✦</span>
                        <span className="text-gray-400">Session {session.id} of {sessionList.length}</span>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Carousel Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-6">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`h-2.5 transition-all duration-300 rounded-full cursor-pointer ${
                currentIndex === idx ? 'w-8 bg-purple-600' : 'w-2.5 bg-purple-200 hover:bg-purple-300'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Hackathon Spotlight Banner Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-12 rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:shadow-pink-100 transition-all duration-300 border border-pink-200 flex flex-col lg:flex-row"
        >
          {/* Hackathon Left Header */}
          <div className="lg:w-2/5 bg-gradient-to-br from-fuchsia-600 via-pink-600 to-rose-600 p-8 text-white relative overflow-hidden flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2 pointer-events-none" />
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <p className="font-mono text-white/80 text-xs mb-1 font-semibold">{hackathon.date}</p>
                  <h3 className="font-display font-black text-3xl md:text-4xl text-white tracking-tight">The Hackathon</h3>
                </div>
                <span className="px-3.5 py-1.5 bg-white/20 backdrop-blur-md rounded-full text-xs font-semibold font-mono text-white">
                  {hackathon.theme}
                </span>
              </div>
              <p className="font-body text-white/90 text-sm mb-6 leading-relaxed">
                The ultimate 2-day quantum showdown held in-person at VESIT Chembur as part of Syrus. Put your skills to the test and build real quantum solutions.
              </p>
            </div>
            <div className="relative z-10 flex flex-wrap gap-2 items-center">
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-md rounded-full px-3.5 py-1.5 text-white">
                <Users size={13} className="text-white" />
                <span className="font-mono text-xs font-medium">{hackathon.mode}</span>
              </div>
              <div className="flex items-center gap-2 bg-black/20 backdrop-blur-md rounded-full px-3.5 py-1.5 text-white">
                <MapPin size={13} className="text-pink-200" />
                <span className="font-mono text-xs">VESIT, Chembur</span>
              </div>
            </div>
          </div>

          {/* Hackathon Right Milestones */}
          <div className="lg:w-3/5 bg-pink-50/60 p-6 md:p-8 flex flex-col justify-center gap-6">
            {hackathon.events.map((event, ei) => {
              const Icon = event.icon;
              return (
                <div key={event.title} className="flex gap-4 items-start group">
                  <div className="flex flex-col items-center gap-1 flex-shrink-0 mt-1.5">
                    <div className="w-3 h-3 rounded-full bg-fuchsia-600 flex-shrink-0 ring-4 ring-fuchsia-100" />
                    {ei < hackathon.events.length - 1 && (
                      <div className="w-0.5 h-14 bg-fuchsia-300" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon size={13} className="text-fuchsia-600 flex-shrink-0" />
                      <span className="font-mono text-xs font-semibold text-fuchsia-700 bg-fuchsia-100 px-2.5 py-0.5 rounded-full">
                        {event.time}
                      </span>
                    </div>
                    <h4 className="font-display font-bold text-base md:text-lg text-gray-800 leading-snug mb-1">
                      {event.title}
                    </h4>
                    {event.speaker && (
                      <p className="font-mono text-xs text-slate-700 font-semibold mb-1.5">
                        {event.speaker}
                        {event.org && <span className="text-gray-400 font-normal"> · {event.org}</span>}
                      </p>
                    )}
                    <p className="font-body text-xs md:text-sm text-gray-600 leading-relaxed">{event.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Venue / Mode info cards */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Online sessions */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-purple rounded-3xl p-6 flex gap-5 items-start border border-purple-200"
          >
            <div className="w-12 h-12 bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <Monitor size={22} className="text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-gray-800 mb-1">Online Sessions</h4>
              <p className="font-body text-sm text-gray-600">
                October 5–8 sessions are online and open to <span className="font-semibold text-purple-600">everyone</span>.
                Register to get the stream links and workshop notebooks.
              </p>
            </div>
          </motion.div>

          {/* Offline hackathon */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-3xl p-6 flex gap-5 items-start border border-pink-200 bg-pink-50"
          >
            <div className="w-12 h-12 bg-fuchsia-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <MapPin size={22} className="text-white" />
            </div>
            <div>
              <h4 className="font-display font-bold text-lg text-gray-800 mb-1">In-Person Hackathon</h4>
              <p className="font-body text-sm text-gray-600">
                October 9–10 Hackathon is offline at VESIT, Chembur (As a part of Syrus) and{' '}
                <span className="font-semibold text-fuchsia-600">exclusively for VESIT students</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
