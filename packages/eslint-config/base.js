/** @type {import('@types/eslint').Linter.Config} */
module.exports = {
  extends: [
    "@remix-run/eslint-config",
    "@remix-run/eslint-config/node",
    "prettier",
    "plugin:import/recommended",
  ],
  parser: "@typescript-eslint/parser",
  rules: {
    "import/no-duplicates": ["warn", { "prefer-inline": true }],
    "import/consistent-type-specifier-style": ["warn", "prefer-inline"],
    "import/order": [
      "warn",
      {
        alphabetize: { order: "asc", caseInsensitive: true },
        groups: [["builtin", "external"], "internal", "parent", "sibling"],
        "newlines-between": "always",
        pathGroups: [{ pattern: "~/**", group: "parent" }],
      },
    ],
  },
};
