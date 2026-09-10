export interface Location {
  id: string;
  name: string;
  subtitle: string;
  description: string;
  lore: string;
  enemies: string;
  resources: string;
  danger: "LOW" | "MEDIUM" | "HIGH" | "EXTREME";
  unsplashId: string;
  svgX: number;
  svgY: number;
}

export const locations: Location[] = [
  {
    id: "verdant-zone",
    name: "VERDANT ZONE",
    subtitle: "The Living Expanse",
    description: "A vast biome of bioluminescent flora unlike anything in human records. Beneath the canopy lies a network of root systems that seem to pulse with Eclipse energy.",
    lore: "First contact with Elyran fauna occurred here. Scientists believe the flora is not merely biological — it may be a distributed consciousness.",
    enemies: "Elyran Warden, Sporewalker, Root Sentinel",
    resources: "Eclipse Moss, Biolite Crystals, Ancient Seeds",
    danger: "MEDIUM",
    unsplashId: "photo-1446776653964-20c1d3a81b06",
    svgX: 30,
    svgY: 35,
  },
  {
    id: "new-avalon",
    name: "NEW AVALON",
    subtitle: "Humanity's Last Remaining City",
    description: "A fortified settlement carved into a plateau, New Avalon is the only permanent human foothold on Elyra. Thirty thousand colonists live within its walls — and none can leave.",
    lore: "Originally a mining base, it expanded after the initial Eclipse event severed contact with Earth. New Avalon is now a city of survivors who don't know what they're surviving.",
    enemies: "Corrupted Colonist, Rogue Automaton, Eclipse-Touched",
    resources: "Military Rations, Fabrication Parts, Encrypted Data",
    danger: "LOW",
    unsplashId: "photo-1573804633927-bfcbcd909acd",
    svgX: 55,
    svgY: 50,
  },
  {
    id: "ashen-desert",
    name: "ASHEN DESERT",
    subtitle: "The Scorched Silence",
    description: "Nothing grows here. The Ashen Desert was not always barren — something burned it clean centuries ago, and the ash never settled. It drifts perpetually on winds that blow from nowhere.",
    lore: "Seismic readings suggest a massive structure buried beneath the desert floor. Its dimensions match no known architectural tradition — human or otherwise.",
    enemies: "Ashwalker, Dune Kraken, Eclipse Wraith",
    resources: "Obsidian Core, Ancient Metal, Void Sand",
    danger: "HIGH",
    unsplashId: "photo-1509316785289-025f5b846b35",
    svgX: 72,
    svgY: 30,
  },
  {
    id: "orbital-station",
    name: "ORBITAL STATION",
    subtitle: "The Eye Above",
    description: "Elyra's orbital station is humanity's only link to wider space — and it's been compromised. Whatever took control of the station's systems has been watching everything below.",
    lore: "Station logs show a 72-hour gap in all records — every system, every sensor. During that gap, something rewrote the station's core directive from 'observe' to 'contain.'",
    enemies: "Drone Swarm, Station Phantom, Corrupted AI",
    resources: "Zero-G Alloy, Stellar Data, Orbital Component",
    danger: "EXTREME",
    unsplashId: "photo-1614728894747-a83421e2b9c9",
    svgX: 80,
    svgY: 65,
  },
  {
    id: "the-ruins",
    name: "THE RUINS",
    subtitle: "What Came Before",
    description: "No human civilization could have built them. The Ruins stretch across an entire continent — towers that pierce the clouds, carved with symbols no linguist has yet decoded.",
    lore: "Carbon dating places the Ruins at over 400,000 years old. Yet the engineering precision exceeds anything humanity has achieved. Someone — or something — was here first.",
    enemies: "Architect Guardian, Ruin Specter, Eclipse Construct",
    resources: "Architect Shard, Ancient Code Fragment, Eclipse Stone",
    danger: "EXTREME",
    unsplashId: "photo-1579546929662-711aa81148cf",
    svgX: 42,
    svgY: 70,
  },
];
