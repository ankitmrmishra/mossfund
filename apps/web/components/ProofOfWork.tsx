'use client';

import { useEffect, useRef } from 'react';
import Container from './Container';

const metrics = [
  { value: 847, label: 'commits', sublabel: 'last 90 days' },
  { value: 231, label: 'PRs merged', sublabel: 'avg close: 3.2d' },
  { value: 14200, label: 'stars', sublabel: '+340 this epoch' },
  { value: 92, label: 'open issues', sublabel: '67% response rate' },
];

const explanations = [
  {
    number: '01',
    heading: 'How GitHub data is fetched',
    body: 'Python pipeline, GitHub REST API, metrics normalized',
  },
  {
    number: '02',
    heading: 'How it\'s hashed on-chain',
    body: 'SHA256 → stored in repo PDA on Solana devnet',
  },
  {
    number: '03',
    heading: 'How voters use it',
    body: 'PoW score weights the repo\'s visibility in the voting interface',
  },
];

export default function ProofOfWork() {
  const metricsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      if (metricsRef.current) {
        const metricElements = metricsRef.current.querySelectorAll('.metric-value');
        
        metricElements.forEach((el, idx) => {
          const target = metrics[idx].value;
          gsap.fromTo(
            el,
            { textContent: 0 },
            {
              textContent: target,
              duration: 1.5,
              ease: 'power2.out',
              snap: { textContent: 1 },
              scrollTrigger: {
                trigger: metricsRef.current,
                start: 'top 80%',
              },
            }
          );
        });
      }
    });
  }, []);

  return (
    <section className="py-24 bg-accent-light">
      <Container>
        <div className="mb-16">
          <div className="font-display text-8xl text-muted/20 leading-none mb-4">04</div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
            Show your work.
            <br />
            Get paid for it.
          </h2>
          <p className="font-body text-lg text-muted mt-4 max-w-2xl">
            Maintainers don\'t write grant applications. They submit their GitHub activity.
            Our pipeline hashes it on-chain. Voters see the truth.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left: PoW Dashboard Card */}
          <div className="bg-foreground text-background rounded-2xl p-8 space-y-6">
            <div>
              <h3 className="font-heading text-xl text-background mb-1">curl/curl</h3>
              <p className="font-body text-sm text-white/60">Proof of Work · Epoch 14</p>
            </div>

            <div ref={metricsRef} className="grid grid-cols-2 gap-6">
              {metrics.map((metric, idx) => (
                <div key={idx} className="space-y-1">
                  <div className="font-heading text-3xl text-background">
                    <span className="metric-value">{metric.value}</span>{' '}
                    <span className="text-lg">{metric.label}</span>
                  </div>
                  <p className="font-body text-xs text-white/50">{metric.sublabel}</p>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-white/10">
              <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-3 py-1.5">
                <span className="font-body text-xs text-background">
                  PoW Hash: 7xKf...9mNp
                </span>
                <span className="text-accent">✓</span>
                <span className="font-body text-xs text-background/80">
                  Verified on-chain
                </span>
              </div>
            </div>
          </div>

          {/* Right: Explanation List */}
          <div className="space-y-8">
            {explanations.map((item) => (
              <div key={item.number} className="flex gap-6">
                <div className="font-display text-5xl text-muted/20 leading-none">
                  {item.number}
                </div>
                <div className="flex-1 space-y-2">
                  <h4 className="font-heading text-lg text-foreground">{item.heading}</h4>
                  <p className="font-body text-sm text-muted">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
