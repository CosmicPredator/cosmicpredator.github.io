import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const GH_USER = 'CosmicPredator';
const WEEKS = 18;

const specs = [
  { k: 'Role', v: 'Associate Software Developer' },
  { k: 'Company', v: 'United Parcel Service' },
  { k: 'Location', v: 'Chennai, India' },
  { k: 'Focus', v: 'Distributed Systems · Go' },
];

const chips = ['Go', 'Rust', '.NET', 'NATS', 'Docker', 'Linux'];

// fallback bars if GitHub can't be reached
const fallback = [3, 5, 2, 6, 4, 7, 5, 8, 6, 9, 7, 8, 5, 9, 6, 8, 7, 9];

const easing = [0.22, 1, 0.36, 1] as const;

type ContribState = {
  weeks: number[];
  total: number | null;
  live: boolean;
  loading: boolean;
};

function useGithubContributions(): ContribState {
  const [state, setState] = useState<ContribState>({
    weeks: fallback,
    total: null,
    live: false,
    loading: true,
  });

  useEffect(() => {
    let active = true;
    fetch(`https://github-contributions-api.jogruber.de/v4/${GH_USER}?y=last`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad response'))))
      .then((data: { contributions: { date: string; count: number }[] }) => {
        if (!active) return;
        const days = data.contributions ?? [];
        const window = days.slice(-WEEKS * 7);
        const buckets: number[] = [];
        for (let i = 0; i < window.length; i += 7) {
          buckets.push(window.slice(i, i + 7).reduce((s, d) => s + d.count, 0));
        }
        const total = days.reduce((s, d) => s + d.count, 0);
        setState({
          weeks: buckets.length ? buckets : fallback,
          total,
          live: buckets.length > 0,
          loading: false,
        });
      })
      .catch(() => {
        if (active) setState((s) => ({ ...s, loading: false }));
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}

export function ProfileCard() {
  const { weeks, total, live, loading } = useGithubContributions();
  const max = Math.max(1, ...weeks);

  return (
    <div className="diagram-frame overflow-hidden rounded-xl text-left">
      {/* header */}
      <div className="flex items-center justify-between border-b border-line bg-ink-850/60 px-4 py-2.5">
        <span className="mono-label text-[10px] text-white/35">profile.card</span>
        <span className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span className="mono-label text-[10px] text-accent/80">online</span>
        </span>
      </div>

      <div className="p-5 sm:p-6">
        {/* spec table */}
        <div className="divide-y divide-line rounded-lg border border-line">
          {specs.map((s, i) => (
            <motion.div
              key={s.k}
              initial={{ opacity: 0, x: 10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.08, ease: easing }}
              className="flex items-center justify-between gap-3 px-3.5 py-2.5"
            >
              <span className="mono-label text-[9px] text-white/35">{s.k}</span>
              <span className="truncate text-right text-[12px] text-white/75">{s.v}</span>
            </motion.div>
          ))}
        </div>

        {/* github activity sparkline */}
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between">
            <a
              href={`https://github.com/${GH_USER}`}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-1.5 mono-label text-[9px] text-white/35 hover:text-accent transition-colors"
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" className="opacity-70 group-hover:opacity-100">
                <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.3 3.44 9.8 8.2 11.4.6.1.82-.26.82-.58v-2c-3.34.73-4.04-1.6-4.04-1.6-.55-1.4-1.34-1.77-1.34-1.77-1.1-.75.08-.73.08-.73 1.2.08 1.84 1.24 1.84 1.24 1.07 1.84 2.8 1.3 3.49 1 .1-.78.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.96 0-1.32.47-2.4 1.24-3.24-.12-.3-.54-1.53.12-3.18 0 0 1-.32 3.3 1.24a11.5 11.5 0 0 1 6 0c2.3-1.56 3.3-1.24 3.3-1.24.66 1.65.24 2.88.12 3.18.77.84 1.24 1.92 1.24 3.24 0 4.63-2.8 5.65-5.48 5.95.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.57C20.56 22.3 24 17.8 24 12.5 24 5.87 18.63.5 12 .5Z" />
              </svg>
              @{GH_USER}
            </a>
            <span className="mono-label text-[9px] text-accent/70">
              {loading
                ? 'syncing…'
                : total != null
                  ? `${total} contributions / yr`
                  : `last ${WEEKS} weeks`}
            </span>
          </div>
          <div className="flex h-14 items-end gap-1">
            {weeks.map((count, i) => (
              <motion.span
                key={i}
                className={`flex-1 rounded-sm bg-gradient-to-t ${
                  loading ? 'from-white/10 to-white/20 animate-pulse' : 'from-accent/30 to-accent'
                }`}
                initial={{ height: 0, opacity: 0 }}
                animate={{
                  height: `${Math.max(6, (count / max) * 100)}%`,
                  opacity: 1,
                }}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.03, ease: easing }}
                title={`${count} contributions`}
              />
            ))}
          </div>
          {live && (
            <div className="mt-1.5 flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-accent animate-pulse" />
              <span className="mono-label text-[8px] text-white/25">synced from github</span>
            </div>
          )}
        </div>

        {/* tech chips */}
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
          {chips.map((t) => (
            <span
              key={t}
              className="rounded-md border border-line bg-ink-850/80 px-2.5 py-1 mono-label text-[10px] text-white/65"
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* footer status */}
      <div className="flex items-center justify-between border-t border-line bg-ink-850/60 px-4 py-2">
        <span className="mono-label text-[9px] text-white/30">est. 2024 — present</span>
        <span className="mono-label text-[9px] text-accent/70">open to collaborate</span>
      </div>
    </div>
  );
}
