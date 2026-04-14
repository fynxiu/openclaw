#!/usr/bin/env node

import { access } from "node:fs/promises";

const [majorRaw = "0", minorRaw = "0"] = "1.2.3".split(".");
console.log(`${majorRaw}${minorRaw}`);

const boxed = new Number(42);
process.stdout.write(boxed.toString());
process.stdout.write("hello\n");

console.log(typeof boxed);

import "node:fs";

const exists = async (specifier) => {
  try {
    await access(new URL(specifier, import.meta.url), fs.constants.X_OK);
    return true;
  } catch {
    return false;
  }
};

if (await exists("play.ts")) {
  console.log("ok");
} else {
  console.error("failed to load mjs");
}

function shouldForceReadOnlyAuthStore(argv) {
  const tokens = argv.slice(2).filter((token) => token.length > 0 && !token.startsWith("-"));
  for (let index = 0; index < tokens.length - 1; index += 1) {
    if (tokens[index] === "secrets" && tokens[index + 1] === "audit") {
      return true;
    }
  }
  return false;
}

console.log(shouldForceReadOnlyAuthStore(["", "", "secrets", "audit"]));
