import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft, Search } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Number with gradient */}
        <div className="mb-8">
          <h1 className="font-display text-[150px] md:text-[200px] leading-none bg-gradient-to-br from-accent via-stream to-accent bg-clip-text text-transparent">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="mb-12 space-y-4">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground">
            Page Not Found
          </h2>
          <p className="font-body text-lg text-muted max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved. 
            Let's get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button asChild size="lg" variant="default">
            <Link href="/">
              <Home className="w-4 h-4" />
              Go Home
            </Link>
          </Button>
          
          <Button asChild size="lg" variant="outline">
            <Link href="/#bento">
              <Search className="w-4 h-4" />
              Explore Repos
            </Link>
          </Button>
        </div>

        {/* Decorative Element */}
        <div className="mt-16 flex justify-center gap-2">
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <div className="w-2 h-2 rounded-full bg-stream animate-pulse delay-75" />
          <div className="w-2 h-2 rounded-full bg-accent animate-pulse delay-150" />
        </div>

        {/* Quick Links */}
        <div className="mt-12 pt-8 border-t border-border">
          <p className="font-body text-sm text-muted mb-4">Quick Links</p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link 
              href="/#how-it-works" 
              className="font-body text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              How It Works
            </Link>
            <Link 
              href="/#cta" 
              className="font-body text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              Stake
            </Link>
            <Link 
              href="/#governance" 
              className="font-body text-sm text-foreground/60 hover:text-accent transition-colors"
            >
              Governance
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
