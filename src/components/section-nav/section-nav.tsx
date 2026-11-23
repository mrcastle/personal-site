import { useEffect, useState } from "react";

import type { Section } from "@/types/section";
import { formatSectionNumber } from "@/utils/section-number";

import "./section-nav.css";

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
              className="nav-link flex items-center gap-4 py-2"
            >
              <span className="nav-number font-mono text-xs">
                {formatSectionNumber(index + 1)}
              </span>
              <span className="nav-dash" />
              <span className="nav-label font-mono text-xs uppercase tracking-[0.2em]">
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
