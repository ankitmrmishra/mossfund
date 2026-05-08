"use client";

import { useEffect, useRef } from "react";
import Container from "./Container";

const stats = [
  { number: "84%", label: "of critical NPM packages maintained by 1 person" },
  { number: "$0", label: "average annual income for top 1000 OSS maintainers" },
  {
    number: "3.7B",
    label: "downloads/week from packages with no active maintainer",
  },
];

export default function ProblemStatement() {
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, ScrollTriggerModule]) => {
        const gsap = gsapModule.default || gsapModule;
        const ScrollTrigger =
          ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        if (cardsRef.current) {
          const cards = cardsRef.current.querySelectorAll(".stat-card");
          gsap.fromTo(
            cards,
            { y: 30, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.6,
              stagger: 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: cardsRef.current,
                start: "top 80%",
              },
            },
          );
        }
      },
    );
  }, []);

  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 md:gap-16">
          {/* Left Column */}
          <div className="space-y-6">
            <div className="font-display text-8xl text-muted/20 leading-none">
              01
            </div>
            <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
              Open source is free to use.
              <br />
              Rarely free to maintain.
            </h2>
            <p className="font-body text-sm text-muted">
              The tools powering your startup, your infrastructure, your AI
              models — most of them run on unpaid weekend work. Maintainers burn
              out. Critical repos go dark.
            </p>
            <p className="font-body text-sm text-muted">
              Traditional grants are opaque, slow, and political. Donations are
              erratic. There\'s no mechanism that lets an entire community
              continuously direct capital to what matters.
            </p>
          </div>

          {/* Right Column - Stat Cards */}
          <div ref={cardsRef} className="space-y-6">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="stat-card bg-card-bg/50 border border-border rounded-2xl p-6"
              >
                <div className="font-display text-5xl text-foreground">
                  {stat.number}
                </div>
                <p className="font-body text-sm text-muted mt-2">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
