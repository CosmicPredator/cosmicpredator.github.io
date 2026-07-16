import { useRef } from 'react';
import type { ReactNode } from 'react';

/**
 * Hidden SVG filter that powers the liquid-glass refraction.
 * Rendered once near the app root.
 */
export function LiquidGlassDefs() {
  return (
    <svg aria-hidden width="0" height="0" style={{ position: 'absolute' }}>
      <filter id="liquid-glass-filter" x="-20%" y="-20%" width="140%" height="140%">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.008 0.012"
          numOctaves={2}
          seed={7}
          result="noise"
        >
          <animate
            attributeName="baseFrequency"
            dur="18s"
            values="0.008 0.012; 0.012 0.008; 0.008 0.012"
            repeatCount="indefinite"
          />
        </feTurbulence>
        <feGaussianBlur in="noise" stdDeviation="1.4" result="blurred" />
        <feDisplacementMap
          in="SourceGraphic"
          in2="blurred"
          scale="26"
          xChannelSelector="R"
          yChannelSelector="G"
        />
      </filter>
    </svg>
  );
}

/**
 * Liquid-glass surface with a pointer-tracked specular highlight.
 */
export function GlassCard({
  children,
  className = '',
  float = false,
}: {
  children: ReactNode;
  className?: string;
  float?: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const onMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    el.style.setProperty('--gx', `${((e.clientX - r.left) / r.width) * 100}%`);
    el.style.setProperty('--gy', `${((e.clientY - r.top) / r.height) * 100}%`);
  };

  return (
    <div
      ref={ref}
      onPointerMove={onMove}
      className={`liquid-glass ${float ? 'float-slow' : ''} ${className}`}
    >
      <span className="glass-spec" aria-hidden />
      {children}
    </div>
  );
}
