import { motion } from 'framer-motion';
import { projects } from '../data';
import { SectionHeader } from './SectionHeader';
import { Stagger, StaggerItem } from './Reveal';

export function Projects() {
  return (
    <section id="projects" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="03"
          label="build_log"
          title="Selected projects"
          description="Personal tooling spanning CLIs, backends, and native desktop apps."
        />

        <Stagger className="grid sm:grid-cols-2 gap-5">
          {projects.map((p, i) => (
            <StaggerItem key={p.name}>
              <motion.a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -4 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="node-card group relative flex h-full flex-col overflow-hidden rounded-xl border border-line bg-ink-900/50 p-6"
              >
                {/* faint index watermark */}
                <span className="pointer-events-none absolute -right-2 -top-4 text-7xl font-bold text-white/[0.03] mono-label">
                  {String(i + 1).padStart(2, '0')}
                </span>

                <div className="flex items-center justify-between">
                  <span className="rounded border border-line bg-ink-850/80 px-2 py-1 mono-label text-[9px] text-accent">
                    {p.stack}
                  </span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none"
                    className="text-white/30 transition-all duration-300 group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  >
                    <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white group-hover:text-accent transition-colors">
                  {p.name}
                </h3>
                <p className="mt-2 text-sm text-white/50 leading-relaxed">{p.description}</p>

                <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/50 to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </motion.a>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
