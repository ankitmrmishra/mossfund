'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import Container from './Container';
import { FAKE_REPOS, EPOCH_END_TIMESTAMP, TREASURY_DATA, TOTAL_TREASURY } from '@/lib/constants';

export default function BentoGrid() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const [countdown, setCountdown] = useState({ days: 11, hours: 4, minutes: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      const now = Date.now();
      const diff = EPOCH_END_TIMESTAMP - now;
      
      if (diff > 0) {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        setCountdown({ days, hours, minutes });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Stream tickers
  const tickerRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const streamValues = useRef(FAKE_REPOS.slice(0, 4).map(r => r.streamRate));

  useEffect(() => {
    if (typeof window === 'undefined') return;

    import('gsap').then((gsapModule) => {
      const gsap = gsapModule.default || gsapModule;

      const updateTickers = () => {
        streamValues.current = streamValues.current.map((val, idx) => {
          const newVal = val + 0.000001;
          if (tickerRefs.current[idx]) {
            tickerRefs.current[idx]!.textContent = newVal.toFixed(6);
          }
          return newVal;
        });
      };

      gsap.ticker.add(updateTickers);

      return () => {
        gsap.ticker.remove(updateTickers);
      };
    });
  }, []);

  // Vote bars animation
  const voteBarsRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (voteBarsRef.current) {
        const bars = voteBarsRef.current.querySelectorAll('.vote-bar');
        bars.forEach((bar) => {
          const width = bar.getAttribute('data-width') || '0%';
          gsap.fromTo(
            bar,
            { width: '0%' },
            {
              width: width,
              duration: 0.8,
              ease: 'power2.out',
              scrollTrigger: {
                trigger: voteBarsRef.current,
                start: 'top 80%',
              },
            }
          );
        });
      }
    });
  }, []);

  // Treasury bar animation
  const treasuryRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (treasuryRef.current) {
        const segments = treasuryRef.current.querySelectorAll('.treasury-segment');
        gsap.fromTo(
          segments,
          { width: '0%' },
          {
            width: (_i: number, el: Element) => el.getAttribute('data-width') || '0%',
            duration: 0.6,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: treasuryRef.current,
              start: 'top 80%',
            },
          }
        );
      }
    });
  }, []);

  const cells = [
    // Cell 1: Stream Clock
    <motion.div
      key="stream-clock"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card-bg border border-border rounded-2xl p-6 md:col-span-2"
    >
      <h3 className="font-heading text-xl text-foreground mb-4">Live Funding Streams</h3>
      <div className="space-y-3">
        {FAKE_REPOS.slice(0, 4).map((repo, idx) => (
          <div key={repo.name} className="flex items-center justify-between font-body text-sm">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-accent rounded-full animate-pulse-scale" />
              <span className="text-foreground">{repo.name}</span>
            </div>
            <span className="text-muted tabular-nums">
              <span ref={(el) => { tickerRefs.current[idx] = el; }}>
                {repo.streamRate.toFixed(6)}
              </span>{' '}
              USDC/s
            </span>
          </div>
        ))}
      </div>
      <p className="font-body text-xs text-muted mt-4 pt-4 border-t border-border">
        47 streams active · epoch closes in 11d 4h
      </p>
    </motion.div>,

    // Cell 2: Epoch Countdown
    <motion.div
      key="epoch-countdown"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card-bg border border-border rounded-2xl p-6"
    >
      <h3 className="font-heading text-lg text-foreground mb-4">Next Epoch</h3>
      <div className="space-y-2">
        <div>
          <div className="font-display text-4xl text-foreground">{countdown.days}</div>
          <div className="font-body text-xs text-muted">Days</div>
        </div>
        <div>
          <div className="font-display text-4xl text-foreground">{countdown.hours}</div>
          <div className="font-body text-xs text-muted">Hours</div>
        </div>
        <div>
          <div className="font-display text-4xl text-foreground">{countdown.minutes}</div>
          <div className="font-body text-xs text-muted">Minutes</div>
        </div>
      </div>
      <div className="mt-4 h-1 bg-border rounded-full overflow-hidden">
        <div className="h-full bg-accent" style={{ width: '73%' }} />
      </div>
    </motion.div>,

    // Cell 3: Quadratic Curve
    <motion.div
      key="quad-curve"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card-bg border border-border rounded-2xl p-6"
    >
      <h3 className="font-heading text-lg text-foreground mb-4">Your Vote Weight</h3>
      <svg viewBox="0 0 200 120" className="w-full h-24 mb-4">
        <path
          d="M 10 110 Q 50 70, 100 50 T 190 10"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="text-accent"
        />
        <circle cx="100" cy="50" r="4" fill="currentColor" className="text-accent" />
      </svg>
      <p className="font-body text-xs text-muted text-center mb-2">√ of tokens = votes</p>
      <p className="font-body text-sm text-muted">
        More tokens, diminishing extra power. 100 tokens = 10 votes. 10,000 tokens = 100
        votes.
      </p>
    </motion.div>,

    // Cell 4: Repo Cards
    <motion.div
      key="repo-cards"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card-bg border border-border rounded-2xl p-6 md:col-span-2"
      ref={voteBarsRef}
    >
      <h3 className="font-heading text-lg text-foreground mb-4">Trending Repos This Epoch</h3>
      <div className="space-y-4">
        {[
          { name: 'babel/babel', votes: 68, commits: 48 },
          { name: 'vitejs/vite', votes: 82, commits: 67 },
          { name: 'prisma/prisma', votes: 54, commits: 39 },
        ].map((repo) => (
          <div key={repo.name} className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-heading text-sm text-foreground">{repo.name}</span>
              <span className="font-body text-xs text-muted bg-accent-light px-2 py-0.5 rounded">
                {repo.commits} commits/wk
              </span>
            </div>
            <div className="h-2 bg-border rounded-full overflow-hidden">
              <div
                className="vote-bar h-full bg-accent rounded-full"
                data-width={`${repo.votes}%`}
              />
            </div>
          </div>
        ))}
      </div>
    </motion.div>,

    // Cell 5: Treasury Bar
    <motion.div
      key="treasury"
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
      className="bg-card-bg border border-border rounded-2xl p-6 md:col-span-3"
      ref={treasuryRef}
    >
      <h3 className="font-heading text-xl text-foreground mb-4">Treasury Health</h3>
      <div className="h-8 bg-border rounded-full overflow-hidden flex">
        <div
          className="treasury-segment bg-accent"
          data-width="60%"
        />
        <div
          className="treasury-segment bg-stream"
          data-width="25%"
        />
        <div
          className="treasury-segment bg-muted/30"
          data-width="15%"
        />
      </div>
      <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-4 font-body text-sm">
        <div>
          <span className="text-muted">Active Streams: </span>
          <span className="text-foreground font-medium">
            {isMounted ? TREASURY_DATA.activeStreams.toLocaleString() : TREASURY_DATA.activeStreams} USDC
          </span>
        </div>
        <div>
          <span className="text-muted">Epoch Reserve: </span>
          <span className="text-foreground font-medium">
            {isMounted ? TREASURY_DATA.epochReserve.toLocaleString() : TREASURY_DATA.epochReserve} USDC
          </span>
        </div>
        <div>
          <span className="text-muted">Overhead: </span>
          <span className="text-foreground font-medium">
            {isMounted ? TREASURY_DATA.overhead.toLocaleString() : TREASURY_DATA.overhead} USDC
          </span>
        </div>
      </div>
    </motion.div>,
  ];

  return (
    <section id="bento" className="py-24 bg-background">
      <Container>
        <div className="text-center mb-16">
          <div className="font-display text-8xl text-muted/20 leading-none mb-4">03</div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
            Everything transparent.
            <br />
            Nothing hidden.
          </h2>
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cells}
        </div>
      </Container>
    </section>
  );
}
