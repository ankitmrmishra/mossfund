'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import Container from './Container';
import { Button } from '@/components/ui/button';
import { Coins, GitBranch } from 'lucide-react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section id="cta" className="py-32 bg-foreground text-background">
      <Container>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto text-center space-y-8"
        >
          <div className="font-display text-8xl text-white/20 leading-none mb-4">06</div>
          
          <h2 className="font-heading text-4xl md:text-5xl text-background leading-tight">
            Start building the
            <br />
            future of OSS funding.
          </h2>

          <p className="font-body text-lg text-white/60 max-w-xl mx-auto">
            Whether you're a developer who believes in open source, or a maintainer who
            deserves to be paid — there's a place for you in Mossfund.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
              <Coins className="w-4 h-4" />
              Stake FUND tokens
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white/80 hover:bg-white/5 hover:text-white">
              <GitBranch className="w-4 h-4" />
              Register your repo
            </Button>
          </div>

          <p className="font-body text-xs text-white/40 tracking-wide pt-8">
            47 repos funded · 12,400 stakers · $300K streamed
          </p>
        </motion.div>
      </Container>
    </section>
  );
}
