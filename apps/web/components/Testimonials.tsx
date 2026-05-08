"use client";

import Container from "./Container";

interface Testimonial {
  initials: string;
  name: string;
  role: string;
  quote: string;
  badge: string;
  type: "maintainer" | "staker";
}

const row1Testimonials: Testimonial[] = [
  {
    initials: "MK",
    name: "M. Karlsson",
    role: "Maintainer, curl/curl",
    quote:
      "Finally. I merged 847 commits last quarter with zero funding. Mossfund's first epoch sent 0.8 USDC/sec my way. Not rich, but it's real.",
    badge: "curl/curl · 48 commits/wk",
    type: "maintainer",
  },
  {
    initials: "AS",
    name: "A. Singh",
    role: "Staker · 4,200 vFUND",
    quote:
      "I've tried five DAO governance systems. Mossfund is the first where my vote actually landed on the repo I care about, not the one with the biggest treasury backing.",
    badge: "Epoch 12 Voter",
    type: "staker",
  },
  {
    initials: "RP",
    name: "R. Patel",
    role: "Maintainer, webpack",
    quote:
      "The PoW dashboard means no applications, no committees. My GitHub history is my proof.",
    badge: "webpack/webpack",
    type: "maintainer",
  },
  {
    initials: "LW",
    name: "L. Wang",
    role: "Staker · 2,100 vFUND",
    quote:
      "Transparency is everything. Being able to see exactly where my stake goes and verify it on-chain builds trust.",
    badge: "Epoch 13 Voter",
    type: "staker",
  },
  {
    initials: "TC",
    name: "T. Chen",
    role: "Maintainer, vite",
    quote:
      "Streaming payments remove the anxiety of 'will I get paid this month?' I just watch the balance grow as I code.",
    badge: "vitejs/vite",
    type: "maintainer",
  },
  {
    initials: "NK",
    name: "N. Kumar",
    role: "Staker · 5,800 vFUND",
    quote:
      "The quadratic voting mechanism is brilliant. It's the first time I've seen whales not dominate governance.",
    badge: "Epoch 14 Voter",
    type: "staker",
  },
];

const row2Testimonials: Testimonial[] = [
  {
    initials: "DK",
    name: "D. Kim",
    role: "Staker · 1,800 vFUND",
    quote:
      "Quadratic voting hit differently when I saw a whale's 50,000 token stake only counted as 224 votes. Finally fair.",
    badge: "Epoch 13 Voter",
    type: "staker",
  },
  {
    initials: "YL",
    name: "Y. Liu",
    role: "Maintainer, prisma",
    quote:
      "Streaming per-second removes the anxiety of 'will I get paid this month?' I just watch the balance grow as I code.",
    badge: "prisma/prisma",
    type: "maintainer",
  },
  {
    initials: "JN",
    name: "J. Nakamoto",
    role: "Core contributor, Solana",
    quote:
      "The architecture is clean. On-chain PoW hashing is an elegant primitive I hadn't seen before.",
    badge: "Solana ecosystem",
    type: "staker",
  },
  {
    initials: "EM",
    name: "E. Martinez",
    role: "Maintainer, babel",
    quote:
      "No more grant applications. No more waiting months for approval. Just code, commit, and get funded.",
    badge: "babel/babel",
    type: "maintainer",
  },
  {
    initials: "SB",
    name: "S. Brown",
    role: "Staker · 3,400 vFUND",
    quote:
      "I can finally support the tools I use every day. Mossfund makes OSS funding feel personal and direct.",
    badge: "Epoch 12 Voter",
    type: "staker",
  },
  {
    initials: "HT",
    name: "H. Tanaka",
    role: "Maintainer, next.js",
    quote:
      "The PoW system is fair. High activity doesn't guarantee funding, but it earns visibility and trust.",
    badge: "vercel/next.js",
    type: "maintainer",
  },
];

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const bgColor =
    testimonial.type === "maintainer"
      ? "bg-accent/10 text-accent border-accent/20"
      : "bg-stream/10 text-stream border-stream/20";

  return (
    <div className="bg-card border border-border rounded-2xl p-6 w-[320px] shrink-0 mr-4">
      {/* Avatar + Name + Role */}
      <div className="flex items-center gap-3 mb-4">
        <div
          className={`${bgColor} border font-heading text-sm w-10 h-10 rounded-full flex items-center justify-center`}
        >
          {testimonial.initials}
        </div>
        <div>
          <div className="font-heading text-sm text-foreground">
            {testimonial.name}
          </div>
          <div className="font-body text-xs text-muted">{testimonial.role}</div>
        </div>
      </div>

      {/* Quote */}
      <p className="font-body text-sm text-foreground/70 leading-relaxed italic">
        "{testimonial.quote}"
      </p>

      {/* Badge */}
      <div className="mt-4">
        <span className="font-body text-xs bg-accentLight text-accent rounded-full px-3 py-1 inline-block">
          {testimonial.badge}
        </span>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-background py-20 overflow-hidden">
      <Container>
        <div className="mb-12">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-[1.05]">
            Trusted by the people
            <br />
            who build in the open.
          </h2>
          <p className="font-body text-base text-muted mt-3">
            Real feedback from maintainers and stakers in the Mossfund
            community.
          </p>
        </div>
      </Container>

      {/* Row 1: Scrolls LEFT → RIGHT */}
      <div className="mb-4 overflow-hidden">
        <div className="flex animate-marquee">
          {/* First copy */}
          {row1Testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`row1-1-${idx}`} testimonial={testimonial} />
          ))}
          {/* Second copy for seamless loop */}
          {row1Testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`row1-2-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>

      {/* Row 2: Scrolls RIGHT → LEFT (hidden on mobile) */}
      <div className="hidden md:block overflow-hidden">
        <div
          className="flex animate-marquee"
          style={{ animationDuration: "30s", animationDirection: "reverse" }}
        >
          {/* First copy */}
          {row2Testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`row2-1-${idx}`} testimonial={testimonial} />
          ))}
          {/* Second copy for seamless loop */}
          {row2Testimonials.map((testimonial, idx) => (
            <TestimonialCard key={`row2-2-${idx}`} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}
