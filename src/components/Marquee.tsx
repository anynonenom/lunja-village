import type { ReactNode } from "react";

interface MarqueeProps {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
}

export function Marquee({ children, reverse = false, className = "" }: MarqueeProps) {
  return (
    <div className={`overflow-hidden whitespace-nowrap ${className}`}>
      <div className={`inline-flex ${reverse ? "marquee-reverse" : "marquee-slow"}`}>
        <div className="inline-flex items-center gap-12 pr-12">{children}</div>
        <div className="inline-flex items-center gap-12 pr-12" aria-hidden="true">
          {children}
        </div>
      </div>
    </div>
  );
}
