import info from './package.json' assert { type: 'json' };

// Ref: https://github.com/Gerrit0/typedoc-packages-example
export default {
  $schema: "https://typedoc.org/schema.json",
  name: "SPeCS Packages Documentation",
  entryPointStrategy: "packages",
  includeVersion: false,
  entryPoints: info.workspaces,
  plugin: [
    "typedoc-plugin-rename-defaults"
  ],
};
