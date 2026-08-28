// Centralized image asset paths. Swap any image in one place (see brief §51).

export type ImageAsset = { src: string; width: number; height: number };

export const assets = {
  cover: { src: "/images/cover.png", width: 1224, height: 1584 },
  numbers: { src: "/images/numbers.png", width: 1224, height: 1584 },
  airBrake: { src: "/images/air-brake.png", width: 1224, height: 1584 },
  traps: { src: "/images/traps.png", width: 1224, height: 1584 },
  ogImage: { src: "/og-image.png", width: 1200, height: 630 },
} as const satisfies Record<string, ImageAsset>;
