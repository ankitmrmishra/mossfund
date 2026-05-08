"use client";

import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import { Menu, X, Wallet } from "lucide-react";
import { useMediaQuery } from "@/lib/hooks/useMediaQuery";

const navLinks = [
  { name: "How It Works", href: "#how-it-works" },
  { name: "Explore", href: "#bento" },
  { name: "Stake", href: "#cta" },
  { name: "Governance", href: "#governance" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const isMobile = useMediaQuery("(max-width: 768px)");

  // transform values based on scroll progress
  const widthTransform = useTransform(
    scrollYProgress,
    [0, 0.06],
    ["100%", "50%"],
  );

  const width = useSpring(widthTransform, {
    stiffness: 120,
    damping: 20,
    mass: 0.4,
  });

  return (
    <>
      <motion.nav
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        style={{
          width: isMobile ? "92%" : width,
        }}
        className="sticky top-4   z-50  max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between rounded-full border border-border md:bg-background/80 bg-background px-4 py-3 backdrop-blur-xl shadow-sm">
          {/* Logo */}
          <a href="/" className="text-lg font-semibold tracking-tight">
            Mossfund
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <button className="hidden md:flex items-center gap-2 rounded-full bg-accent px-4 py-2 text-sm font-medium text-white transition hover:opacity-90">
            <Wallet className="h-4 w-4" />
            Connect Wallet
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setOpen(!open)}
            className="flex h-10 w-10 items-center justify-center rounded-full md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm md:hidden"
            />

            {/* Menu */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed left-1/2 top-24 z-50 w-[92%] -translate-x-1/2 rounded-3xl border border-border bg-background p-6 shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="rounded-xl px-4 py-3 text-base text-muted-foreground transition hover:bg-muted hover:text-foreground"
                  >
                    {link.name}
                  </a>
                ))}
              </div>

              <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-accent px-4 py-3 font-medium text-white transition hover:opacity-90">
                <Wallet className="h-4 w-4" />
                Connect Wallet
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
