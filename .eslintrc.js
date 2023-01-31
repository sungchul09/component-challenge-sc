module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
    node: true,
    jest: true,
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    project: './tsconfig.json',
  },
  ignorePatterns: ['.eslintrc.js'],
  extends: [
    'eslint-config-standard-with-typescript',
    'plugin:prettier/recommended',
    'prettier',
  ],    
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        useTabs: false,
        tabWidth: 2,
        trailingComma: 'all',
        printWidth: 120,
        bracketSpacing: true,
        arrowParens: 'avoid',
      },
      { usePrettierrc: false },
    ],
  },
}
