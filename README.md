# Mossfund

<div align="center">

**Fund the code that runs the world.**

_A community-owned DAO solving the critical OSS funding crisis through transparent, democratic allocation of streaming payments on Solana._

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Built on Solana](https://img.shields.io/badge/Built%20on-Solana-14F195?logo=solana)](https://solana.com)
[![Powered by Streamflow](https://img.shields.io/badge/Powered%20by-Streamflow-1D6FA8)](https://streamflow.finance)

[Website](https://mossfund.io) • [Documentation](./apps/web/README.md) • [Discord](https://discord.gg/mossfund) • [Twitter](https://twitter.com/mossfund)

</div>

---

## 🎯 Overview

Mossfund is a **community-owned OSS funding DAO** built on Solana that introduces three revolutionary primitives:

1. **Quadratic Voting** 🗳️ - Democratic funding allocation where voting power = √(tokens staked)
2. **Real-time Streaming Payments** 💸 - Per-second USDC payments to maintainers via Streamflow SDK
3. **Proof-of-Work Verification** ✅ - On-chain verification of GitHub activity and contributions

## 🚀 Quick Start

```bash
# Clone the repository
git clone https://github.com/yourusername/mossfund.git
cd mossfund

# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build all packages
pnpm build
```

## 📁 Monorepo Structure

This is a Turborepo monorepo containing the following packages and apps:

### Apps

- **`apps/web`** - Landing page built with Next.js 16, Tailwind CSS v4, GSAP, and Framer Motion
  - [Detailed Documentation](./apps/web/README.md)

### Packages

- **`packages/ui`** - Shared React component library (Button, Card, Code components)
- **`packages/eslint-config`** - ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- **`packages/typescript-config`** - Shared TypeScript configurations for the monorepo

### Smart Contracts (Coming Soon)

- **`programs/`** - Solana smart contracts (Anchor/Rust)
  - `governance/` - DAO governance program with quadratic voting
  - `streaming/` - Streamflow integration for token streaming
  - `proof-of-work/` - GitHub verification program

### Infrastructure (Coming Soon)

- **`oracle/`** - GitHub stats oracle (Python) for proof-of-work verification
- **`subgraph/`** - Helius indexing configuration for real-time event streaming

Each package/app is 100% [TypeScript](https://www.typescriptlang.org/).

## 🛠️ Tech Stack

### Frontend

- **Next.js 16** with Turbopack - React framework with optimal performance
- **Tailwind CSS v4** - Utility-first styling
- **TypeScript** - Type safety across the monorepo
- **GSAP** - Scroll-triggered animations
- **Framer Motion** - Interactive UI animations

### Blockchain (Coming Soon)

- **Solana** - High-performance blockchain
- **Anchor Framework** - Solana program development
- **Streamflow SDK** - Token streaming protocol
- **Helius RPC** - Real-time indexing and webhooks

### Monorepo Tools

- **Turborepo** - High-performance build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 🏗️ Development

### Prerequisites

- **Node.js 20+** or compatible runtime
- **pnpm** package manager (`npm install -g pnpm`)
- **Solana CLI** (for blockchain development - coming soon)
- **Anchor CLI** (for smart contract development - coming soon)
- **Rust** (for Solana programs - coming soon)

### Common Commands

| Command                    | Description                        |
| -------------------------- | ---------------------------------- |
| `pnpm dev`                 | Start all apps in development mode |
| `pnpm build`               | Build all apps and packages        |
| `pnpm lint`                | Lint all packages                  |
| `pnpm type-check`          | Type check all packages            |
| `turbo dev --filter=web`   | Develop specific app (web)         |
| `turbo build --filter=web` | Build specific app (web)           |

### Environment Variables

Create a `.env.local` file in `apps/web/`:

```bash
# Solana Configuration (Coming Soon)
NEXT_PUBLIC_SOLANA_NETWORK=devnet
NEXT_PUBLIC_RPC_ENDPOINT=https://api.devnet.solana.com

# Helius API (Coming Soon)
NEXT_PUBLIC_HELIUS_API_KEY=your_helius_key

# GitHub API for proof-of-work (Coming Soon)
GITHUB_API_TOKEN=your_github_token

# Streamflow Configuration (Coming Soon)
NEXT_PUBLIC_STREAMFLOW_CLUSTER=devnet
```

## 📦 Turborepo Commands

### Build

Build all apps and packages:

```bash
# With global turbo (recommended)
turbo build

# Without global turbo
pnpm exec turbo build
```

Build a specific package using [filters](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters):

```bash
turbo build --filter=web
```

### Develop

Develop all apps and packages:

```bash
# With global turbo (recommended)
turbo dev

# Without global turbo
pnpm exec turbo dev
```

Develop a specific package:

```bash
turbo dev --filter=web
```

### Remote Caching

> [!TIP]
> Vercel Remote Cache is free for all plans. Get started at [vercel.com](https://vercel.com/signup?utm_source=remote-cache-sdk&utm_campaign=free_remote_cache).

Turborepo uses [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching) to share cache artifacts across machines:

```bash
# Authenticate with Vercel
turbo login

# Link your Turborepo to Remote Cache
turbo link
```

## 🎓 Learning Outcomes

Building Mossfund provides hands-on experience with:

- **DAO Governance** - Implement quadratic voting mechanisms
- **Token Streaming** - Integrate Streamflow SDK for per-second payments
- **Solana Development** - Write Anchor programs with Rust
- **Monorepo Architecture** - Manage multi-package projects with Turborepo
- **Modern Frontend** - Next.js 16, Tailwind v4, advanced animations
- **Indexing & Oracles** - Bridge off-chain data to on-chain programs

**Difficulty**: Advanced  
**Time Investment**: 4-6 weeks for full implementation

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

### Contribution Areas

- 🎨 **Frontend** - Improve UI/UX, add animations
- ⛓️ **Smart Contracts** - Build Solana programs (coming soon)
- 📊 **Indexing** - Enhance data aggregation (coming soon)
- 🧪 **Testing** - Increase coverage, add E2E tests
- 📖 **Documentation** - Write guides and tutorials

## 📚 Resources

### Turborepo

- [Tasks](https://turborepo.dev/docs/crafting-your-repository/running-tasks)
- [Caching](https://turborepo.dev/docs/crafting-your-repository/caching)
- [Remote Caching](https://turborepo.dev/docs/core-concepts/remote-caching)
- [Filtering](https://turborepo.dev/docs/crafting-your-repository/running-tasks#using-filters)
- [Configuration](https://turborepo.dev/docs/reference/configuration)
- [CLI Reference](https://turborepo.dev/docs/reference/command-line-reference)

### Solana & Web3

- [Solana Documentation](https://docs.solana.com/)
- [Anchor Framework](https://www.anchor-lang.com/)
- [Streamflow Docs](https://docs.streamflow.finance/)
- [Helius Developer Docs](https://docs.helius.dev/)

### Frontend

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [GSAP ScrollTrigger](https://greensock.com/scrolltrigger/)
- [Framer Motion](https://www.framer.com/motion/)

## 📊 Roadmap

### Phase 1: MVP (Q2 2026) ✅

- [x] Landing page with mock data
- [x] Turborepo monorepo setup
- [x] Component library foundation

### Phase 2: Smart Contracts (Q3 2026)

- [ ] Governance program (quadratic voting)
- [ ] Streamflow integration
- [ ] Proof-of-work verification program
- [ ] Deploy to Solana Devnet

### Phase 3: Integration (Q4 2026)

- [ ] GitHub oracle integration
- [ ] Wallet connection (Phantom, Solflare)
- [ ] Real-time data indexing with Helius
- [ ] Community testing program

### Phase 4: Mainnet Launch (Q1 2027)

- [ ] Security audit completion
- [ ] Deploy to Solana Mainnet
- [ ] Onboard first 10 OSS projects
- [ ] Launch governance token

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

---

<div align="center">

**Built with ❤️ by the Mossfund community**

[Website](https://mossfund.io) • [Twitter](https://twitter.com/mossfund) • [Discord](https://discord.gg/mossfund) • [GitHub](https://github.com/mossfund)

**Not financial advice.** This is a demonstration project for an OSS funding DAO concept.

</div>
