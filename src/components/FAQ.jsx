import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'Who can participate in Qiskit Fall Fest at VESIT?',
    a: 'Anyone can participate in the online sessions! The offline hackathon is exclusively for VESIT students.',
  },
  {
    q: 'Do I need to know quantum physics or programming?',
    a: 'Not at all! Workshops on Day 1 are beginner-friendly. A basic understanding of Python is helpful for the hackathon, but we\'ll have mentors to guide you throughout.',
  },
  {
    q: 'Is there a registration fee?',
    a: 'Absolutely free! Registration is completely free for all participants.',
  },
  {
    q: 'Can I participate as an individual or do I need a team?',
    a: 'The workshops on Day 1 and 2 are open to all individuals. For the hackathon, teams of 2-4 members are preferred.',
  },
  {
    q: 'What should I bring?',
    a: 'Bring your laptop (with Python installed), and chargers (for your laptop and phone). We\'ll provide a pre-workshop setup guide. Also bring your student ID, and enthusiasm',
  },
  {
    q: 'Will I get a certificate?',
    a: 'Yes! All participants receive a digital certificate from IBM Quantum, while the top performers receive IBM Qiskit swags + certificate from CodeCell++!',
  },
  {
    q: 'What is Qiskit?',
    a: 'Qiskit is an open-source SDK developed by IBM for working with quantum computers. It allows you to write quantum circuits, simulate them, and run them on real IBM Quantum hardware — for free!',
  },
];

function FAQItem({ faq, index }) {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.07 }}
      className="border border-purple-100 rounded-2xl overflow-hidden hover:border-purple-300 transition-colors"
    >
      <button
        id={`faq-btn-${index}`}
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-purple-50/50 transition-colors group"
        aria-expanded={open}
      >
        <span className="font-display font-semibold text-sm md:text-base text-gray-800 pr-4">{faq.q}</span>
        <motion.div
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0 w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 group-hover:bg-purple-200 transition-colors"
        >
          <ChevronDown size={14} />
        </motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <p className="font-body text-sm text-gray-500 leading-relaxed px-5 pb-5 pt-1">
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="faq" className="py-24 section-bg-alt">
      <div className="max-w-3xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-full mb-5 font-mono">
            <HelpCircle size={14} />
            FAQ
          </div>
          <h2 className="font-display font-bold text-4xl md:text-5xl text-gray-800 mb-5">
            Got{' '}
            <span className="gradient-text">Questions?</span>
          </h2>
          <p className="font-body text-base text-gray-500">
            Everything you need to know about Qiskit Fall Fest 2026 at VESIT.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <FAQItem key={faq.q} faq={faq} index={i} />
          ))}
        </div>

        {/* Still have questions */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-10"
        >
          <p className="font-body text-gray-500 mb-4">Still have questions?</p>
          <a
            id="contact-link"
            href="mailto:qiskit@vesit.ves.ac.in"
            className="inline-flex items-center gap-2 px-6 py-3 glass-purple border border-purple-200 rounded-full text-purple-700 font-semibold text-sm hover:border-purple-400 transition-all hover:scale-105"
          >
            ✉️ Contact Us
          </a>
        </motion.div>
      </div>
    </section>
  );
}
