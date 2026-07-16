import { skillGroups } from '../data';
import { SectionHeader } from './SectionHeader';
import { Stagger, StaggerItem } from './Reveal';

const marqueeTech = [
  'Go', 'Rust', '.NET', 'Python 3', 'NATS', 'Docker', 'Linux', 'Systemd',
  'Grafana', 'Bash', 'Avalonia UI', 'Slint', 'GPUI', 'GTK3', 'Agentic AI',
  'Semantic Kernel', 'LangChain', 'LangSmith', 'ChromaDB', 'Azure AI', 'Vertex AI',
];

export function Skills() {
  return (
    <section id="skills" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="01"
          label="capabilities"
          title="Engineering stack"
          description="A toolkit tuned for building resilient distributed systems, fast command-line tooling, and native desktop apps."
        />

        <Stagger className="grid md:grid-cols-3 gap-5">
          {skillGroups.map((group, gi) => (
            <StaggerItem key={group.id} className={group.id === 'ai' ? 'md:col-span-3' : ''}>
              <div className="node-card group relative h-full rounded-xl border border-line bg-ink-900/50 p-6">
                <div className="flex items-center justify-between mb-5">
                  <span className="mono-label text-[10px] text-white/35">
                    node.{String(gi + 1).padStart(2, '0')}
                  </span>
                  <span className="h-2 w-2 rounded-full bg-accent/60 group-hover:bg-accent transition-colors" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-4">{group.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-line bg-ink-850/80 px-2.5 py-1 mono-label text-[10px] text-white/70 transition-colors hover:border-accent/50 hover:text-accent"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <div className="mt-6 h-px w-full bg-gradient-to-r from-accent/40 via-line to-transparent scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>

      {/* marquee */}
      <div className="mt-16 relative overflow-hidden border-y border-line py-5 [mask-image:linear-gradient(90deg,transparent,#000_12%,#000_88%,transparent)]">
        <div className="marquee-track flex w-max gap-10">
          {[...marqueeTech, ...marqueeTech].map((t, i) => (
            <span key={i} className="flex items-center gap-10 mono-label text-sm text-white/30">
              {t}
              <span className="h-1 w-1 rounded-full bg-accent/50" />
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
