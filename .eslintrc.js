module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['standard-with-typescript', 'prettier', 'plugin:prettier/recommended'],
  parserOptions: {
    project: './tsconfig.json',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  ignorePatterns: ['.eslintrc.js'],
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
