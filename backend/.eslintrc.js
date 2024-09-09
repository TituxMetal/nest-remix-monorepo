const { resolve } = require('node:path')

const project = resolve(process.cwd(), 'tsconfig.json')

/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: ['@virgile/eslint-config/base.js'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: true,
    tsconfigRootDir: __dirname,
    sourceType: 'module'
  },
  ignorePatterns: ['node_modules/', 'dist/', '.eslintrc.js'],
  settings: {
    'import/resolver': {
      alias: {
        extensions: ['.ts'],
        map: [['~', './src']]
      },
      typescript: {
        project
      }
    }
  },
  rules: {
    'no-console': 'off',

    'import/no-cycle': 'off',
    // 'import/no-extraneous-dependencies': 'off',

    '@typescript-eslint/explicit-function-return-type': 'off',
    // '@typescript-eslint/explicit-module-boundary-types': 'off',
    // '@typescript-eslint/interface-name-prefix': 'off',
    // '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-extraneous-class': 'off',
    '@typescript-eslint/no-floating-promises': 'off',
    '@typescript-eslint/no-unsafe-assignment': 'off',
    '@typescript-eslint/no-unsafe-return': 'off'
  }
}
