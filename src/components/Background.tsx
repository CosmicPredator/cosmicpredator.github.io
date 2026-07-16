import { useEffect, useRef } from 'react';

/**
 * Ambient blueprint background: fine engineering grid + a cursor-tracking
 * spotlight that reveals a brighter accent grid, echoing Zed's technical UI.
 */
export function Background() {
  const spotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let raf = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        if (spotRef.current) {
          spotRef.current.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(255,158,100,0.13), transparent 65%)`;
        }
      });
    };
    window.addEventListener('mousemove', onMove);
    return () => {
      window.removeEventListener('mousemove', onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* ember gradient wash */}
      <div className="absolute inset-0 bg-[radial-gradient(70%_50%_at_15%_-10%,rgba(255,158,100,0.18),transparent_60%),radial-gradient(60%_50%_at_90%_10%,rgba(251,113,133,0.14),transparent_60%),radial-gradient(80%_60%_at_50%_110%,rgba(255,122,92,0.12),transparent_60%)]" />
      <div className="absolute inset-0 bg-blueprint-fine opacity-70" />
      <div className="absolute inset-0 bg-dots opacity-[0.35]" />
      {/* top accent glow */}
      <div className="absolute inset-x-0 top-0 h-[60vh] glow-radial" />
      {/* animated horizon line */}
      <div className="absolute left-0 right-0 top-[52vh] h-px bg-gradient-to-r from-transparent via-accent/25 to-transparent" />
      {/* cursor spotlight */}
      <div ref={spotRef} className="absolute inset-0" />
      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,transparent_55%,#0f0a0d_100%)]" />
    </div>
  );
}
