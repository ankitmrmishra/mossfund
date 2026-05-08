'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Container from './Container';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What is vFUND and how does it work?",
    answer: "vFUND is your voting power token, minted 1:1 when you stake FUND tokens. The longer your lock period, the more vFUND you receive per token. vFUND is non-transferable and represents your governance stake in the protocol."
  },
  {
    question: "How is quadratic voting different from normal voting?",
    answer: "In standard token voting, 1 token = 1 vote. A whale with 1,000,000 tokens has 1,000,000 votes. With quadratic voting, 1,000,000 tokens = 1,000 votes. This means smaller holders have proportionally more say, preventing capital concentration from dominating governance outcomes."
  },
  {
    question: "What prevents fake repos or gaming the system?",
    answer: "Three layers: GitHub OAuth wallet binding (one repo = one wallet), PoW hashing making activity verifiable on-chain, and community slashing proposals for known bad actors. The system isn't perfect — it's designed to be continuously improved by the DAO itself."
  },
  {
    question: "How do streaming payments work technically?",
    answer: "We use the Streamflow SDK on Solana to open a continuous payment stream from the DAO treasury to each funded repo's maintainer wallet. Tokens flow at a per-second rate determined by that epoch's quadratic vote allocation. Funds are claimable at any time."
  },
  {
    question: "Is Mossfund audited or secure?",
    answer: "Mossfund programs are built with Anchor (the standard Rust framework for Solana smart contracts). Audits are in progress with OtterSec. Until audit completion, only participate with amounts you're comfortable risking."
  },
  {
    question: "Can I withdraw my staked tokens early?",
    answer: "No. Staking periods are enforced on-chain and cannot be cut short. This is intentional — long-term alignment between stakers and the repos they fund is core to Mossfund's design. Choose your lock duration carefully."
  },
  {
    question: "What chains is this on?",
    answer: "Mossfund is Solana-native. Solana's sub-second finality and sub-penny transaction fees make it the only viable chain for per-second streaming payments without gas costs eating into maintainer income."
  },
  {
    question: "How do I register my OSS repo?",
    answer: "Connect a Solana wallet, link your GitHub account via OAuth, select the repo you maintain, and submit your first Proof-of-Work snapshot. Your repo appears in the voter registry immediately. The first epoch you're eligible for is the one after your registration is confirmed on-chain."
  }
];

function FAQAccordionItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-border py-5">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full cursor-pointer text-left"
        aria-expanded={isOpen}
      >
        <span className="font-heading text-base md:text-lg text-foreground pr-4">
          {item.question}
        </span>
        <motion.svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          className="shrink-0 text-foreground"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <line x1="10" y1="5" x2="10" y2="15" stroke="currentColor" strokeWidth="2" />
          <line x1="5" y1="10" x2="15" y2="10" stroke="currentColor" strokeWidth="2" />
        </motion.svg>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="font-body text-base text-muted leading-relaxed pb-4 pt-3">
              {item.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="bg-background py-28">
      <Container>
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-12">
            Questions you'll probably ask.
          </h2>

          <div>
            {faqData.map((item, index) => (
              <FAQAccordionItem key={index} item={item} index={index} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
