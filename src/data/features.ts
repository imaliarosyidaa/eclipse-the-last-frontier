export interface Feature {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  detail: string;
  accentColor: string;
  unsplashId: string;
}

export const features: Feature[] = [
  {
    number: "01",
    title: "EXPLORE",
    subtitle: "A WORLD WITHOUT LIMITS",
    description: "Traverse ancient ruins, alien biomes, and forgotten cities spanning thousands of kilometers. Every corner of Elyra holds secrets that have waited millennia to be discovered.",
    detail: "Open-world exploration with seamless fast-travel, dynamic weather systems, and day-night cycles that affect enemy behavior.",
    accentColor: "#3b82f6",
    unsplashId: "photo-1446776653964-20c1d3a81b06",
  },
  {
    number: "02",
    title: "COMBAT",
    subtitle: "MASTER REAL-TIME COMBAT",
    description: "Eclipse energy transforms every engagement into a lethal ballet. Chain abilities, exploit enemy weaknesses, and adapt to battlefield conditions in real-time.",
    detail: "Dynamic combo system with 200+ skill variations, environmental destruction, and Eclipse power upgrades that evolve with your playstyle.",
    accentColor: "#ef4444",
    unsplashId: "photo-1614728894747-a83421e2b9c9",
  },
  {
    number: "03",
    title: "CHOICES",
    subtitle: "EVERY DECISION CHANGES THE JOURNEY",
    description: "Elyra remembers. Every alliance made, every secret kept, and every line crossed reshapes the world around you. The truth of Elyra has many versions — find yours.",
    detail: "Branching narrative with 40+ major decision points, multiple endings, and a reputation system that evolves faction relationships dynamically.",
    accentColor: "#f59e0b",
    unsplashId: "photo-1579546929662-711aa81148cf",
  },
  {
    number: "04",
    title: "CO-OP",
    subtitle: "FACE THE UNKNOWN TOGETHER",
    description: "No Vanguard survives Elyra alone. Team up with up to three other operatives, combining unique Eclipse abilities into devastating synchronized attacks.",
    detail: "Full 4-player co-op across the entire campaign, asynchronous multiplayer events, and weekly Eclipse Surge challenges.",
    accentColor: "#10b981",
    unsplashId: "photo-1552820728-8b83bb6b773f",
  },
];
