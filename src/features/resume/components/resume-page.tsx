import type { ComponentType } from "react";

import MotionToggle from "../../../components/motion-toggle/motion-toggle";
import { Orrery } from "../../../components/orrery/orrery";
import { SOL } from "../../../components/orrery/solar-system";
import StarField from "../../../components/star-field/star-field";
import AboutSection from "./about-section";
import type { SectionProps } from "./section-heading";
import type { Section } from "./section-nav";
import SiteHeader from "./site-header";
import WorkExperienceSection from "./work-experience-section";

/**
 * The page sections, in order. The nav and the sections both read their ids,
 * numbers and titles from here, so reordering this list keeps them in step.
 */
const SECTIONS: (Section & { Component: ComponentType<SectionProps> })[] = [
  { id: "about", label: "About", Component: AboutSection },
  { id: "experience", label: "Experience", Component: WorkExperienceSection },
];

export function ResumePage() {
  return (
    <>
      <a
        href="#content"
        className="fixed left-4 top-4 z-50 -translate-y-24 rounded-md bg-accent px-4 py-2 font-mono text-sm text-slate-950 transition focus:translate-y-0"
      >
        Skip to content
      </a>

      <StarField />
      <Orrery system={SOL} />

      <div className="mx-auto min-h-screen max-w-7xl px-4 py-12 sm:px-10 lg:px-16 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-12">
          <SiteHeader sections={SECTIONS} />
          <main id="content" className="space-y-8 pt-8 lg:w-[56%] lg:py-28">
            {SECTIONS.map(({ id, label, Component }, index) => (
              <Component key={id} id={id} index={index + 1} title={label} />
            ))}
          </main>
        </div>
      </div>

      <MotionToggle />
    </>
  );
}
