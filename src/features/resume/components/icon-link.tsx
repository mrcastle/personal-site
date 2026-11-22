import { type IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type IconLinkProps = {
  icon: IconDefinition;
  url: string;
  label: string;
  isEmail?: boolean;
};

export function IconLink({ icon, url, label, isEmail }: IconLinkProps) {
  const href = isEmail ? `mailto:${url}` : url;

  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex items-center gap-3 text-lg font-medium text-ink transition-colors hover:text-accent"
    >
      <FontAwesomeIcon
        icon={icon}
        className="size-7 transition duration-300 group-hover:drop-shadow-[0_0_8px_rgb(110_231_183/0.7)]"
      />
      <span className="underline decoration-ink-muted/40 decoration-1 underline-offset-4 transition-colors group-hover:decoration-accent">
        {label}
      </span>
      <span className="sr-only">(opens in a new tab)</span>
    </a>
  );
}

export default IconLink;
