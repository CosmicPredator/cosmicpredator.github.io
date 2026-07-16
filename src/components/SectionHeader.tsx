import { Reveal } from './Reveal';

export function SectionHeader({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="mono-label text-[11px] text-accent">{index}</span>
        <span className="h-px w-8 bg-accent/40" />
        <span className="mono-label text-[11px] text-white/40">{label}</span>
      </div>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 max-w-2xl text-white/50 leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}
