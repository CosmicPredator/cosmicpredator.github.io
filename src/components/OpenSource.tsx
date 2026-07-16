import { openSource } from '../data';
import { SectionHeader } from './SectionHeader';
import { Stagger, StaggerItem } from './Reveal';

export function OpenSource() {
  return (
    <section id="opensource" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="04"
          label="contributions"
          title="Open source"
          description="Upstream contributions to tools and libraries I use and believe in."
        />

        <Stagger className="grid md:grid-cols-2 gap-5">
          {openSource.map((c) => {
            const [org, name] = c.repo.split('/');
            return (
              <StaggerItem key={c.repo}>
                <div className="node-card group h-full rounded-xl border border-line bg-ink-900/50 p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-md border border-line bg-ink-850">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-white/60 group-hover:text-accent transition-colors">
                        <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
                      </svg>
                    </span>
                    <div className="leading-tight">
                      <div className="mono-label text-[10px] text-white/35">{org}/</div>
                      <div className="font-semibold text-white group-hover:text-accent transition-colors">{name}</div>
                    </div>
                  </div>
                  <p className="text-sm text-white/50 leading-relaxed">{c.description}</p>
                </div>
              </StaggerItem>
            );
          })}
        </Stagger>
      </div>
    </section>
  );
}
