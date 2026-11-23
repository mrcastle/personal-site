import { experiences } from "@/features/resume/data/experience";
import ExperienceEntry from "./experience-entry";

import "./experience.css";

function WorkExperienceSection() {
  return (
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
  );
}

export default WorkExperienceSection;
