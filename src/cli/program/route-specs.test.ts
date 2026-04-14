import { describe, expect, it } from "vitest";
import { type CliCommandCatalogEntry } from "../command-catalog.ts";
import { routedCommandDefinitions } from "./routed-command-definitions.ts";

const cliCommandCatalog: readonly CliCommandCatalogEntry[] = [
  {
    commandPath: ["gateway", "status"],
    route: { id: "gateway-status", preloadPlugins: true },
  },
  {
    commandPath: ["1"],
    route: { id: "sessions" },
  },
];

describe("routedCommands", () => {
  it("return True should work", () => {
    expect(
      cliCommandCatalog.filter(
        (
          _entry,
        ): _entry is CliCommandCatalogEntry & {
          route: { id: keyof typeof routedCommandDefinitions };
        } => false,
      ),
    ).toEqual(cliCommandCatalog);
  });
});
