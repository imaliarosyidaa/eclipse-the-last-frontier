export interface Ability {
  name: string;
  description: string;
}

export interface Character {
  id: string;
  number: string;
  name: string;
  title: string;
  role: string;
  quote: string;
  description: string;
  color: string;
  glowColor: string;
  stats: {
    hp: number;
    attack: number;
    defense: number;
    speed: number;
  };
  abilities: Ability[];
  bgGradient: string;
  artwork?: string;
}

import aria from "../assets/characters/aria.png"
import kael from "../assets/characters/kael.png"
import nyx from "../assets/characters/nyx.png"
import orion from "../assets/characters/orion.png"

export const characters: Character[] = [
  {
    id: "aria",
    number: "01",
    name: "ARIA",
    title: "THE VANGUARD",
    role: "ASSAULT · MOBILITY",
    quote: "Fast, precise, and unwilling to retreat.",
    description: "Aria is the first deployed Vanguard on Elyra. Trained for deep reconnaissance, she moves like a phantom through alien terrain. Her Eclipse-enhanced exosuit allows her to phase through certain matter, making her one of the most unpredictable operatives in the field.",
    color: "#3b82f6",
    glowColor: "rgba(59,130,246,0.4)",
    stats: { hp: 70, attack: 90, defense: 50, speed: 100 },
    abilities: [
      { name: "PHASE DASH", description: "Aria temporarily phases through space, becoming untargetable for 1.2 seconds and repositioning instantly." },
      { name: "VOID STRIKE", description: "Aria channels Eclipse energy into a devastating close-range attack that disrupts enemy shields." },
      { name: "ECLIPSE BURST", description: "Unleashes a radial burst of pure Eclipse energy, disorienting all enemies in a 15-meter radius." },
    ],
    bgGradient: "linear-gradient(135deg, #050810 0%, #0d1a3a 50%, #0a1628 100%)",
    artwork: aria,
  },
  {
    id: "kael",
    number: "02",
    name: "KAEL",
    title: "THE SENTINEL",
    role: "DEFENSE · TANK",
    quote: "The line doesn't move. Not while I stand.",
    description: "Kael carries the weight of every mission on armored shoulders. A former mining engineer turned combat specialist, he modified his industrial exoframe into an impenetrable mobile fortress. His knowledge of Elyra's geological structure makes him invaluable in unstable zones.",
    color: "#f59e0b",
    glowColor: "rgba(245,158,11,0.4)",
    stats: { hp: 100, attack: 60, defense: 95, speed: 40 },
    abilities: [
      { name: "IRON WALL", description: "Kael deploys an indestructible barrier that absorbs 80% of incoming damage for the entire squad." },
      { name: "SEISMIC SLAM", description: "A devastating ground pound that stuns all enemies in a 10-meter radius for 3 seconds." },
      { name: "FORTRESS MODE", description: "Kael locks into position, doubling his defense and generating a regenerative shield for nearby allies." },
    ],
    bgGradient: "linear-gradient(135deg, #050810 0%, #1a0d00 50%, #0f0a00 100%)",
    artwork: kael,
  },
  {
    id: "nyx",
    number: "03",
    name: "NYX",
    title: "THE TECHNOMANCER",
    role: "CONTROL · SUPPORT",
    quote: "Every system has a vulnerability. I am the exploit.",
    description: "Nyx speaks to machines the way others speak to people — fluently, persuasively, and with purpose. She hacked into the ruins' ancient technology weeks before the official expedition arrived. What she found there changed her understanding of what technology truly is.",
    color: "#a855f7",
    glowColor: "rgba(168,85,247,0.4)",
    stats: { hp: 60, attack: 75, defense: 55, speed: 75 },
    abilities: [
      { name: "NEURAL HACK", description: "Nyx overrides enemy combat systems, temporarily turning them against their own allies." },
      { name: "ECLIPSE NET", description: "Deploys a web of Eclipse-powered nodes that suppress and slow all enemies caught within." },
      { name: "SYSTEM OVERRIDE", description: "Remotely commandeers Elyran technology, activating ancient defense systems for the squad's benefit." },
    ],
    bgGradient: "linear-gradient(135deg, #050810 0%, #150d2a 50%, #0d0a1a 100%)",
    artwork: nyx,
  },
  {
    id: "orion",
    number: "04",
    name: "ORION",
    title: "THE HUNTER",
    role: "LONG RANGE · DPS",
    quote: "Three kilometers. One breath. Zero hesitation.",
    description: "Orion has never missed a mark he chose to take. Trained in the orbital sniper corps, he now applies that precision to Elyra's shifting, unpredictable environment. He tracks Eclipse energy signatures like a predator tracking heartbeats — relentlessly and without mercy.",
    color: "#10b981",
    glowColor: "rgba(16,185,129,0.4)",
    stats: { hp: 65, attack: 100, defense: 45, speed: 70 },
    abilities: [
      { name: "ECLIPSE SHOT", description: "A charged precision round infused with Eclipse energy that pierces through all obstacles and armor." },
      { name: "MARK & DETONATE", description: "Tags up to three targets with tracking beacons, then detonates them simultaneously with a single trigger." },
      { name: "GHOST PROTOCOL", description: "Orion becomes completely invisible to all detection systems for 8 seconds, repositioning freely." },
    ],
    bgGradient: "linear-gradient(135deg, #050810 0%, #051a12 50%, #041510 100%)",
    artwork: orion,
  },
];
