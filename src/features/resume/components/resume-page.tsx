import { Orrery } from "../../../components/orrery/orrery";
import { SOL } from "../../../components/orrery/solar-system";
import StarField from "../../../components/star-field/star-field";
import HeroSection from "./hero-section";
import WorkExperienceSection from "./work-experience-section";

export function ResumePage() {
  return (
    <>
      <HeroSection />
      <WorkExperienceSection />
      <StarField />
      <Orrery system={SOL} />
    </>
  );
}
