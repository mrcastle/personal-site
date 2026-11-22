import { getExperiences } from "../data/experience";
import ExperienceEntry from "./experience-entry";
import SectionHeading, { type SectionProps } from "./section-heading";

function WorkExperienceSection(props: SectionProps) {
  const experiences = getExperiences();

  return (
    <section
      id={props.id}
      aria-labelledby={`${props.id}-heading`}
      className="panel scroll-mt-24 p-6 sm:p-8"
    >
      <SectionHeading {...props} />
      {/* The vertical line is the timeline; each entry draws its own star on
          it. group/list lets one hovered entry dim the others. */}
      <ol className="group/list relative space-y-2 ps-6 before:absolute before:inset-y-4 before:left-0 before:w-px before:bg-gradient-to-b before:from-accent/70 before:via-white/20 before:to-transparent">
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
