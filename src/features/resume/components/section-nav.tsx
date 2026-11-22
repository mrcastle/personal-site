import { useEffect, useState } from "react";

export type Section = {
  id: string;
  label: string;
};

type SectionNavProps = {
  sections: Section[];
};

/** How far down the viewport a section's top must pass to become current. */
const ACTIVE_LINE = 0.35;

/**
 * In-page nav that marks the current section: the last one whose top has
 * scrolled above ACTIVE_LINE.
 */
function SectionNav({ sections }: SectionNavProps) {
  const [activeId, setActiveId] = useState(sections[0]?.id);

  useEffect(() => {
    let frame = 0;

    const update = () => {
      const line = window.innerHeight * ACTIVE_LINE;
      let current = sections[0]?.id;
      for (const { id } of sections) {
        const element = document.getElementById(id);
        if (element && element.getBoundingClientRect().top <= line) {
          current = id;
        }
      }
      setActiveId(current);
    };

    // Coalesce scroll and resize events into one measurement per frame.
    const onChange = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onChange, { passive: true });
    window.addEventListener("resize", onChange);
    return () => {
      window.removeEventListener("scroll", onChange);
      window.removeEventListener("resize", onChange);
      cancelAnimationFrame(frame);
    };
  }, [sections]);

  return (
    <nav aria-label="Sections" className="mt-6 hidden border-t border-line pt-3 lg:block">
      <ol className="w-max">
        {sections.map(({ id, label }, index) => (
          <li key={id}>
            <a
              href={`#${id}`}
              aria-current={activeId === id ? "location" : undefined}
              className="group flex items-center gap-4 py-2"
            >
              <span className="font-mono text-xs text-ink-muted transition-colors group-hover:text-accent group-aria-[current=location]:text-accent">
                {String(index + 1).padStart(2, "0")}
              </span>
              <span className="h-px w-8 bg-ink-muted/60 transition-all duration-300 group-hover:w-16 group-hover:bg-accent group-aria-[current=location]:w-16 group-aria-[current=location]:bg-accent group-aria-[current=location]:shadow-[0_0_8px_var(--color-accent)]" />
              <span className="font-mono text-xs uppercase tracking-[0.2em] text-ink-muted transition-colors group-hover:text-ink group-aria-[current=location]:text-ink">
                {label}
              </span>
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}

export default SectionNav;
