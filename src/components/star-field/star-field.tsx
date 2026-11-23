import { useState } from "react";

import "./star-field.css";

type Star = {
  top: number;
  left: number;
  size: number;
  /** One of the six twinkle timings in star-field.css. */
  twinkle: number;
};

/**
 * A depth layer. Far layers hold many small stars and move little on
 * scroll; near layers hold a few large stars and move more, which reads as
 * parallax depth.
 */
type Layer = {
  name: "far" | "mid" | "near";
  count: number;
  sizes: number[];
  /** How far the layer drifts up over a full page scroll, in vh. */
  travel: number;
};

const LAYERS: Layer[] = [
  { name: "far", count: 200, sizes: [1, 1, 1.5], travel: 6 },
  { name: "mid", count: 80, sizes: [1.5, 2, 2.5], travel: 18 },
  { name: "near", count: 24, sizes: [2.5, 3, 3.5], travel: 36 },
];

function random(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function pick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)];
}

function generateStars({ count, sizes }: Layer): Star[] {
  return Array.from({ length: count }, () => ({
    top: random(0, 100),
    left: random(0, 100),
    size: pick(sizes),
    twinkle: Math.floor(Math.random() * 6) + 1,
  }));
}

function StarField() {
  // Generated on first render only, so re-renders keep the same sky.
  const [layers] = useState(() =>
    LAYERS.map((layer) => ({ ...layer, stars: generateStars(layer) })),
  );

  return (
    <div className="sky" aria-hidden="true">
      <div className="nebula" />
      {layers.map(({ name, travel, stars }) => (
        <div
          key={name}
          className={`star-layer star-layer-${name}`}
          style={{ "--travel": `${travel}vh` }}
        >
          {stars.map(({ top, left, size, twinkle }, index) => (
            <div
              key={index}
              className={`star-base star${twinkle}`}
              style={{
                top: `${top}%`,
                left: `${left}%`,
                height: `${size}px`,
                width: `${size}px`,
              }}
            />
          ))}
        </div>
      ))}
      <div className="shooting-star shooting-star-1" />
      <div className="shooting-star shooting-star-2" />
      <div className="shooting-star shooting-star-3" />
    </div>
  );
}

export default StarField;
