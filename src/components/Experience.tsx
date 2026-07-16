import { motion } from 'framer-motion';
import { experience } from '../data';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function Experience() {
  return (
    <section id="experience" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="02"
          label="timeline"
          title="Experience"
          description="Shipping mission-critical systems and AI workflows in production."
        />

        <div className="relative">
          {/* vertical rail */}
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-gradient-to-b from-accent/50 via-line to-transparent md:left-[calc(180px+7px)]" />

          <div className="space-y-10">
            {experience.map((job, i) => (
              <Reveal key={job.company} delay={i * 0.05}>
                <div className="relative pl-8 md:grid md:grid-cols-[180px_1fr] md:gap-8 md:pl-0">
                  {/* period */}
                  <div className="md:text-right md:pr-8">
                    <div className="mono-label text-[11px] text-accent">{job.period}</div>
                    <div className="mono-label mt-1 text-[10px] text-white/35">{job.location}</div>
                  </div>

                  {/* node dot */}
                  <span className="absolute left-0 top-1 flex h-4 w-4 items-center justify-center md:left-[180px]">
                    <span className="absolute h-4 w-4 rounded-full border border-accent/50" />
                    <span className="h-2 w-2 rounded-full bg-accent" />
                    {job.current && (
                      <span className="absolute h-4 w-4 rounded-full bg-accent/40 animate-ping" />
                    )}
                  </span>

                  {/* content */}
                  <div className="node-card rounded-xl border border-line bg-ink-900/50 p-6 md:ml-4">
                    <div className="flex flex-wrap items-center gap-3">
                      <h3 className="text-lg font-semibold text-white">{job.company}</h3>
                      {job.current && (
                        <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 mono-label text-[9px] text-accent">
                          current
                        </span>
                      )}
                    </div>
                    <div className="mono-label mt-1 text-[11px] text-white/45">{job.title}</div>
                    <ul className="mt-4 space-y-3">
                      {job.points.map((p, pi) => (
                        <motion.li
                          key={pi}
                          initial={{ opacity: 0, x: -8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: 0.1 + pi * 0.08 }}
                          className="flex gap-3 text-sm text-white/55 leading-relaxed"
                        >
                          <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent/70" />
                          {p}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
