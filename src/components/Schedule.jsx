import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Clock, MapPin, Monitor, Users, Code2, Zap } from 'lucide-react';

const days = [
  {
    day: 'Day 1',
    date: 'Thu, Oct 2, 2026',
    theme: 'Learn',
    color: 'from-purple-500 to-violet-600',
    light: 'bg-purple-50 border-purple-200',
    dot: 'bg-purple-500',
    mode: 'Online · Open to All',
    modeIcon: Monitor,
    events: [
      {
        time: '10:00 AM',
        title: 'Intro to Quantum Computing & Why You Should Learn It',
        speaker: 'IBM Quantum Employee',
        org: 'IBM Quantum',
        icon: Zap,
        desc: 'A compelling deep-dive into what quantum computing is, why it matters, and how to get started on your journey.',
      },
      {
        time: 'TBD',
        title: 'Basics of Quantum Computing',
        speaker: 'Aditya Upasani',
        org: 'Qiskit Advocate',
        icon: Code2,
        desc: 'Qubits, superposition, entanglement, and quantum gates — explained from the ground up.',
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'Fri, Oct 3, 2026',
    theme: 'Build',
    color: 'from-violet-500 to-fuchsia-600',
    light: 'bg-violet-50 border-violet-200',
    dot: 'bg-violet-500',
    mode: 'Online · Open to All',
    modeIcon: Monitor,
    events: [
      {
        time: '10:00 AM',
        title: 'Quantum Applications & QKD',
        speaker: 'Shravani Kale',
        org: 'Qiskit Advocate',
        icon: Zap,
        desc: 'Real-world quantum applications including Quantum Key Distribution and the future of secure communications.',
      },
      {
        time: 'TBD',
        title: 'Getting Started with Qiskit',
        speaker: 'Dr. Ranjan Bala Jain',
        org: 'Quantum Technologies Faculty',
        icon: Code2,
        desc: 'Hands-on session building and running your first quantum circuits using the Qiskit SDK.',
      },
    ],
  },
  {
    day: 'Hackathon',
    date: 'Sun–Mon, Oct 5–6, 2026',
    theme: 'Win',
    color: 'from-fuchsia-500 to-pink-600',
    light: 'bg-pink-50 border-pink-200',
    dot: 'bg-fuchsia-500',
    mode: 'Offline · VESIT Students Only',
    modeIcon: Users,
    events: [
      {
        time: 'Oct 5 · Morning',
        title: 'Hackathon Kickoff',
        speaker: null,
        org: null,
        icon: Zap,
        desc: 'Team formation, problem statements revealed, and hacking begins! Mentors on standby.',
      },
      {
        time: 'Oct 6 · Afternoon',
        title: 'Project Demos & Closing',
        speaker: null,
        org: null,
        icon: Code2,
        desc: 'Final submissions, presentations to judges, and the grand closing ceremony.',
      },
    ],
  },
];

export default function Schedule() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="schedule" className="py-24 bg-white">
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
            <Clock size={14} />
            Event Schedule
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            4 Sessions +{' '}
            <span className="gradient-text">The Hackathon</span>
          </h2>
          <p className="font-body text-base text-gray-500 max-w-2xl mx-auto">
            Two days of online learning sessions open to everyone, followed by an in-person hackathon
            exclusively for VESIT students. Kicks off{' '}
            <span className="font-semibold text-purple-600">October 2nd at 10 AM</span>.
          </p>
        </motion.div>

        {/* Day Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {days.map((day, di) => {
            const ModeIcon = day.modeIcon;
            return (
              <motion.div
                key={day.day}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: di * 0.15 }}
                className="rounded-3xl overflow-hidden shadow-sm hover:shadow-lg hover:shadow-purple-100 transition-all duration-300 flex flex-col"
              >
                {/* Day header */}
                <div className={`bg-gradient-to-br ${day.color} p-6 text-white relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />
                  <div className="relative z-10">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <p className="font-mono text-white/70 text-xs mb-1">{day.date}</p>
                        <h3 className="font-display font-bold text-2xl">{day.day}</h3>
                      </div>
                      <span className="px-3 py-1 bg-white/20 rounded-full text-xs font-semibold font-mono">
                        {day.theme}
                      </span>
                    </div>
                    {/* Mode badge */}
                    <div className="flex items-center gap-2 bg-white/15 backdrop-blur-sm rounded-full px-3 py-1.5 w-fit">
                      <ModeIcon size={11} className="text-white/80" />
                      <span className="font-mono text-[10px] text-white/90">{day.mode}</span>
                    </div>
                  </div>
                </div>

                {/* Timeline events */}
                <div className={`${day.light} border p-5 flex flex-col flex-1 gap-5`}>
                  {day.events.map((event, ei) => {
                    const Icon = event.icon;
                    return (
                      <motion.div
                        key={event.title}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: di * 0.1 + ei * 0.1 }}
                        className="flex gap-4 items-start group flex-1"
                      >
                        <div className="flex flex-col items-center gap-1 flex-shrink-0 mt-1.5">
                          <div className={`w-2.5 h-2.5 rounded-full ${day.dot} flex-shrink-0`} />
                          {ei < day.events.length - 1 && (
                            <div className={`w-0.5 h-10 ${day.dot} opacity-25`} />
                          )}
                        </div>
                        <div className="pb-1 flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <Icon size={11} className="text-gray-400 flex-shrink-0" />
                            <span className="font-mono text-[10px] text-gray-400">{event.time}</span>
                          </div>
                          <h4 className="font-display font-semibold text-sm text-gray-800 leading-snug mb-1">
                            {event.title}
                          </h4>
                          {event.speaker && (
                            <p className="font-mono text-[10px] text-purple-600 font-semibold mb-1">
                              {event.speaker}
                              {event.org && (
                                <span className="text-gray-400 font-normal"> · {event.org}</span>
                              )}
                            </p>
                          )}
                          <p className="font-body text-xs text-gray-500 leading-relaxed">{event.desc}</p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Venue / Mode info cards */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
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
                October 2 & 3 sessions are online and open to <span className="font-semibold text-purple-600">everyone</span>.
                Register to get the link.
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
                October 5–6 Hackathon is offline at VESIT, Chembur (As a part of Syrus) and{' '}
                <span className="font-semibold text-fuchsia-600">exclusively for VESIT students</span>.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
