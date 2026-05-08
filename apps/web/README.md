# Mossfund

**Fund the code that runs the world.**

Mossfund is a community-owned OSS funding DAO on Solana. Stakers use quadratic voting to allocate real-time streaming payments (via Streamflow) to open-source repos. Maintainers submit proof-of-work dashboards. Everything is transparent and on-chain.

## Features

- **Quadratic Voting**: Democratic funding allocation where voting power scales with the square root of tokens staked
- **Real-time Streaming**: Per-second USDC payments to maintainers via Streamflow SDK
- **Proof of Work**: On-chain verification of GitHub activity and contributions
- **Transparent Treasury**: All funding flows visible and auditable on Solana
- **Epoch-based Governance**: Regular funding cycles with community-driven allocation

## Tech Stack

- **Next.js 16** with Turbopack
- **Tailwind CSS v4** for styling
- **GSAP** for scroll-triggered animations
- **Framer Motion** for interactive UI animations
- **TypeScript** for type safety
- **Solana** blockchain (Anchor/Rust programs)
- **Streamflow SDK** for token streaming
- **Helius** for real-time event indexing

## Typography

The site uses SF Pro Display font family:
- **SoproDisplayBold** (`font-display`) - Hero headings and section numbers
- **SoproDisplayMedium** (`font-heading`) - Section headings and card titles
- **SoproDisplayRegular** (`font-body`) - Body text, labels, and UI elements

## Color Palette

```css
--background: #F4F1EC      /* Warm off-white parchment */
--foreground: #1A1A18      /* Near-black */
--muted: #8A8880           /* Muted warm gray */
--accent: #3B7A5E          /* Deep forest green - primary CTA */
--accent-light: #EAF5EF    /* Soft green tint for cards */
--stream: #1D6FA8          /* Streamflow blue */
--border: #D8D4CC          /* Warm gray border */
--card-bg: #FFFFFF         /* Pure white for cards */
```

## Getting Started

### Prerequisites

- Node.js 20+ or compatible runtime
- pnpm package manager

### Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Project Structure

```
├── app/
│   ├── globals.css          # Global styles and theme
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main landing page
├── components/
│   ├── Nav.tsx              # Fixed navigation header
│   ├── Hero.tsx             # Hero section with live ticker
│   ├── ProblemStatement.tsx # OSS funding problem overview
│   ├── HowItWorks.tsx       # Three primitives explanation
│   ├── BentoGrid.tsx        # Live data dashboard
│   ├── ProofOfWork.tsx      # PoW verification system
│   ├── TechStack.tsx        # Technology overview
│   ├── CTA.tsx              # Call-to-action section
│   ├── Footer.tsx           # Footer with slide-up animation
│   └── Container.tsx        # Consistent padding wrapper
├── lib/
│   └── constants.ts         # Fake data and configuration
└── public/
    └── fonts/               # SF Pro Display font files
```

## Animation System

### GSAP (ScrollTrigger)
- Stat card reveals
- Vote bar width animations
- Treasury segment animations
- Metric counter animations
- Hero word stagger

### Framer Motion
- Card hover states
- Bento grid item entrances
- Navigation indicator slide
- Footer slide-up reveal
- CTA fade-in

### CSS Animations
- Live stream pulse indicators
- Flowing stream particles

## Design Principles

1. **Light mode only** - Warm, approachable aesthetic
2. **No dark mode** - Consistent brand experience
3. **Scroll-triggered reveals** - Progressive disclosure
4. **Real-time data** - Live tickers and counters
5. **Transparent data** - All metrics visible and verifiable
6. **Responsive design** - Mobile-first approach (375px → 1280px+)

## Notes

- All illustrative data in `lib/constants.ts` should be replaced with live on-chain data
- Font files are already included in `/public/fonts`
- GSAP and Framer Motion are dynamically imported to avoid SSR issues
- Custom font utilities are defined in `@layer utilities` for Tailwind v4 compatibility

## License

MIT License

---

**Not financial advice.** This is a demonstration landing page for an OSS funding DAO concept.
