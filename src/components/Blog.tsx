import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { SectionHeader } from './SectionHeader';
import { Stagger, StaggerItem } from './Reveal';

const DEV_USER = 'cosmic_predator';
const MAX = 6;

type Article = {
  id: number;
  title: string;
  description: string;
  url: string;
  readable_publish_date: string;
  reading_time_minutes: number;
  positive_reactions_count: number;
  comments_count: number;
  tag_list: string[];
};

type State = {
  articles: Article[];
  loading: boolean;
  error: boolean;
};

function useDevArticles(): State {
  const [state, setState] = useState<State>({ articles: [], loading: true, error: false });

  useEffect(() => {
    let active = true;
    fetch(`https://dev.to/api/articles?username=${DEV_USER}&per_page=${MAX}`)
      .then((r) => (r.ok ? r.json() : Promise.reject(new Error('bad response'))))
      .then((data: Article[]) => {
        if (!active) return;
        setState({ articles: data.slice(0, MAX), loading: false, error: false });
      })
      .catch(() => {
        if (active) setState({ articles: [], loading: false, error: true });
      });
    return () => {
      active = false;
    };
  }, []);

  return state;
}

function BlogSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
      {Array.from({ length: 3 }).map((_, i) => (
        <div key={i} className="rounded-xl border border-line bg-ink-900/50 p-6">
          <div className="h-3 w-24 rounded bg-white/10 animate-pulse" />
          <div className="mt-4 h-5 w-full rounded bg-white/10 animate-pulse" />
          <div className="mt-2 h-5 w-2/3 rounded bg-white/10 animate-pulse" />
          <div className="mt-5 h-3 w-full rounded bg-white/5 animate-pulse" />
          <div className="mt-2 h-3 w-4/5 rounded bg-white/5 animate-pulse" />
        </div>
      ))}
    </div>
  );
}

export function Blog() {
  const { articles, loading, error } = useDevArticles();

  return (
    <section id="blog" className="relative py-14 sm:py-16">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeader
          index="05"
          label="writing"
          title="From the blog"
          description="Long-form notes on Go, distributed systems, and desktop development — published on dev.to."
        />

        {loading && <BlogSkeleton />}

        {!loading && error && (
          <div className="rounded-xl border border-line bg-ink-900/50 p-8 text-center">
            <p className="text-white/50">
              Couldn&apos;t load posts right now.{' '}
              <a
                href={`https://dev.to/${DEV_USER}`}
                target="_blank"
                rel="noreferrer"
                className="text-accent hover:underline"
              >
                Read them on dev.to →
              </a>
            </p>
          </div>
        )}

        {!loading && !error && (
          <>
            <Stagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {articles.map((a) => (
                <StaggerItem key={a.id}>
                  <motion.a
                    href={a.url}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="node-card group flex h-full flex-col rounded-xl border border-line bg-ink-900/50 p-6"
                  >
                    <div className="flex items-center justify-between">
                      <span className="mono-label text-[9px] text-white/35">
                        {a.readable_publish_date}
                      </span>
                      <span className="mono-label text-[9px] text-accent/70">
                        {a.reading_time_minutes} min
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold leading-snug text-white group-hover:text-accent transition-colors">
                      {a.title}
                    </h3>
                    <p className="mt-2 line-clamp-3 flex-1 text-sm text-white/50 leading-relaxed">
                      {a.description}
                    </p>

                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {a.tag_list.slice(0, 4).map((t) => (
                        <span
                          key={t}
                          className="rounded border border-line bg-ink-850/80 px-2 py-0.5 mono-label text-[9px] text-white/55"
                        >
                          #{t}
                        </span>
                      ))}
                    </div>

                    <div className="mt-5 flex items-center gap-4 border-t border-line pt-4 mono-label text-[10px] text-white/40">
                      <span className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-accent">
                          <path d="M12 21s-7-4.35-9.5-8.5C.5 9 2 5.5 5.5 5.5c2 0 3.5 1.5 6.5 4 3-2.5 4.5-4 6.5-4C22 5.5 23.5 9 21.5 12.5 19 16.65 12 21 12 21z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        </svg>
                        {a.positive_reactions_count}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="text-white/40">
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
                        </svg>
                        {a.comments_count}
                      </span>
                      <span className="ml-auto flex items-center gap-1 text-white/30 group-hover:text-accent transition-colors">
                        read
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                          <path d="M5 12h14M13 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </div>
                  </motion.a>
                </StaggerItem>
              ))}
            </Stagger>

            <div className="mt-8 flex justify-center">
              <a
                href={`https://dev.to/${DEV_USER}`}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-md border border-line px-5 py-2.5 mono-label text-[11px] text-white/60 transition-colors hover:border-accent/50 hover:text-accent"
              >
                All posts on dev.to
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" className="transition-transform group-hover:translate-x-0.5">
                  <path d="M7 17L17 7M17 7H8M17 7v9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
