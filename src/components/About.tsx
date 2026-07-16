import { profile } from '../data';
import { SectionHeader } from './SectionHeader';
import { Reveal } from './Reveal';

const lines = [
  { cmd: 'whoami', out: `${profile.name} · ${profile.role}` },
  { cmd: 'cat ~/mission.txt', out: profile.summary },
  { cmd: 'uptime', out: 'shipping distributed systems @ UPS since Jan 2024' },
  { cmd: 'echo $FOCUS', out: 'Go microservices · event-driven arch · GenAI workflows' },
];

export function About() {
  return (
    <section id="about" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader index="00" label="readme" title="About" />

        <Reveal>
          <div className="diagram-frame overflow-hidden rounded-xl">
            {/* terminal chrome */}
            <div className="flex items-center gap-2 border-b border-line bg-ink-850/70 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
              <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
              <span className="h-3 w-3 rounded-full bg-[#28c840]" />
              <span className="mono-label ml-3 text-[10px] text-white/35">bash — ~/portfolio</span>
            </div>

            <div className="space-y-4 p-6 font-mono text-sm sm:p-8">
              {lines.map((l) => (
                <div key={l.cmd}>
                  <div className="flex items-center gap-2 text-white/80">
                    <span className="text-accent">➜</span>
                    <span className="text-accent-blue">~</span>
                    <span>{l.cmd}</span>
                  </div>
                  <p className="mt-1.5 pl-6 text-white/50 leading-relaxed">{l.out}</p>
                </div>
              ))}
              <div className="flex items-center gap-2 text-white/80">
                <span className="text-accent">➜</span>
                <span className="text-accent-blue">~</span>
                <span className="inline-block h-4 w-2 bg-accent animate-blink" />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
