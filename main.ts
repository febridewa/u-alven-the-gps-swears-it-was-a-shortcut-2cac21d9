// The GPS Swears It Was a Shortcut — make.fun entry
// Writes the GPS's one-line excuse to /output/entry.txt.
// The excuse is the GPS talking: smug, defensive, blaming the map,
// with a fresh specific detail (a cul-de-sac) and a turn at the end.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The map swore that cul-de-sac was a shortcut. I don't question the map — we have an understanding: it lies, I drive.";

// Gate self-check: the sealed scorer requires UTF-8 text of 1-200
// characters, not only whitespace, a single line. Fail loudly otherwise.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry length ${chars.length} outside the 1-200 gate`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.endsWith("\n")) {
  throw new Error("entry must be a single line with no trailing newline");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(LINE);
