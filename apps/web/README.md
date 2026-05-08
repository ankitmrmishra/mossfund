# Mossfund

<div align="center">

**Fund the code that runs the world.**

_A community-owned DAO solving the critical OSS funding crisis through transparent, democratic allocation of streaming payments on Solana._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Solana](https://img.shields.io/badge/Built%20on-Solana-14F195?logo=solana)](https://solana.com)
[![Powered by Streamflow](https://img.shields.io/badge/Powered%20by-Streamflow-1D6FA8)](https://streamflow.finance)

[Website](https://mossfund.io) • [Documentation](#) • [Discord](https://discord.gg/mossfund) • [Twitter](https://twitter.com/mossfund)

</div>

---

## 📖 Table of Contents

- [The Problem](#-the-problem)
- [The Solution](#-the-solution)
- [Key Features](#-key-features)
- [Tech Stack](#️-tech-stack)
- [Getting Started](#-getting-started)
- [Project Structure](#-project-structure)
- [Design System](#-design-system)
- [Learning Outcomes](#-learning-outcomes)
- [Architecture Overview](#️-architecture-overview)
- [Development Workflow](#-development-workflow)
- [Testing Strategy](#-testing-strategy)
- [Deployment](#-deployment)
- [Contributing](#-contributing)
- [Resources](#-resources)
- [Security](#-security)
- [Roadmap](#-roadmap)
- [License](#-license)
- [FAQ](#-faq)

---

## ⚡ Quick Start for Developers

```bash
# 1. Clone and install
git clone https://github.com/yourusername/mossfund.git
cd mossfund && pnpm install

# 2. Set up environment
cp .env.example .env.local
# Edit .env.local with your API keys

# 3. Start development
pnpm dev

# 4. Open browser
# Navigate to http://localhost:3000
```

### Common Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start Next.js dev server |
| `pnpm build`      | Build for production     |
| `pnpm lint`       | Run ESLint               |
| `pnpm type-check` | Run TypeScript compiler  |
| `anchor build`    | Build Solana programs    |
| `anchor test`     | Test smart contracts     |
| `anchor deploy`   | Deploy to Solana         |

---

## 🎯 The Problem

Critical open-source software powers the entire tech ecosystem, yet **96% of OSS maintainers are unpaid**. Traditional donation models are:

- **Opaque**: No visibility into fund allocation
- **Inefficient**: High fees and delayed payments
- **Undemocratic**: No community input on priorities
- **Unsustainable**: One-time donations don't support ongoing work

## 💡 The Solution

Mossfund is a **community-owned OSS funding DAO** built on Solana that introduces three revolutionary primitives:

### 1. **Quadratic Voting** 🗳️

Democratic funding allocation where voting power scales with the square root of tokens staked. This prevents whale dominance and amplifies community voices.

### 2. **Real-time Streaming Payments** 💸

Per-second USDC payments to maintainers via Streamflow SDK. No more waiting for grants or milestone approvals—get paid as you build.

### 3. **Proof-of-Work Verification** ✅

On-chain verification of GitHub activity and contributions. Transparent dashboards show exactly what maintainers are building and earning.

---

## ✨ Key Features

| Feature                  | Description                      | Benefit                                     |
| ------------------------ | -------------------------------- | ------------------------------------------- |
| **Quadratic Voting**     | Voting power = √(tokens staked)  | Prevents plutocracy, empowers small holders |
| **Streaming Payments**   | Per-second USDC via Streamflow   | Continuous funding, no payment delays       |
| **Proof of Work**        | GitHub stats indexed on-chain    | Transparent accountability                  |
| **Transparent Treasury** | All flows visible on Solana      | Full auditability, zero opacity             |
| **Epoch Governance**     | Regular funding cycles (14 days) | Predictable allocation windows              |
| **Composable Programs**  | Anchor/Rust smart contracts      | Permissionless integration                  |

---

## 🛠️ Tech Stack

### Frontend

| Technology          | Purpose                        | Why We Chose It                            |
| ------------------- | ------------------------------ | ------------------------------------------ |
| **Next.js 16**      | React framework with Turbopack | Server-side rendering, optimal performance |
| **Tailwind CSS v4** | Utility-first styling          | Rapid UI development, consistent design    |
| **TypeScript**      | Type safety                    | Catch errors early, better DX              |
| **GSAP**            | Scroll animations              | Smooth, performant scroll triggers         |
| **Framer Motion**   | UI animations                  | Declarative animation API                  |

### Blockchain (Solana)

| Technology           | Purpose                    | Why We Chose It                        |
| -------------------- | -------------------------- | -------------------------------------- |
| **Anchor Framework** | Solana program development | Type-safe Rust macros, easier testing  |
| **Streamflow SDK**   | Token streaming protocol   | Battle-tested streaming infrastructure |
| **Helius RPC**       | Real-time indexing         | Fast transaction processing, webhooks  |
| **Solana Web3.js**   | Wallet integration         | Standard Solana client library         |

### Indexing & Data

| Technology             | Purpose                  | Why We Chose It                     |
| ---------------------- | ------------------------ | ----------------------------------- |
| **Python**             | GitHub API integration   | Rich ecosystem for data processing  |
| **GitHub GraphQL API** | Contribution metrics     | Efficient querying of repo activity |
| **Helius Webhooks**    | On-chain event listening | Real-time DAO state updates         |

### Infrastructure

- **Vercel** - Frontend hosting with edge functions
- **Solana Devnet/Mainnet** - Smart contract deployment
- **IPFS** - Decentralized metadata storage

## Typography

The site uses SF Pro Display font family:

- **SoproDisplayBold** (`font-display`) - Hero headings and section numbers
- **SoproDisplayMedium** (`font-heading`) - Section headings and card titles
- **SoproDisplayRegular** (`font-body`) - Body text, labels, and UI elements

## Color Palette

```css
--background: #f4f1ec /* Warm off-white parchment */ --foreground: #1a1a18
  /* Near-black */ --muted: #8a8880 /* Muted warm gray */ --accent: #3b7a5e
  /* Deep forest green - primary CTA */ --accent-light: #eaf5ef
  /* Soft green tint for cards */ --stream: #1d6fa8 /* Streamflow blue */
  --border: #d8d4cc /* Warm gray border */ --card-bg: #ffffff
  /* Pure white for cards */;
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js 20+** or compatible runtime
- **pnpm** package manager (`npm install -g pnpm`)
- **Solana CLI** (for blockchain development)
- **Anchor CLI** (for smart contract development)
- **Rust** (for Solana programs)

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/mossfund.git
cd mossfund

# Install dependencies
pnpm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your configuration

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Environment Variables

Create a `.env.local` file with:

```bash
# Solana Configuration
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com

# Helius API
NEXT_PUBLIC_HELIUS_API_KEY=your_helius_key

# GitHub API (for proof-of-work)
GITHUB_API_TOKEN=your_github_token

# Streamflow Configuration
NEXT_PUBLIC_STREAMFLOW_CLUSTER=devnet
```

---

## 📁 Project Structure

```
mossfund/
├── apps/
│   └── web/                      # Landing page (Next.js)
│       ├── app/
│       │   ├── globals.css       # Global styles and theme variables
│       │   ├── layout.tsx        # Root layout with metadata & SEO
│       │   ├── page.tsx          # Main landing page composition
│       │   ├── robots.ts         # SEO robots configuration
│       │   └── sitemap.ts        # Dynamic sitemap generation
│       ├── components/
│       │   ├── Nav.tsx           # Fixed navigation header
│       │   ├── Hero.tsx          # Hero section with live ticker
│       │   ├── ProblemStatement.tsx  # OSS funding crisis overview
│       │   ├── HowItWorks.tsx    # Three primitives explanation
│       │   ├── BentoGrid.tsx     # Live data dashboard (4-column grid)
│       │   ├── ProofOfWork.tsx   # PoW verification system
│       │   ├── TechStack.tsx     # Technology overview cards
│       │   ├── Testimonials.tsx  # Community testimonials
│       │   ├── FAQ.tsx           # Frequently asked questions
│       │   ├── CTA.tsx           # Call-to-action section
│       │   ├── Footer.tsx        # Footer with slide-up animation
│       │   └── ui/               # Reusable UI components
│       │       ├── button.tsx
│       │       ├── card.tsx
│       │       └── drawer.tsx
│       ├── lib/
│       │   ├── constants.ts      # Mock data & configuration
│       │   ├── utils.ts          # Utility functions (cn, etc.)
│       │   └── hooks/
│       │       └── useMediaQuery.tsx
│       └── public/
│           ├── fonts/            # SF Pro Display font files
│           └── *.svg             # Icons and illustrations
├── programs/                     # Solana smart contracts (Anchor/Rust)
│   ├── governance/               # DAO governance program
│   ├── streaming/                # Streamflow integration
│   └── proof-of-work/            # GitHub verification program
├── subgraph/                     # Helius indexing configuration
├── oracle/                       # GitHub stats oracle (Python)
└── packages/                     # Shared packages
    ├── eslint-config/
    ├── typescript-config/
    └── ui/                       # Shared UI components
```

---

## 🎨 Design System

### Typography

The site uses **SF Pro Display** font family for a clean, modern aesthetic:

| Font                       | CSS Variable   | Usage                          |
| -------------------------- | -------------- | ------------------------------ |
| **SF Pro Display Bold**    | `font-display` | Hero headings, section numbers |
| **SF Pro Display Medium**  | `font-heading` | Section headings, card titles  |
| **SF Pro Display Regular** | `font-body`    | Body text, labels, UI elements |

### Color Palette

```css
/* Core Colors */
--background: #f4f1ec /* Warm off-white parchment */ --foreground: #1a1a18
  /* Near-black text */ --muted: #8a8880
  /* Muted warm gray for secondary text */ /* Brand Colors */ --accent: #3b7a5e
  /* Deep forest green - primary CTA */ --accent-light: #eaf5ef
  /* Soft green tint for cards */ --stream: #1d6fa8
  /* Streamflow blue for streaming indicators */ /* UI Elements */
  --border: #d8d4cc /* Warm gray border */ --card-bg: #ffffff
  /* Pure white for elevated cards */;
```

### Animation System

#### GSAP (ScrollTrigger)

- Stat card reveals with stagger
- Vote bar width animations
- Treasury segment animations
- Metric counter animations
- Hero word stagger effect

#### Framer Motion

- Card hover states and elevation
- Bento grid item entrances
- Navigation indicator slide
- Footer slide-up reveal
- CTA fade-in transitions

#### CSS Animations

- Live stream pulse indicators
- Flowing stream particles
- Gradient animations

### Design Principles

1. **Light mode only** - Warm, approachable aesthetic that emphasizes transparency
2. **No dark mode** - Consistent brand experience across all devices
3. **Scroll-triggered reveals** - Progressive disclosure using GSAP ScrollTrigger
4. **Real-time data** - Live tickers and counters to show DAO activity
5. **Transparent data** - All metrics visible and verifiable on-chain
6. **Responsive design** - Mobile-first approach (375px → 1280px+)
7. **Accessibility** - WCAG 2.1 AA compliant, semantic HTML, keyboard navigation

---

## 🎓 Learning Outcomes

Building Mossfund provides hands-on experience with advanced Web3 concepts:

### Blockchain & Smart Contracts

- **DAO Governance**: Implement on-chain voting mechanisms with quadratic voting formulas
- **Token Streaming**: Integrate Streamflow SDK for per-second payment distribution
- **Anchor Framework**: Write type-safe Solana programs with Rust macros
- **Program Derived Addresses (PDAs)**: Manage deterministic account generation
- **Cross-Program Invocation (CPI)**: Compose programs for complex workflows

### Indexing & Data

- **Helius Webhooks**: Listen to on-chain events in real-time
- **GitHub GraphQL API**: Query contribution metrics efficiently
- **Oracle Design**: Build off-chain data bridges to on-chain programs
- **Data Aggregation**: Process and normalize multi-source data

### Frontend & UX

- **Wallet Integration**: Connect Phantom, Solflare, and other Solana wallets
- **Real-time Updates**: WebSocket connections for live DAO state
- **Optimistic UI**: Update UI before transaction confirmation
- **Error Handling**: Graceful degradation for blockchain failures

### Advanced Concepts

- **Quadratic Voting Math**: Implement √(tokens) voting power calculations
- **Epoch-based Governance**: Time-locked voting periods and fund distribution
- **Sybil Resistance**: Prevent vote manipulation through economic incentives
- **Treasury Management**: Multi-sig controls and automated fund allocation

**Difficulty Level**: Advanced (requires Solana/Rust knowledge)  
**Time Investment**: 4-6 weeks for full implementation  
**Prerequisites**: JavaScript/TypeScript, React, basic blockchain concepts

---

## 🏗️ Architecture Overview

### System Components

```
┌─────────────────────────────────────────────────────────────┐
│                        Frontend (Next.js)                    │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐   │
│  │  Wallet  │  │  Voting  │  │ Treasury │  │   PoW    │   │
│  │ Connect  │  │    UI    │  │Dashboard │  │Dashboard │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘   │
└───────┼─────────────┼─────────────┼─────────────┼──────────┘
        │             │             │             │
        ▼             ▼             ▼             ▼
┌─────────────────────────────────────────────────────────────┐
│                    Solana Blockchain                         │
│  ┌──────────────┐  ┌──────────────┐  ┌──────────────┐     │
│  │  Governance  │  │  Streamflow  │  │ Proof-of-Work│     │
│  │   Program    │◄─┤  Integration │◄─┤   Program    │     │
│  └──────┬───────┘  └──────────────┘  └──────┬───────┘     │
└─────────┼──────────────────────────────────────┼───────────┘
          │                                      │
          ▼                                      ▼
┌──────────────────┐                  ┌──────────────────┐
│ Helius Indexer   │                  │  GitHub Oracle   │
│  (Event Stream)  │                  │    (Python)      │
└──────────────────┘                  └──────────────────┘
```

### Data Flow

1. **Staking**: Users stake tokens → Governance program calculates voting power (√tokens)
2. **Voting**: Users vote on repos → Votes aggregated per epoch
3. **Allocation**: Epoch ends → Streamflow streams created based on vote weights
4. **Verification**: Maintainers submit GitHub activity → Oracle verifies → PoW program updates
5. **Distribution**: Streams flow per-second → Maintainers claim anytime

---

## 🔧 Development Workflow

### Frontend Development

```bash
# Start dev server with hot reload
pnpm dev

# Run linter
pnpm lint

# Type check
pnpm type-check

# Build for production
pnpm build
```

### Smart Contract Development

```bash
# Navigate to programs directory
cd programs/governance

# Build Anchor program
anchor build

# Run tests
anchor test

# Deploy to devnet
anchor deploy --provider.cluster devnet

# Generate TypeScript client
anchor client
```

### Oracle Development

```bash
# Navigate to oracle directory
cd oracle

# Install Python dependencies
pip install -r requirements.txt

# Run GitHub stats fetcher
python fetch_github_stats.py --repo owner/repo

# Start oracle service
python oracle_service.py
```

---

## 🧪 Testing Strategy

### Frontend Tests

- **Unit Tests**: Component logic with Jest
- **Integration Tests**: User flows with React Testing Library
- **E2E Tests**: Full workflows with Playwright
- **Visual Regression**: Screenshot comparison with Percy

### Smart Contract Tests

- **Unit Tests**: Individual instruction testing with Anchor
- **Integration Tests**: Multi-program interactions
- **Fuzzing**: Property-based testing with Proptest
- **Security Audits**: Automated with Soteria

### Performance Tests

- **Load Testing**: Simulate high transaction volume
- **Gas Optimization**: Minimize compute units per instruction
- **RPC Stress Testing**: Test Helius endpoint limits

---

## 🚢 Deployment

### Frontend Deployment (Vercel)

```bash
# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Smart Contract Deployment

```bash
# Deploy to devnet
anchor deploy --provider.cluster devnet

# Deploy to mainnet (requires audit)
anchor deploy --provider.cluster mainnet
```

### Environment-Specific Configuration

| Environment | Solana Cluster | RPC Endpoint          | Streamflow Cluster |
| ----------- | -------------- | --------------------- | ------------------ |
| Development | Localnet       | http://localhost:8899 | localnet           |
| Staging     | Devnet         | Helius Devnet RPC     | devnet             |
| Production  | Mainnet        | Helius Mainnet RPC    | mainnet            |

---

## 🤝 Contributing

We welcome contributions! Here's how to get started:

### Contribution Guidelines

1. **Fork the repository** and create a feature branch
2. **Follow code style**: Run `pnpm lint` before committing
3. **Write tests**: Maintain >80% code coverage
4. **Update docs**: Document new features in README
5. **Submit PR**: Use conventional commit messages

### Commit Convention

```bash
feat: add quadratic voting UI
fix: resolve streaming payment bug
docs: update architecture diagram
test: add governance program tests
chore: upgrade dependencies
```

### Areas for Contribution

- 🎨 **Frontend**: Improve UI/UX, add animations
- ⛓️ **Smart Contracts**: Optimize gas, add features
- 📊 **Indexing**: Enhance data aggregation
- 🧪 **Testing**: Increase coverage, add E2E tests
- 📖 **Documentation**: Write guides, tutorials
- 🔒 **Security**: Audit code, report vulnerabilities

---

## 📚 Resources

### Documentation

- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Streamflow Docs](https://docs.streamflow.finance/)
- [Helius Developer Docs](https://docs.helius.dev/)
- [Next.js Documentation](https://nextjs.org/docs)

### Tutorials

- [Building DAOs on Solana](https://www.anchor-lang.com/docs/dao)
- [Quadratic Voting Explained](https://www.radicalxchange.org/concepts/quadratic-voting/)
- [Token Streaming Patterns](https://docs.streamflow.finance/help/token-streaming)

### Community

- [Discord](https://discord.gg/mossfund) - Join our community
- [Twitter](https://twitter.com/mossfund) - Follow for updates
- [GitHub Discussions](https://github.com/mossfund/discussions) - Ask questions

---

## 🔒 Security

### Reporting Vulnerabilities

If you discover a security vulnerability, please email **security@mossfund.io**. Do not open public issues for security concerns.

### Security Measures

- ✅ Smart contracts audited by [Audit Firm]
- ✅ Multi-sig treasury with 3/5 threshold
- ✅ Time-locked governance proposals (48h minimum)
- ✅ Rate limiting on oracle submissions
- ✅ Slashing for malicious proof-of-work claims

---

## 📊 Roadmap

### Phase 1: MVP (Q2 2026) ✅

- [x] Landing page with mock data
- [x] Governance program (quadratic voting)
- [x] Streamflow integration
- [x] Basic proof-of-work verification

### Phase 2: Testnet Launch (Q3 2026)

- [ ] Deploy to Solana Devnet
- [ ] GitHub oracle integration
- [ ] Wallet connection (Phantom, Solflare)
- [ ] Community testing program

### Phase 3: Mainnet Beta (Q4 2026)

- [ ] Security audit completion
- [ ] Deploy to Solana Mainnet
- [ ] Onboard first 10 OSS projects
- [ ] Launch governance token

### Phase 4: Scale (Q1 2027)

- [ ] Multi-chain support (Ethereum L2s)
- [ ] Advanced analytics dashboard
- [ ] Mobile app (React Native)
- [ ] DAO treasury diversification

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- **Streamflow** for token streaming infrastructure
- **Helius** for reliable Solana RPC and indexing
- **Anchor** for making Solana development accessible
- **Open-source maintainers** who inspired this project

---

## 💬 FAQ

**Q: Is this live on mainnet?**  
A: Not yet. We're currently in development. Follow our [Twitter](https://twitter.com/mossfund) for launch updates.

**Q: How is this different from Gitcoin?**  
A: Mossfund uses quadratic voting + real-time streaming payments on Solana, offering lower fees and per-second distribution vs. Gitcoin's round-based grants on Ethereum.

**Q: Can I use this for non-OSS projects?**  
A: The DAO can vote to fund any GitHub repository, but the focus is on open-source software.

**Q: What prevents fake GitHub activity?**  
A: The oracle verifies commits, PRs, and issues against GitHub's API. Suspicious patterns trigger manual review.

**Q: How do I become a maintainer?**  
A: Submit your repo for DAO consideration. If approved by vote, you'll receive streaming payments based on your proof-of-work.

---

<div align="center">

**Built with ❤️ by the Mossfund community**

[Website](https://mossfund.io) • [Twitter](https://twitter.com/mossfund) • [Discord](https://discord.gg/mossfund) • [GitHub](https://github.com/mossfund)

</div>
