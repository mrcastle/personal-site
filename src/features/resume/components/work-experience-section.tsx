import { getExperiences } from "../data/experience";
import ExperienceEntry from "./experience-entry";
import SectionHeading, { type SectionProps } from "./section-heading";

import "./experience.css";

function WorkExperienceSection(props: SectionProps) {
  const experiences = getExperiences();

  return (
    <section
      id={props.id}
      aria-labelledby={`${props.id}-heading`}
      className="panel scroll-mt-24 p-6 sm:p-8"
    >
      <SectionHeading {...props} />
      <ol className="timeline space-y-2">
        {experiences.map((experience) => (
          <li
            key={`${experience.company}-${experience.duration}`}
            className="reveal"
          >
            <ExperienceEntry experience={experience} />
          </li>
        ))}
      </ol>
    </section>
  );
}

export default WorkExperienceSection;
