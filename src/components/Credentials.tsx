import { motion } from 'framer-motion';
import { education, certifications, awards, languages } from '../data';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

export function Credentials() {
  return (
    <section id="credentials" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="06" label="record" title="Credentials & background" />

        <div className="grid lg:grid-cols-2 gap-5">
          {/* Education */}
          <Reveal className="lg:col-span-2">
            <div className="rounded-xl border border-line bg-ink-900/40 p-6">
              <span className="mono-label text-[10px] text-white/35">education</span>
              <div className="mt-4 grid md:grid-cols-2 gap-4">
                {education.map((e) => (
                  <div key={e.school} className="node-card rounded-lg border border-line bg-ink-850/60 p-5">
                    <div className="flex items-start justify-between gap-3">
                      <h3 className="font-semibold text-white">{e.school}</h3>
                      <span className="rounded border border-accent/40 bg-accent/10 px-2 py-0.5 mono-label text-[9px] text-accent whitespace-nowrap">
                        {e.score}
                      </span>
                    </div>
                    <div className="mt-2 text-sm text-white/55">{e.field}</div>
                    <div className="mono-label mt-2 text-[10px] text-white/35">
                      {e.degree} · {e.period}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Certifications */}
          <Reveal>
            <div className="h-full rounded-xl border border-line bg-ink-900/40 p-6">
              <span className="mono-label text-[10px] text-white/35">certifications</span>
              <ul className="mt-4 space-y-3">
                {certifications.map((c) => (
                  <li
                    key={c.name}
                    className="node-card flex items-start gap-3 rounded-lg border border-line bg-ink-850/60 p-4"
                  >
                    <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded border border-accent/40 bg-accent/10">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-accent">
                        <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    <div>
                      <div className="text-sm font-medium text-white leading-snug">{c.name}</div>
                      <div className="mono-label mt-1 text-[10px] text-white/35">
                        {c.issuer} · {c.date}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          {/* Right column: awards + languages */}
          <div className="grid gap-5">
            <Reveal delay={0.05}>
              <div className="rounded-xl border border-line bg-ink-900/40 p-6">
                <span className="mono-label text-[10px] text-white/35">awards</span>
                <div className="mt-4 space-y-3">
                  {awards.map((a) => (
                    <div key={a.name} className="node-card flex items-center gap-3 rounded-lg border border-line bg-ink-850/60 p-4">
                      <span className="flex h-8 w-8 items-center justify-center rounded-md bg-accent-amber/15 text-accent-amber">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                          <path d="M12 15a5 5 0 100-10 5 5 0 000 10zM8.5 13.5L7 22l5-3 5 3-1.5-8.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">{a.name}</div>
                        <div className="mono-label mt-0.5 text-[10px] text-white/35">{a.issuer} · {a.date}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="rounded-xl border border-line bg-ink-900/40 p-6">
                <span className="mono-label text-[10px] text-white/35">languages</span>
                <div className="mt-5 space-y-4">
                  {languages.map((l, i) => (
                    <div key={l.name}>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-sm text-white/80">{l.name}</span>
                        <span className="mono-label text-[10px] text-white/35">{l.level}</span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-700">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${l.value}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
