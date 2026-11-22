import type { WorkExperience } from "../data/experience";

type ExperienceEntryProps = {
  experience: WorkExperience;
};

function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const { company, role, duration, description, skills } = experience;

  return (
    <article className="experience-entry group relative rounded-xl p-4">
      <span className="timeline-star" aria-hidden="true" />

      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        {duration}
      </p>
      <h3 className="mt-2 font-display text-xl font-semibold text-ink transition-colors group-hover:text-accent">
        {role}
      </h3>
      <p className="text-ink-muted">{company}</p>
      <p className="mt-3 text-sm leading-relaxed text-ink">{description}</p>

      <ul className="mt-4 flex flex-wrap gap-2" aria-label="Skills">
        {skills.map((skill) => (
          <li
            key={skill}
            className="rounded-full border border-accent/25 bg-accent/10 px-3 py-1 font-mono text-xs text-emerald-200"
          >
            {skill}
          </li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceEntry;
