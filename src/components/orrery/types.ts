export type Rgb = { r: number; g: number; b: number };

/**
 * A body and everything that orbits it. The root body passed to `Orrery` is
 * the sun, centred on the top edge of the viewport.
 */
export type CelestialBody = {
  name: string;
  color: Rgb;
  /** Drawn diameter in px, despite the name. */
  radius: number;
  /** Orbital radius is `distance + radius`, so a larger body sits further out. */
  distance: number;
  /** Orbital period. Tuned for how the motion looks, not astronomical. */
  days: number;
  /**
   * Start position as a fraction of one orbit. Keep planets between 0.25 and
   * 0.75, or they start above the viewport.
   */
  orbitalPhase?: number;
  showOrbitalPath?: boolean;
  satellites?: CelestialBody[] | null;
};
