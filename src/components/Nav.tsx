import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

const links = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Stack' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'opensource', label: 'Open Source' },
  { id: 'blog', label: 'Blog' },
  { id: 'contact', label: 'Contact' },
];

export function Nav() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 ${
        scrolled || menuOpen ? 'bg-ink-950/80 backdrop-blur-md border-b border-line' : 'border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-5 sm:px-8 h-16 flex items-center justify-between">
        <a href="#top" onClick={() => setMenuOpen(false)} className="group flex items-center gap-2.5">
          <span className="relative flex h-7 w-7 items-center justify-center">
            <span className="absolute inset-0 rounded-sm border border-accent/50" />
            <span className="absolute inset-0 rounded-sm border border-accent/50 animate-ping opacity-20" />
            <span className="mono-label text-[13px] font-semibold text-accent">B</span>
          </span>
          <span className="mono-label text-[12px] text-white/80 group-hover:text-white transition-colors">
            cosmic<span className="text-accent">_</span>predator
          </span>
        </a>

        <ul className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className="mono-label text-[11px] px-3 py-2 rounded text-white/45 hover:text-accent transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="group relative hidden sm:inline-flex overflow-hidden rounded-md border border-accent/40 px-4 py-2 mono-label text-[11px] text-accent transition-colors hover:text-ink-950"
        >
          <span className="absolute inset-0 -z-0 translate-y-full bg-accent transition-transform duration-300 group-hover:translate-y-0" />
          <span className="relative z-10">Get in touch</span>
        </a>

        {/* mobile menu toggle */}
        <button
          type="button"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
          className="md:hidden relative flex h-9 w-9 items-center justify-center rounded-md border border-line text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
        >
          <span className="relative block h-3.5 w-4">
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-current transition-all duration-200 ${
                menuOpen ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 h-[1.5px] w-full bg-current transition-all duration-300 ${
                menuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-0'
              }`}
            />
          </span>
        </button>
      </nav>

      {/* mobile dropdown menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden border-t border-line bg-ink-950/95 backdrop-blur-md"
          >
            <ul className="mx-auto max-w-6xl px-5 py-3">
              {links.map((l, i) => (
                <motion.li
                  key={l.id}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 + i * 0.04 }}
                >
                  <a
                    href={`#${l.id}`}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-between border-b border-line/60 py-3 mono-label text-[12px] text-white/60 transition-colors hover:text-accent"
                  >
                    <span>{l.label}</span>
                    <span className="text-accent/50">{String(i + 1).padStart(2, '0')}</span>
                  </a>
                </motion.li>
              ))}
            </ul>
            <div className="mx-auto max-w-6xl px-5 pb-4">
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="block rounded-md bg-accent px-4 py-3 text-center text-sm font-semibold text-ink-950"
              >
                Get in touch
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        style={{ scaleX }}
        className="absolute bottom-0 left-0 right-0 h-px origin-left bg-gradient-to-r from-accent via-accent-blue to-accent"
      />
    </motion.header>
  );
}
