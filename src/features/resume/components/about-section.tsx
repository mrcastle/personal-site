import { getUserData } from "../../../config/user";

function AboutSection() {
  const { description } = getUserData();

  return (
    <p className="reveal text-lg leading-relaxed text-ink">{description}</p>
  );
}

export default AboutSection;
