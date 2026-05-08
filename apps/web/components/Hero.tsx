"use client";

import { useEffect, useRef } from "react";
import Container from "./Container";
import { TOTAL_ACTIVE_REPOS } from "@/lib/constants";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  const h1Ref = useRef<HTMLHeadingElement>(null);
  const tickerRef = useRef<HTMLSpanElement>(null);
  const overlineRef = useRef<HTMLParagraphElement>(null);
  const subheadRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    import("gsap").then((gsapModule) => {
      const gsap = gsapModule.default || gsapModule;

      // Overline animation
      if (overlineRef.current) {
        gsap.fromTo(
          overlineRef.current,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 0.2, ease: "power2.out" },
        );
      }

      // Animate hero heading words with mask reveal
      if (h1Ref.current) {
        const words = h1Ref.current.querySelectorAll(".word-wrapper");
        gsap.fromTo(
          words,
          { y: 60, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.7,
            stagger: 0.08,
            delay: 0.4,
            ease: "power3.out",
          },
        );
      }

      // Subheading animation
      if (subheadRef.current) {
        gsap.fromTo(
          subheadRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, delay: 1.0, ease: "power2.out" },
        );
      }

      // CTA buttons animation
      if (ctaRef.current) {
        gsap.fromTo(
          ctaRef.current.children,
          { y: 15, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            delay: 1.3,
            stagger: 0.1,
            ease: "power2.out",
          },
        );
      }

      // Live ticker pill animation
      if (pillRef.current) {
        gsap.fromTo(
          pillRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.6, delay: 1.6, ease: "power2.out" },
        );
      }

      // SVG animation
      if (svgRef.current) {
        gsap.fromTo(
          svgRef.current,
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.8, delay: 0.6, ease: "power2.out" },
        );
      }

      // Live ticker animation
      let streamValue = 0.2847;
      const updateTicker = () => {
        streamValue += 0.00001;
        if (tickerRef.current) {
          tickerRef.current.textContent = streamValue.toFixed(4);
        }
      };

      gsap.ticker.add(updateTicker);

      return () => {
        gsap.ticker.remove(updateTicker);
      };
    });
  }, []);

  return (
    <section className="relative max-h-max py-20 flex flex-col justify-start md:justify-center overflow-hidden bg-background">
      <Container>
        <div className="flex flex-col  lg:flex-row items-center  lg:gap-16 relative z-10">
          {/* Mobile: SVG on top */}

          {/* Left: Content */}
          <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
            {/* Overline */}
            <p
              ref={overlineRef}
              className="font-body text-xs tracking-[0.2em] uppercase text-muted"
            >
              Solana · Quadratic Voting · Real-Time Streaming
            </p>

            {/* Hero Heading with word wrappers for mask reveal */}
            <h1
              ref={h1Ref}
              className="font-display text-5xl md:text-5xl lg:text-6xl xl:text-[70px] leading-[0.9] text-foreground"
            >
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">Fund</span>
              </span>{" "}
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">the</span>
              </span>{" "}
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">code</span>
              </span>
              <br />
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">that</span>
              </span>{" "}
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">runs</span>
              </span>{" "}
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">the</span>
              </span>{" "}
              <span className="word-wrapper inline-block overflow-hidden">
                <span className="word-inner inline-block">world.</span>
              </span>
            </h1>

            {/* Subheading */}
            <p
              ref={subheadRef}
              className="font-body text-lg md:text-xl text-muted max-w-[540px]"
            >
              Mossfund routes community capital to the open-source projects that
              keep the internet alive — transparently, on-chain, per second.
            </p>

            {/* CTA Buttons */}
            <div ref={ctaRef} className="flex flex-row gap-3 mt-8">
              <motion.button
                whileTap={{ scale: 0.98 }}
                className="bg-accent text-white rounded-full px-8 py-4 font-body text-sm hover:bg-accent/90 hover:scale-[1.02] transition-all z-10"
              >
                Start Staking →
              </motion.button>
              <button className="bg-transparent border border-border text-foreground rounded-full px-8 py-4 font-body text-sm hover:bg-foreground/5 transition-colors z-10">
                Explore Repos
              </button>
            </div>

            {/* Live Stream Ticker */}
            <div
              ref={pillRef}
              className="mt-10 bg-accentLight border border-accent/20 rounded-full px-5 py-2 inline-flex items-center gap-2.5 font-body text-xs flex-wrap justify-center lg:justify-start"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              <span className="text-muted">Live: </span>
              <span className="text-foreground font-heading" ref={tickerRef}>
                0.2847
              </span>
              <span className="text-muted"> USDC/sec streaming to </span>
              <span className="text-foreground font-heading">
                {TOTAL_ACTIVE_REPOS}
              </span>
              <span className="text-muted"> repos</span>
            </div>
          </div>

          {/* Right: SVG (Desktop only) */}
          <div
            ref={svgRef}
            className="hidden lg:flex flex-1 justify-center items-center"
          >
            <div className="relative w-full max-w-[500px] xl:max-w-[600px] aspect-[1792/2432]">
              <Image
                src="/mobile-svg.svg"
                alt="Mossfund Mobile Interface"
                fill
                className="object-contain"
                priority
                quality={95}
                sizes="(min-width: 1024px) 600px, 0px"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
