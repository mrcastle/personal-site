import type { WorkExperience } from "../data/experience";

type ExperienceEntryProps = {
  experience: WorkExperience;
};

function ExperienceEntry({ experience }: ExperienceEntryProps) {
  const { company, role, duration, description, skills } = experience;

  return (
    <article className="group relative rounded-xl p-4 transition duration-300 hover:bg-white/[0.04] lg:group-hover/list:opacity-50 lg:hover:opacity-100!">
      {/* The star on the timeline. The line runs 1.5rem (the list padding)
          to the left of this entry. */}
      <span
        className="absolute -left-6 top-6 size-2 -translate-x-1/2 rounded-full bg-white shadow-[0_0_8px_2px_rgb(255_255_255/0.5)] transition duration-300 group-hover:scale-150 group-hover:bg-accent group-hover:shadow-[0_0_14px_4px_rgb(110_231_183/0.6)]"
        aria-hidden="true"
      />

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
