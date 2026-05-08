'use client';

import { motion } from 'framer-motion';
import Container from './Container';

const navLinks = ['How It Works', 'Explore Repos', 'Stake', 'Governance', 'Docs'];
const ecosystemLinks = [
  { name: 'Solana', url: 'https://solana.com' },
  { name: 'Streamflow', url: 'https://streamflow.finance' },
  { name: 'Helius', url: 'https://helius.dev' },
  { name: 'Anchor', url: 'https://anchor-lang.com' },
  { name: 'GitHub →', url: 'https://github.com/mossfund' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1] as const
    }
  }
};

export default function Footer() {
  return (
    <footer className="relative bg-foreground text-white pt-16 pb-8 overflow-hidden">
      {/* Dot grid background */}
      <div 
        className="absolute inset-0 opacity-20 pointer-events-none"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '32px 32px'
        }}
      />

      <Container>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="relative z-10"
        >
          {/* Top Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 pb-12">
            {/* Col 1: Wordmark + Description + Social */}
            <motion.div variants={itemVariants} className="md:col-span-2 space-y-4">
              <div className="flex items-center gap-2">
                <span className="w-[10px] h-[10px] bg-accent rounded-full" />
                <span className="font-heading text-xl text-white">Mossfund</span>
              </div>
              <p className="font-body text-sm text-white/40 max-w-xs leading-relaxed">
                A community-owned protocol for funding open-source software. Transparently. Continuously. On-chain.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 mt-6">
                {/* GitHub */}
                <motion.a
                  href="https://github.com/mossfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="GitHub"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                  </svg>
                </motion.a>
                
                {/* Twitter/X */}
                <motion.a
                  href="https://twitter.com/mossfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Twitter"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                  </svg>
                </motion.a>
                
                {/* Discord */}
                <motion.a
                  href="https://discord.gg/mossfund"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/50 hover:text-white transition-colors"
                  aria-label="Discord"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515a.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0a12.64 12.64 0 0 0-.617-1.25a.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057a19.9 19.9 0 0 0 5.993 3.03a.078.078 0 0 0 .084-.028a14.09 14.09 0 0 0 1.226-1.994a.076.076 0 0 0-.041-.106a13.107 13.107 0 0 1-1.872-.892a.077.077 0 0 1-.008-.128a10.2 10.2 0 0 0 .372-.292a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127a12.299 12.299 0 0 1-1.873.892a.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028a19.839 19.839 0 0 0 6.002-3.03a.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.956-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419c0-1.333.955-2.419 2.157-2.419c1.21 0 2.176 1.096 2.157 2.42c0 1.333-.946 2.418-2.157 2.418z"/>
                  </svg>
                </motion.a>
              </div>
            </motion.div>

            {/* Col 2: Navigate */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="font-body text-xs uppercase tracking-widest text-white/30 mb-4">
                Navigate
              </h3>
              {navLinks.map((link) => (
                <motion.a
                  key={link}
                  href="#"
                  className="block font-body text-sm text-white/50 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link}
                </motion.a>
              ))}
            </motion.div>

            {/* Col 3: Ecosystem */}
            <motion.div variants={itemVariants} className="space-y-3">
              <h3 className="font-body text-xs uppercase tracking-widest text-white/30 mb-4">
                Ecosystem
              </h3>
              {ecosystemLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block font-body text-sm text-white/50 hover:text-white transition-colors"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Divider */}
          <div className="h-px bg-white/10" />

          {/* Bottom Bar */}
          <motion.div 
            variants={itemVariants}
            className="pt-8"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-body text-xs text-white/25">
                © 2025 Mossfund · MIT License · Not financial advice
              </p>
              <div className="flex gap-6 font-body text-xs text-white/25">
                <motion.a 
                  href="#" 
                  className="hover:text-white/50 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Privacy
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-white/50 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Terms
                </motion.a>
                <motion.a 
                  href="#" 
                  className="hover:text-white/50 transition-colors"
                  whileHover={{ y: -2 }}
                >
                  Contact
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </footer>
  );
}
