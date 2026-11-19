/** Seconds of animation per orbital day. At 0.33, Earth's orbit takes about two minutes. */
const SECONDS_PER_DAY_OF_ORBIT = 0.33;

/** A body's `days` as a CSS duration for --orbit-time. */
export function orbitDuration(days: number): string {
  return `${(days * SECONDS_PER_DAY_OF_ORBIT).toFixed(2)}s`;
}
