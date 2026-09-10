export type NewsCategory = "ALL" | "NEWS" | "UPDATE" | "EVENT" | "LORE";

export interface NewsItem {
  id: string;
  slug: string;
  category: Exclude<NewsCategory, "ALL">;
  title: string;
  subtitle: string;
  date: string;
  excerpt: string;
  content: string;
  unsplashId: string;
}

export const newsItems: NewsItem[] = [
  {
    id: "1",
    slug: "the-awakening-begins",
    category: "EVENT",
    title: "THE AWAKENING",
    subtitle: "UPDATE 1.4",
    date: "September 28, 2147",
    excerpt: "Something beneath Elyra has awakened. The seismic data cannot be explained by geological activity alone.",
    content: "The Awakening is ECLIPSE's first global event, spanning four weeks across all servers simultaneously. Every action taken by every Vanguard on Elyra contributes to a world-state that evolves in real time. The seismic readings beneath the Ashen Desert have reached levels that exceed every known geological model. The science team at New Avalon is working around the clock. Whatever is waking up beneath the sand — it's been waiting a very long time.",
    unsplashId: "photo-1614728894747-a83421e2b9c9",
  },
  {
    id: "2",
    slug: "verdant-expansion",
    category: "UPDATE",
    title: "VERDANT EXPANSION",
    subtitle: "UPDATE 1.3",
    date: "August 15, 2147",
    excerpt: "The Verdant Zone grows. New biomes, new creatures, and something that the first expedition never reported.",
    content: "Update 1.3 expands the Verdant Zone with three entirely new sub-biomes: the Luminous Depths, the Canopy Citadel, and the Root Network. The Root Network is particularly significant — early testers have reported that navigating it feels less like exploring a cave system and more like walking through something alive. Forty new enemy variants, two new bosses, and a storyline that rewrites what we thought we knew about Elyran ecology.",
    unsplashId: "photo-1446776653964-20c1d3a81b06",
  },
  {
    id: "3",
    slug: "architect-codex",
    category: "LORE",
    title: "THE ARCHITECT CODEX",
    subtitle: "LORE DISPATCH",
    date: "July 3, 2147",
    excerpt: "Fragments of an ancient language, recovered from the deepest level of the Ruins, have been partially decoded.",
    content: "The Architect Codex is the single most significant archaeological find in human history. Recovered from chamber seven of the Ruins' lowest accessible level, the Codex contains 847 distinct symbols arranged in recursive patterns that our AI has begun to decode. What we've translated so far suggests the Architects were not merely technologically advanced — they understood Eclipse energy at a fundamental level. They didn't just use it. They communicated through it.",
    unsplashId: "photo-1579546929662-711aa81148cf",
  },
  {
    id: "4",
    slug: "vanguard-beta-results",
    category: "NEWS",
    title: "BETA RESULTS",
    subtitle: "DEVELOPMENT UPDATE",
    date: "June 20, 2147",
    excerpt: "Over two million Vanguards tested the Eclipse beta. Here's what we learned, and what we changed.",
    content: "Two million operatives. Forty-eight hours. The ECLIPSE closed beta generated more gameplay data than our entire internal testing program combined. The combat feedback was unanimous: the Phase Dash ability needed adjustment. We've reworked the timing window, increased the energy cost slightly, and added a visual indicator that makes the reposition destination clearer. Combat as a whole felt strong — the Eclipse ability synergies are landing exactly as intended. The world feels alive in a way that exceeded our own expectations.",
    unsplashId: "photo-1552820728-8b83bb6b773f",
  },
  {
    id: "5",
    slug: "orbital-station-breach",
    category: "LORE",
    title: "STATION BREACH",
    subtitle: "INCIDENT REPORT",
    date: "May 11, 2147",
    excerpt: "Communication blackout on the Orbital Station lasted 72 hours. We now know something entered during that window.",
    content: "The 72-hour blackout on Elyra's orbital station was not a technical failure. Internal sensor logs, recovered after the blackout ended, show movement in corridors that should have been vacuum-sealed. Whatever entered the station during those 72 hours did not leave through any recorded exit. Station Commander Yael Voss has requested additional Vanguard deployment. Her request has been approved. This is classified Level 4 — Vanguard operatives only.",
    unsplashId: "photo-1573804633927-bfcbcd909acd",
  },
  {
    id: "6",
    slug: "eclipse-season-two",
    category: "NEWS",
    title: "SEASON TWO PREVIEW",
    subtitle: "COMING SOON",
    date: "April 2, 2147",
    excerpt: "Season Two arrives in Q4. A new character, a new zone, and the truth behind the Eclipse begins to surface.",
    content: "Season Two of ECLIPSE: THE LAST FRONTIER will introduce the fifth playable Vanguard — a character we're not yet ready to name, but whose backstory is woven into the lore that's been hiding in plain sight since the game launched. The new zone, The Deep Rift, opens the geological mysteries that the Ashen Desert has been building toward. And for the first time, players will receive a direct answer about the Eclipse's origin. The answer is not what we've been suggesting. It never was.",
    unsplashId: "photo-1509316785289-025f5b846b35",
  },
];

export const eventCountdownTarget = new Date("2147-10-15T00:00:00Z");
