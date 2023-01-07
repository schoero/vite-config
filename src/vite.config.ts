import { resolve } from "node:path/posix";

import tsconfigPaths from "vite-tsconfig-paths";
import { UserConfig } from "vitest/config";
import GithubActionsReporter from "vitest-github-actions-reporter";


export { defineConfig } from "vitest/config";

export const config: UserConfig = {
  plugins: [
    tsconfigPaths()
  ],
  test: {
    include: ["**/*.{test,test-d,spec,spec-d}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
    reporters: process.env.GITHUB_ACTIONS
      ? ["verbose", new GithubActionsReporter()]
      : "default",
    resolveSnapshotPath: (testPath, snapExtension) =>
      resolve(testPath).includes(`/tests/`)
        ? testPath.replace("/tests/", "/tests/__snapshots__/").replace(/\.ts$/, snapExtension)
        : testPath.replace(/\.ts$/, snapExtension)
  }
};
