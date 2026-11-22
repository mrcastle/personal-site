import { getUserData } from "../data/user";
import SectionHeading, { type SectionProps } from "./section-heading";

function AboutSection(props: SectionProps) {
  const { description } = getUserData();

  return (
    <section
      id={props.id}
      aria-labelledby={`${props.id}-heading`}
      className="panel reveal scroll-mt-24 p-6 sm:p-8"
    >
      <SectionHeading {...props} />
      <p className="text-lg leading-relaxed text-ink">{description}</p>
    </section>
  );
}

export default AboutSection;
