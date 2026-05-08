// illustrative — replace with live on-chain data
export const FAKE_REPOS = [
  { name: 'curl/curl', streamRate: 0.000821, commits: 847, prs: 231, stars: 14200, issues: 92 },
  { name: 'webpack/webpack', streamRate: 0.000643, commits: 623, prs: 189, stars: 64300, issues: 156 },
  { name: 'lodash/lodash', streamRate: 0.000512, commits: 412, prs: 98, stars: 59200, issues: 43 },
  { name: 'expressjs/express', streamRate: 0.000398, commits: 289, prs: 134, stars: 65100, issues: 178 },
  { name: 'babel/babel', streamRate: 0.000367, commits: 534, prs: 167, stars: 43100, issues: 234 },
  { name: 'vitejs/vite', streamRate: 0.000289, commits: 712, prs: 298, stars: 68900, issues: 89 },
  { name: 'prisma/prisma', streamRate: 0.000234, commits: 456, prs: 201, stars: 39800, issues: 312 },
];

export const TOTAL_ACTIVE_REPOS = 47;

// Set epoch end to 11 days 4 hours from now
export const EPOCH_END_TIMESTAMP = Date.now() + (11 * 24 * 60 * 60 * 1000) + (4 * 60 * 60 * 1000);

// illustrative treasury data
export const TREASURY_DATA = {
  activeStreams: 180000,
  epochReserve: 75000,
  overhead: 45000,
};

export const TOTAL_TREASURY = TREASURY_DATA.activeStreams + TREASURY_DATA.epochReserve + TREASURY_DATA.overhead;
