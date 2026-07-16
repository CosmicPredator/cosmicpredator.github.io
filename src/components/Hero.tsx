import { motion } from 'framer-motion';
import { useState } from 'react';
import { profile, socials, stats } from '../data';
import { ProfileCard } from './ProfileCard';

const easing = [0.22, 1, 0.36, 1] as const;

function TypedTag() {
  return (
    <span className="mono-label text-[11px] text-accent">
      systems.engineer
      <span className="ml-0.5 inline-block w-2 h-3.5 -mb-0.5 bg-accent animate-blink" />
    </span>
  );
}

function AnimatedName({
  text,
  className = '',
  baseDelay = 0,
  gradient = false,
}: {
  text: string;
  className?: string;
  baseDelay?: number;
  gradient?: boolean;
}) {
  const chars = text.split('');
  const n = chars.length;
  return (
    <span className={className} aria-label={text}>
      {chars.map((ch, i) => {
        // Give each letter its own slice of one continuous gradient so the
        // per-letter transform (which creates its own layer) doesn't break
        // background-clip: text and turn the letters invisible.
        const style = gradient
          ? {
              backgroundImage:
                'linear-gradient(120deg,#ffffff 0%,#ffbe93 40%,#ff7a5c 72%,#fb7185 100%)',
              backgroundSize: `${n * 100}% 100%`,
              backgroundPosition: `${n > 1 ? (i / (n - 1)) * 100 : 0}% 0`,
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text' as const,
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
            }
          : undefined;
        return (
          <motion.span
            key={i}
            className="inline-block will-change-transform"
            style={style}
            initial={{ opacity: 0, y: '0.5em', rotateX: -70 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            transition={{
              duration: 0.55,
              delay: baseDelay + i * 0.045,
              ease: easing,
            }}
          >
            {ch === ' ' ? '\u00A0' : ch}
          </motion.span>
        );
      })}
    </span>
  );
}

export function Hero() {
  const [hovered, setHovered] = useState(false);
  return (
    <section id="top" className="relative pt-24 sm:pt-32 pb-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-center">
          {/* Left: copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: easing }}
              className="inline-flex items-center gap-2.5 rounded-full border border-line bg-ink-850/60 px-3.5 py-1.5 mb-7"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="mono-label text-[10px] text-white/60">Available for collaboration</span>
            </motion.div>

            <div className="mb-4">
              <TypedTag />
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHovered(true)}
              onMouseLeave={() => setHovered(false)}
              title="Hover me"
              className="cursor-pointer select-none text-4xl sm:text-6xl lg:text-[4.2rem] font-extrabold leading-[1.02] tracking-tight [perspective:800px]"
            >
              <AnimatedName
                key={hovered ? 'Cosmic' : 'Baranikumar'}
                text={hovered ? 'Cosmic' : 'Baranikumar'}
                className="text-white"
                baseDelay={0.05}
              />
              <br />
              <AnimatedName
                key={hovered ? 'Predator' : 'Srinivasan'}
                text={hovered ? 'Predator' : 'Srinivasan'}
                baseDelay={0.14}
                gradient
              />
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: easing }}
              className="mt-6 max-w-xl text-lg text-white/55 leading-relaxed"
            >
              {profile.summary}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25, ease: easing }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#projects"
                className="group relative overflow-hidden rounded-md bg-accent px-6 py-3 text-sm font-semibold text-ink-950"
              >
                <span className="absolute inset-0 translate-y-full bg-accent-blue transition-transform duration-300 group-hover:translate-y-0" />
                <span className="relative flex items-center gap-2">
                  View work
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-1">
                    <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
              <a
                href="#contact"
                className="rounded-md border border-line px-6 py-3 text-sm font-semibold text-white/80 transition-colors hover:border-accent/50 hover:text-white"
              >
                Contact me
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2"
            >
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-1.5 mono-label text-[11px] text-white/40 hover:text-accent transition-colors"
                >
                  <span className="h-1 w-1 rounded-full bg-white/30 group-hover:bg-accent transition-colors" />
                  {s.label}
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right: diagram */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.97 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2, ease: easing }}
          >
            <ProfileCard />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easing }}
          className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-px overflow-hidden rounded-xl border border-line bg-line"
        >
          {stats.map((s) => (
            <div key={s.label} className="bg-ink-900/80 px-5 py-6 text-center sm:text-left">
              <div className="text-3xl font-bold text-white">{s.value}</div>
              <div className="mono-label mt-1 text-[10px] text-white/40">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
