import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import { getUserData } from "../data/user";
import IconLink from "./icon-link";
import SectionNav, { type Section } from "./section-nav";

import "./site-header.css";

type SiteHeaderProps = {
  sections: Section[];
};

/**
 * The left column on large screens: one panel, pinned and vertically
 * centred while the right column scrolls. On small screens it is a normal
 * panel at the top of the page.
 */
function SiteHeader({ sections }: SiteHeaderProps) {
  const { name, introduction, github, linkedin } = getUserData();

  return (
    <header className="lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[42%] lg:items-center">
      <div className="panel w-full p-7 sm:p-8">
        <p className="font-mono text-sm text-accent">
          {introduction}
        </p>
        <h1 className="name-gradient mt-2 font-display text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl">
          {name}
        </h1>

        <ul className="mt-5 flex flex-wrap gap-x-6 gap-y-2" aria-label="Profiles">
          <li>
            <IconLink icon={faGithub} url={github} label="GitHub" />
          </li>
          <li>
            <IconLink icon={faLinkedin} url={linkedin} label="LinkedIn" />
          </li>
        </ul>

        <SectionNav sections={sections} />
      </div>
    </header>
  );
}

export default SiteHeader;
