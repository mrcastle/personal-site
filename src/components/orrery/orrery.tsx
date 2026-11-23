import type { CSSProperties } from "react";
import "./orrery.css";
import { orbitDuration } from "./timing.ts";
import type { CelestialBody, Rgb } from "./types.ts";

declare module "react" {
  interface CSSProperties {
    /** Lets style objects set custom properties such as `--color` without a cast. */
    [key: `--${string}`]: string | number | undefined;
  }
}

type OrreryProps = {
  system: CelestialBody;
  /** Any CSS colour. Defaults to `--orbital-path-color` in orrery.css. */
  pathColor?: string;
};

function toRgb({ r, g, b }: Rgb): string {
  return `rgb(${r} ${g} ${b})`;
}

function bodyVars(body: CelestialBody): CSSProperties {
  return {
    "--color": toRgb(body.color),
    "--diameter": `${body.diameter}px`,
    "--distance": `${body.distance}px`,
    "--orbit-time": orbitDuration(body.days),
    "--orbital-phase": body.orbitalPhase ?? 0,
  };
}

function CelestialBodyView({ body }: { body: CelestialBody }) {
  return (
    <div className="celestial-body-wrapper" style={bodyVars(body)}>
      {body.showOrbitalPath && <div className="orbital-path" />}
      <div className="celestial-body">
        {body.satellites?.map((satellite) => (
          <CelestialBodyView key={satellite.name} body={satellite} />
        ))}
      </div>
    </div>
  );
}

function Orrery({ system, pathColor }: OrreryProps) {
  const style: CSSProperties = {
    "--sun-color": toRgb(system.color),
    "--sun-diameter": `${system.diameter}px`,
  };
  if (pathColor) style["--orbital-path-color"] = pathColor;

  return (
    <div className="orrery" aria-hidden="true" style={style}>
      <div className="solar-system-wrapper">
        <div className="sun-wrapper">
          <div className="sun" />
        </div>
        {system.satellites?.map((satellite) => (
          <CelestialBodyView key={satellite.name} body={satellite} />
        ))}
      </div>
    </div>
  );
}

export default Orrery;
