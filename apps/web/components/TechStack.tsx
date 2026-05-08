'use client';

import Container from './Container';

const techCards = [
  {
    title: 'Anchor / Rust',
    body: 'On-chain programs for staking, governance, and registry. Auditable, deterministic, fast.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="11" y="11" width="10" height="10" transform="rotate(45 16 16)" />
      </svg>
    ),
  },
  {
    title: 'Streamflow SDK',
    body: 'Continuous SPL token streaming to maintainer wallets. Per-second granularity. No gas spikes.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 16 Q 10 10, 16 16 T 28 16" />
      </svg>
    ),
  },
  {
    title: 'Helius Webhooks',
    body: 'Real-time Solana event indexing. Vote events, stream opens, epoch settlements — all indexed.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <line x1="8" y1="12" x2="24" y2="12" />
        <line x1="8" y1="16" x2="24" y2="16" />
        <line x1="8" y1="20" x2="24" y2="20" />
      </svg>
    ),
  },
  {
    title: 'Python + GitHub API',
    body: 'PoW pipeline: fetches repo stats every 6h, normalizes them, stores Merkle root in PDA.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="16" r="6" />
        <circle cx="20" cy="16" r="6" />
      </svg>
    ),
  },
];

export default function TechStack() {
  return (
    <section className="py-24 bg-background">
      <Container>
        <div className="mb-16">
          <div className="font-display text-8xl text-muted/20 leading-none mb-4">05</div>
          <h2 className="font-heading text-4xl md:text-5xl text-foreground leading-tight">
            Built on Solana.
            <br />
            No compromises.
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {techCards.map((card) => (
            <div
              key={card.title}
              className="bg-card-bg border border-border rounded-2xl p-6 space-y-4 hover:border-accent/30 transition-colors"
            >
              <div className="text-accent">{card.icon}</div>
              <h3 className="font-heading text-lg text-foreground">{card.title}</h3>
              <p className="font-body text-sm text-muted leading-relaxed">{card.body}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
