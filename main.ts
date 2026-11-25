import { mkdirSync, writeFileSync } from "node:fs";

// One funny line: a concrete scene (a four-minute driving test, an examiner
// who gives up mid-test) with a real number, and the punchline lands in the
// last clause — the examiner offers the lift home instead.
const LINE =
  "My driving test lasted four minutes: the examiner said pull over, then asked if I would like a lift home instead.";

// Gate guard: the competition requires 1 to 200 characters of UTF-8 text,
// not only whitespace. Fail loudly rather than submit an invalid entry.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry line must not be only whitespace");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Deterministic by construction: the same single line is written on every run.
