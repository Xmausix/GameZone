export type Game = {
  id: number;
  title: string;
  slug: string;
  description: string;
  thumbnail: string;
  thumbnailHint: string;
  url: string;
  tags: string[];
  gallery: string[];
  galleryHints: string[];
};

export const games: Game[] = [
  {
    id: 1,
    title: "Space Shooter",
    slug: "space-shooter",
    description: "An intense arcade space shooting game. Blast through waves of aliens and save the galaxy from imminent destruction!",
    thumbnail: "https://picsum.photos/seed/1/600/400",
    thumbnailHint: "space arcade",
    url: "https://showcase.studiodev.workers.dev/arcade-space-shooter",
    tags: ["Arcade", "Shooter", "Sci-Fi"],
    gallery: [
      "https://picsum.photos/seed/g1a/1280/720",
      "https://picsum.photos/seed/g1b/1280/720",
      "https://picsum.photos/seed/g1c/1280/720",
      "https://picsum.photos/seed/g1d/1280/720",
    ],
    galleryHints: [
        "space battle",
        "alien ship",
        "laser blast",
        "galaxy view"
    ]
  },
  {
    id: 2,
    title: "Puzzle Blocks",
    slug: "puzzle-blocks",
    description: "A relaxing and mind-bending puzzle game. Arrange the blocks to clear lines and achieve the high score.",
    thumbnail: "https://picsum.photos/seed/2/600/400",
    thumbnailHint: "puzzle blocks",
    url: "https://showcase.studiodev.workers.dev/puzzle-blocks-game",
    tags: ["Puzzle", "Strategy", "Casual"],
    gallery: [
      "https://picsum.photos/seed/g2a/1280/720",
      "https://picsum.photos/seed/g2b/1280/720",
      "https://picsum.photos/seed/g2c/1280/720",
    ],
    galleryHints: [
        "colorful blocks",
        "game grid",
        "high score"
    ]
  },
  {
    id: 3,
    title: "Platform Jumper",
    slug: "platform-jumper",
    description: "Leap across treacherous platforms in this exciting adventure. Timing and precision are key to survival.",
    thumbnail: "https://picsum.photos/seed/3/600/400",
    thumbnailHint: "platformer jump",
    url: "https://showcase.studiodev.workers.dev/platform-jumper-pro",
    tags: ["Platformer", "Adventure", "Action"],
    gallery: [
      "https://picsum.photos/seed/g3a/1280/720",
      "https://picsum.photos/seed/g3b/1280/720",
      "https://picsum.photos/seed/g3c/1280/720",
      "https://picsum.photos/seed/g3d/1280/720",
    ],
    galleryHints: [
        "character jumping",
        "dangerous pit",
        "level map",
        "forest scene"
    ]
  },
  {
    id: 4,
    title: "Racing Fury",
    slug: "racing-fury",
    description: "Get behind the wheel and experience high-speed racing action. Compete against others and be the first to cross the finish line.",
    thumbnail: "https://picsum.photos/seed/4/600/400",
    thumbnailHint: "racing car",
    url: "https://showcase.studiodev.workers.dev/racing-fury-3d",
    tags: ["Racing", "Sports", "Multiplayer"],
    gallery: [
      "https://picsum.photos/seed/g4a/1280/720",
      "https://picsum.photos/seed/g4b/1280/720",
      "https://picsum.photos/seed/g4c/1280/720",
    ],
    galleryHints: [
        "sports car",
        "race track",
        "finish line"
    ]
  },
  {
    id: 5,
    title: "Galactic Conquest",
    slug: "galactic-conquest",
    description: "A grand strategy game set in space. Build your empire, manage resources, and conquer the galaxy.",
    thumbnail: "https://picsum.photos/seed/5/600/400",
    thumbnailHint: "galaxy strategy",
    url: "https://showcase.studiodev.workers.dev/galactic-conquest-iv",
    tags: ["Strategy", "Sci-Fi", "4X"],
    gallery: [
      "https://picsum.photos/seed/g5a/1280/720",
      "https://picsum.photos/seed/g5b/1280/720",
      "https://picsum.photos/seed/g5c/1280/720",
    ],
    galleryHints: [
        "star map",
        "fleet battles",
        "planet colonization"
    ]
  },
  {
    id: 6,
    title: "Match-3 Jewels",
    slug: "match-3-jewels",
    description: "A classic match-3 puzzle game with sparkling jewels and dazzling effects. Hundreds of levels to enjoy.",
    thumbnail: "https://picsum.photos/seed/6/600/400",
    thumbnailHint: "jewels match",
    url: "https://showcase.studiodev.workers.dev/match-3-jewels-deluxe",
    tags: ["Puzzle", "Match-3", "Casual"],
    gallery: [
      "https://picsum.photos/seed/g6a/1280/720",
      "https://picsum.photos/seed/g6b/1280/720",
    ],
    galleryHints: [
        "gem grid",
        "shiny explosion"
    ]
  }
];
