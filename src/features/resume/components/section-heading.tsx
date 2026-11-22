export type SectionProps = {
  id: string;
  sectionNumber: number;
  title: string;
};

function SectionHeading({ id, sectionNumber, title }: SectionProps) {
  return (
    <h2
      id={`${id}-heading`}
      className="mb-8 flex items-center gap-4 font-display text-2xl font-semibold tracking-tight text-ink"
    >
      <span className="font-mono text-sm font-normal text-accent">
        {String(sectionNumber).padStart(2, "0")}.
      </span>
      {title}
      <span
        className="h-px flex-1 bg-gradient-to-r from-white/25 to-transparent"
        aria-hidden="true"
      />
    </h2>
  );
}

export default SectionHeading;
