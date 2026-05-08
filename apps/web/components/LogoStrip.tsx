'use client';

/**
 * LogoStrip Component
 * 
 * Infinite auto-scrolling marquee showing tech stack and partners.
 * Pure CSS animation, no JavaScript required for the scroll effect.
 */
export default function LogoStrip() {
  const logos = [
    "Solana",
    "Streamflow",
    "Helius",
    "Anchor",
    "GitHub",
    "Superteam",
    "Metaplex",
    "SPL Tokens",
    "Devfolio"
  ];

  return (
    <section className="py-10 bg-background border-t border-b border-border overflow-hidden">
      <div className="flex items-center">
        {/* Static label */}
        <div className="shrink-0 mr-8 pl-6 md:pl-16 lg:pl-24">
          <span className="font-body text-xs uppercase tracking-widest text-muted/60">
            Built with
          </span>
        </div>

        {/* Scrolling content */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {/* First copy */}
            {logos.map((logo, idx) => (
              <div key={`logo-1-${idx}`} className="flex items-center shrink-0">
                <span className="font-heading text-sm text-foreground/40 hover:text-foreground/70 transition-colors mx-8 cursor-default">
                  {logo}
                </span>
                {idx < logos.length - 1 && (
                  <span className="text-foreground/20 select-none">/</span>
                )}
              </div>
            ))}
            
            {/* Second copy for seamless loop */}
            {logos.map((logo, idx) => (
              <div key={`logo-2-${idx}`} className="flex items-center shrink-0">
                <span className="font-heading text-sm text-foreground/40 hover:text-foreground/70 transition-colors mx-8 cursor-default">
                  {logo}
                </span>
                {idx < logos.length - 1 && (
                  <span className="text-foreground/20 select-none">/</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
