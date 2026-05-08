'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from './Container';

const cards = [
  {
    title: 'Stake FUND',
    body: 'Lock tokens for 7 to 90 days. Receive vFUND — voting power that grows with your commitment. The longer you stake, the stronger your voice.',
    footer: 'Powered by SPL Token Program',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="14" y="20" width="20" height="16" rx="2" />
        <path d="M18 20V16a6 6 0 0112 0v4" />
      </svg>
    ),
  },
  {
    title: 'Vote Quadratically',
    body: 'Spread your vFUND across repos you care about. Quadratic weighting means a single whale can\'t dominate. Every voice curves the outcome.',
    footer: 'Anti-Sybil on-chain',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="12" y="28" width="6" height="8" />
        <rect x="21" y="18" width="6" height="18" />
        <rect x="30" y="24" width="6" height="12" />
      </svg>
    ),
  },
  {
    title: 'Stream Per Second',
    body: 'When each epoch closes, Streamflow opens a continuous payment stream to every funded repo. Maintainers claim tokens in real time — no invoices, no waiting.',
    footer: 'Streamflow SDK · Solana',
    icon: (
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M8 24h32" />
        <circle cx="14" cy="24" r="2" fill="currentColor">
          <animate attributeName="cx" from="14" to="34" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="22" cy="24" r="2" fill="currentColor">
          <animate attributeName="cx" from="22" to="42" dur="2s" repeatCount="indefinite" />
        </circle>
        <circle cx="30" cy="24" r="2" fill="currentColor">
          <animate attributeName="cx" from="30" to="50" dur="2s" repeatCount="indefinite" />
        </circle>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="how-it-works" className="py-24 bg-foreground text-background">
      <Container>
        <div className="text-center mb-16">
          <div className="font-display text-8xl text-white/20 leading-none mb-4">02</div>
          <h2 className="font-heading text-4xl md:text-5xl text-background leading-tight">
            Three primitives.
            <br />
            One flywheel.
          </h2>
          <p className="font-body text-lg text-white/50 mt-4 max-w-2xl mx-auto">
            Stake your tokens, vote on what matters, and watch capital flow to the builders
            who deserve it.
          </p>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {cards.map((card, idx) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -4 }}
              className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4"
            >
              <div className="text-white/80">{card.icon}</div>
              <h3 className="font-heading text-2xl text-background">{card.title}</h3>
              <p className="font-body text-sm text-white/70 leading-relaxed">{card.body}</p>
              <p className="font-body text-xs text-white/30 pt-4 border-t border-white/10">
                {card.footer}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
