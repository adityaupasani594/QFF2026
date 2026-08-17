import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Sparkles, CheckCircle2, User, Mail, GraduationCap, BookOpen } from 'lucide-react';
import { qiskitLogo, sticker02 } from '../assets/index.js';

export default function Register() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: '',
    email: '',
    college: '',
    year: '',
    experience: 'none',
    track: 'beginner',
  });

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate API call
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="register" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="quantum-blob absolute w-72 h-72 -top-10 -right-10 opacity-20" />
      <div className="quantum-blob absolute w-60 h-60 bottom-10 -left-10 opacity-20" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
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
            Spots are limited! Register now to join Mumbai's biggest quantum computing event of 2026.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Left: info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-2"
          >
            <div className="glass-purple rounded-3xl p-7 border border-purple-200 h-full">
              <motion.div
                className="w-24 mb-6"
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <img src={qiskitLogo} alt="Qiskit" className="w-16 mx-auto" />
              </motion.div>
              <h3 className="font-display font-bold text-xl text-gray-800 mb-4">What you get:</h3>
              <ul className="space-y-3">
                {[
                  '3-day quantum adventure',
                  'Workshops & hands-on labs',
                  'IBM Quantum access',
                  'Expert mentorship',
                  'Prizes & IBM swag',
                  'Certificate + IBM Badge',
                  'Networking with quantum enthusiasts',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-purple-500 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8 p-4 bg-purple-600 rounded-2xl text-white text-center">
                <p className="font-mono text-xs text-purple-200 mb-1">Registration closes</p>
                <p className="font-display font-bold text-lg">October 10, 2026</p>
              </div>
            </div>
          </motion.div>

          {/* Right: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            {submitted ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-card rounded-3xl p-10 text-center border border-purple-200 h-full flex flex-col items-center justify-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300, delay: 0.2 }}
                  className="w-32 mx-auto mb-6"
                >
                  <img src={sticker02} alt="Registered!" className="w-full" />
                </motion.div>
                <h3 className="font-display font-bold text-2xl text-gray-800 mb-3">You're registered! 🎉</h3>
                <p className="font-body text-gray-500 text-sm mb-6 max-w-sm">
                  Welcome to Qiskit Fall Fest 2026! Check your email for confirmation details. See you at VESIT in October!
                </p>
                <div className="flex gap-3">
                  <a href="https://twitter.com/intent/tweet?text=Just+registered+for+Qiskit+Fall+Fest+2026+@VESIT+%23QiskitFallFest%20%23QuantumComputing"
                    target="_blank" rel="noopener noreferrer"
                    className="px-5 py-2.5 bg-purple-600 text-white text-sm font-semibold rounded-full hover:bg-purple-700 transition-all hover:scale-105"
                  >
                    Share on X 𝕏
                  </a>
                </div>
              </motion.div>
            ) : (
              <form
                id="registration-form"
                onSubmit={handleSubmit}
                className="glass-card rounded-3xl p-8 border border-purple-100 space-y-5"
              >
                {/* Name */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="reg-name"
                      name="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-sm font-body text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="reg-email"
                      name="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-sm font-body text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* College */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    College / University *
                  </label>
                  <div className="relative">
                    <GraduationCap size={16} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400" />
                    <input
                      id="reg-college"
                      name="college"
                      type="text"
                      required
                      value={form.college}
                      onChange={handleChange}
                      placeholder="VESIT, IIT Bombay, ..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-sm font-body text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    />
                  </div>
                </div>

                {/* Year and experience row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Year of Study *
                    </label>
                    <select
                      id="reg-year"
                      name="year"
                      required
                      value={form.year}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-sm font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    >
                      <option value="" disabled>Select year</option>
                      <option value="1">1st Year</option>
                      <option value="2">2nd Year</option>
                      <option value="3">3rd Year</option>
                      <option value="4">4th Year</option>
                      <option value="pg">Postgrad</option>
                    </select>
                  </div>
                  <div>
                    <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                      Track *
                    </label>
                    <select
                      id="reg-track"
                      name="track"
                      value={form.track}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-white/80 text-sm font-body text-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:border-purple-400 transition-all"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                {/* Prior experience */}
                <div>
                  <label className="block font-body text-sm font-medium text-gray-700 mb-1.5">
                    <BookOpen size={14} className="inline mr-1.5" />
                    Quantum Computing Experience
                  </label>
                  <div className="flex gap-3 flex-wrap">
                    {[
                      { value: 'none', label: '🙋 None' },
                      { value: 'little', label: '📚 A little' },
                      { value: 'some', label: '⚛️ Some' },
                      { value: 'experienced', label: '🚀 Experienced' },
                    ].map((opt) => (
                      <label key={opt.value} className="flex items-center">
                        <input
                          type="radio"
                          name="experience"
                          value={opt.value}
                          checked={form.experience === opt.value}
                          onChange={handleChange}
                          className="sr-only"
                        />
                        <span className={`px-3 py-1.5 rounded-full text-xs font-medium cursor-pointer transition-all border ${
                          form.experience === opt.value
                            ? 'bg-purple-600 text-white border-purple-600'
                            : 'bg-white text-gray-600 border-gray-200 hover:border-purple-300'
                        }`}>
                          {opt.label}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Submit */}
                <button
                  id="reg-submit"
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-purple-600 hover:bg-purple-700 text-white font-display font-bold text-base rounded-xl shadow-lg shadow-purple-200 hover:shadow-purple-300 transition-all duration-200 hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                        className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                      />
                      Registering...
                    </>
                  ) : (
                    <>
                      <Sparkles size={18} />
                      Register for Free
                    </>
                  )}
                </button>

                <p className="font-body text-xs text-gray-400 text-center">
                  By registering, you agree to our terms. No spam, ever. 💜
                </p>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
