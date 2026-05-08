'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface FooterRevealProps {
  children: ReactNode;
  footer: ReactNode;
}

/**
 * FooterReveal Component
 * 
 * Creates a cinematic scroll-linked animation where the last content section
 * slides upward to reveal a fixed footer underneath.
 * 
 * Animation flow:
 * 1. Footer is positioned fixed at bottom (z-0)
 * 2. Content wrapper sits above it (z-10) with solid background
 * 3. As user scrolls to bottom, GSAP ScrollTrigger:
 *    - Pins the footer in place
 *    - Translates the content wrapper upward
 *    - Creates reveal effect with smooth easing
 */
export default function FooterReveal({ children, footer }: FooterRevealProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    // Dynamically import GSAP to avoid SSR issues
    Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger')
    ]).then(([gsapModule, ScrollTriggerModule]) => {
      const gsap = gsapModule.default || gsapModule;
      const ScrollTrigger = ScrollTriggerModule.default || ScrollTriggerModule.ScrollTrigger;
      
      gsap.registerPlugin(ScrollTrigger);

      // Create GSAP context for cleanup
      const ctx = gsap.context(() => {
        if (!contentRef.current || !footerRef.current || !triggerRef.current) return;

        // Get footer height for proper spacing
        const footerHeight = footerRef.current.offsetHeight;
        
        // Add padding to content to create scroll space
        contentRef.current.style.paddingBottom = `${footerHeight -2}px`;

        // Main reveal animation
        gsap.timeline({
          scrollTrigger: {
            trigger: triggerRef.current,
            start: 'bottom bottom', // Start when trigger bottom hits viewport bottom
            end: `+=${footerHeight}`, // Animate for the height of footer
            scrub: 1, // Smooth scrubbing, 1 second delay
            pin: false, // Don't pin, just animate
            anticipatePin: 1,
            invalidateOnRefresh: true, // Recalculate on resize
            markers: false, // Set to true for debugging
          }
        });

      });

      // Cleanup function
      return () => {
        ctx.revert();
      };
    });
  }, []);

  return (
    <div className="relative">
      {/* Fixed Footer - sits at bottom, behind content */}
      <div 
        ref={footerRef}
        className="fixed  bottom-0 left-0 right-0 z-0"
      >
        {footer}
      </div>

      {/* Content Wrapper - slides up to reveal footer */}
      <div 
        ref={contentRef}
        className="relative z-10   will-change-transform"
        style={{ 
          transformOrigin: 'center top',
        }}
      >
        {children}
        
        {/* Trigger point - placed at the end of content */}
        <div 
          ref={triggerRef}
          className="h-px w-full"
          aria-hidden="true"
        />
      </div>
    </div>
  );
}
