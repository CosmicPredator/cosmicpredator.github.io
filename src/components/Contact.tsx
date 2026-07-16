import { motion } from 'framer-motion';
import { profile, socials } from '../data';

export function Contact() {
  return (
    <section id="contact" className="relative py-16 sm:py-24">
      {/* framing corner ticks */}
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="diagram-frame relative overflow-hidden rounded-2xl px-6 py-14 sm:px-14 sm:py-20 text-center"
        >
          <div className="absolute inset-0 -z-10 bg-blueprint opacity-40" />
          <div className="absolute inset-x-0 top-0 h-40 glow-radial" />

          <span className="mono-label text-[11px] text-accent">// get in touch</span>
          <h2 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight">
            <span className="text-white">Let&apos;s connect</span>
            <br />
            <span className="text-gradient">and build together</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-white/55 leading-relaxed">
            Thanks for scrolling through my work. Whether it&apos;s a systems problem, an
            open-source idea, or just a chat about Go and distributed systems — my inbox is always open.
          </p>

          <div className="mt-9 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="group relative overflow-hidden rounded-md bg-accent px-7 py-3.5 text-sm font-semibold text-ink-950"
            >
              <span className="absolute inset-0 translate-y-full bg-accent-blue transition-transform duration-300 group-hover:translate-y-0" />
              <span className="relative flex items-center gap-2">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                  <path d="M3 7l9 6 9-6M3 7v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                {profile.email}
              </span>
            </a>
          </div>

          <div className="mono-label mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[11px] text-white/40">
            <span>{profile.location}</span>
            <span className="hidden sm:inline text-white/20">·</span>
            <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
              {profile.phone}
            </a>
          </div>
        </motion.div>

        {/* footer */}
        <footer className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-line pt-8 sm:flex-row">
          <div className="mono-label text-[11px] text-white/35">
            © {new Date().getFullYear()} Baranikumar Srinivasan — built with Go-grade care.
          </div>
          <div className="flex items-center gap-5">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.url}
                target="_blank"
                rel="noreferrer"
                className="mono-label text-[11px] text-white/40 hover:text-accent transition-colors"
              >
                {s.label}
              </a>
            ))}
          </div>
        </footer>
      </div>
    </section>
  );
}
