import type { ReactNode } from "react";

import { formatSectionNumber } from "../../utils/section-number";

type PageSectionProps = {
  id: string;
  sectionNumber: number;
  title: string;
  children: ReactNode;
};

function PageSection({ id, sectionNumber, title, children }: PageSectionProps) {
  const headingId = `${id}-heading`;

  return (
    <section
      id={id}
      aria-labelledby={headingId}
      className="panel scroll-mt-24 p-6 sm:p-8"
    >
      <h2
        id={headingId}
        className="mb-8 flex items-center gap-4 font-display text-2xl font-semibold tracking-tight text-ink"
      >
        <span className="font-mono text-sm font-normal text-accent">
          {formatSectionNumber(sectionNumber)}.
        </span>
        {title}
        <span
          className="h-px flex-1 bg-linear-to-r from-white/25 to-transparent"
          aria-hidden="true"
        />
      </h2>
      {children}
    </section>
  );
}

export default PageSection;
