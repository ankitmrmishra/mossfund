import React from 'react';

export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-6 md:px-16 lg:px-24">
      {children}
    </div>
  );
}
