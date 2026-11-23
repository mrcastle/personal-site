import { user } from "@/config/user";

function AboutSection() {
  return (
    <p className="reveal text-lg leading-relaxed text-ink">{user.description}</p>
  );
}

export default AboutSection;
