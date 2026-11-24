import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "FridgeBook is a social network for your refrigerator, so it can finally friend the milk, unfriend the leftovers, and post passive-aggressive reminders about the expired yogurt.";

const MAX_CODE_POINTS = 240;

function codePoints(text: string): number {
  return [...text].length;
}

function fail(message: string): never {
  throw new Error(message);
}

const count = codePoints(LINE);

if (count < 1 || count > MAX_CODE_POINTS) {
  fail(`entry must be 1 to ${MAX_CODE_POINTS} characters, got ${count}`);
}
if (LINE.trim().length === 0) {
  fail("entry must not be only white space");
}
if (LINE.includes("\n") || LINE.includes("\r")) {
  fail("entry must be a single line");
}
if (LINE.split(".").filter((part) => part.trim().length > 0).length > 1) {
  fail("entry must be one sentence");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
console.log(`Wrote ${count} code point(s) to /output/entry.txt`);
