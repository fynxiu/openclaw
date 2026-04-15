import { performance } from "node:perf_hooks";
import { createConfigIO, loadConfig, resetConfigRuntimeState } from "../../src/config/config.js";

const mode = process.argv[2] ?? "fresh";
const iterations = Number(process.argv[3] ?? "200");

const runOnce = () => {
  if (mode === "snapshot") {
    return loadConfig();
  }

  if (mode === "cold-export") {
    resetConfigRuntimeState();
    return loadConfig();
  }

  if (mode === "fresh") {
    return createConfigIO().loadConfig();
  }

  throw new Error(`Unknown mode: ${mode}`);
};

const times: number[] = [];

for (let i = 0; i < iterations; i++) {
  const start = performance.now();
  runOnce();
  times.push(performance.now() - start);
}

times.sort((a, b) => a - b);

const percentile = (p: number) => times[Math.floor((times.length - 1) * p)] ?? 0;

console.log({
  mode,
  iterations,
  minMs: times[0],
  medianMs: percentile(0.5),
  p95Ms: percentile(0.95),
  maxMs: times[times.length - 1],
});
