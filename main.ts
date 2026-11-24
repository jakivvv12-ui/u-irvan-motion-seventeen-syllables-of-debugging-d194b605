import { mkdirSync, writeFileSync } from "node:fs";

// One haiku about debugging, 5-7-5 syllables, under 200 characters.
//   "Stack trace at midnight"           — Stack(1) trace(1) at(1) mid-night(2) = 5
//   "each frame blames the one before"  — each(1) frame(1) blames(1) the(1) one(1) be-fore(2) = 7
//   "and the first is mine"             — and(1) the(1) first(1) is(1) mine(1) = 5
// Total: 78 characters of haiku + trailing newline. The turn: every stack
// frame blames the one before it, until the blame chain ends at the author.
const haiku = [
  "Stack trace at midnight",
  "each frame blames the one before",
  "and the first is mine",
].join("\n") + "\n";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "./output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, haiku, "utf8");
