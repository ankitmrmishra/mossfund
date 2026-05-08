'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';

/**
 * PhotoSection Component
 * 
 * A human moment in the landing page - high-quality photo of developers
 * collaborating with overlays and scroll-triggered text reveal.
 */
export default function PhotoSection() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === 'undefined') return;

    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);

      if (overlayRef.current) {
        gsap.to(overlayRef.current, {
          opacity: 0.6,
          scrollTrigger: {
            trigger: overlayRef.current,
            start: 'top center',
            end: 'bottom top',
            scrub: true,
          }
        });
      }
    });
  }, []);

  return (
    <section className="relative w-full h-[50vh] md:h-[60vh] overflow-hidden">
      {/* Background Image */}
      <Image
        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1800&q=80"
        alt="Open source contributors working together"
        fill
        className="object-cover"
        priority={false}
      />

      {/* Dark overlay */}
      <div 
        ref={overlayRef}
        className="absolute inset-0 z-10 bg-foreground/90 transition-opacity duration-300"
      />

      {/* Green tint overlay */}
      <div className="absolute inset-0 z-10 bg-accent/10 mix-blend-multiply" />

      {/* Centered text */}
      <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-6xl text-white leading-tight">
            Open source is a
            <br />
            human endeavor.
          </h2>
          <p className="font-body text-lg text-white/60 mt-4 max-w-md mx-auto">
            Behind every repo is a person. Mossfund makes sure they can keep doing what they love.
          </p>
        </div>
      </div>
    </section>
  );
}
