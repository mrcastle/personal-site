import { useEffect, useState } from "react";

/**
 * Pauses the looping animations: orbits, twinkling, shooting stars, the
 * nebula drift and the name shimmer.
 * WCAG 2.2.2 requires a way to pause moving content that starts on its own
 * and runs longer than five seconds. The orbits run even under the OS
 * "reduce motion" setting because they are slow; this button is the opt-out.
 */
function MotionToggle() {
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("motion-paused", paused);
  }, [paused]);

  return (
    <button
      type="button"
      onClick={() => setPaused((value) => !value)}
      aria-pressed={paused}
      className="panel fixed bottom-4 right-4 z-40 flex items-center gap-2 rounded-full! px-4 py-2 font-mono text-xs text-ink transition hover:border-accent/40 hover:text-accent"
    >
      <svg viewBox="0 0 16 16" className="size-3.5 fill-current" aria-hidden="true">
        {paused ? (
          <path d="M4 2.5v11l9-5.5z" />
        ) : (
          <path d="M3.5 2.5h3v11h-3zM9.5 2.5h3v11h-3z" />
        )}
      </svg>
      {paused ? "Play animation" : "Pause animation"}
    </button>
  );
}

export default MotionToggle;
