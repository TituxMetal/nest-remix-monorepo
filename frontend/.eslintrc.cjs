/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [
    '@virgile/eslint-config/base.js',
    '@remix-run/eslint-config',
    '@remix-run/eslint-config/node'
  ],
  parserOptions: {
    ecmaVersion: 2022,
    sourceType: 'module',
    project: true
  },
  // settings: {
  //   'import/resolver': {
  //     node: {
  //       extensions: ['.js', '.jsx', '.ts', '.tsx']
  //     }
  //   }
  // },
  rules: {
    rules: {
      'no-empty-pattern': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', disallowTypeAnnotations: true, fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: true,
          caughtErrors: 'none',
          destructuredArrayIgnorePattern: '^_*',
          argsIgnorePattern: '^_*'
        }
      ],
      'import/no-duplicates': ['warn', { 'prefer-inline': true }],
      'import/consistent-type-specifier-style': ['warn', 'prefer-inline'],
      'import/order': [
        'warn',
        {
          'alphabetize': { order: 'asc', caseInsensitive: true },
          'groups': [['builtin'], ['external'], 'internal', 'parent', 'sibling'],
          'newlines-between': 'always'
        }
      ]
    }
  }
  // overrides: [
  //   {
  //     extends: ['@remix-run/eslint-config/jest-testing-library'],
  //     files: ['app/**/__tests__/**/*', 'app/**/*.{spec,test}.*'],
  //     rules: {
  //       'testing-library/no-await-sync-events': 'off',
  //       'jest-dom/prefer-in-document': 'off'
  //     },
  //     // we're using vitest which has a very similar API to jest
  //     // (so the linting plugins work nicely), but it means we have to explicitly
  //     // set the jest version.
  //     settings: {
  //       jest: {
  //         version: 28
  //       }
  //     }
  //   }
  // ]
}
