module.exports = {
  env: {
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  // prettier-ignore
  settings: { 
    // for import/extension error
    'import/resolver': { node: { extensions: ['.ts'] },
    // for import/no-unresolved error ( tsconfig path alias )
     typescript: {} } 
    },
  rules: {
    // for import/extension error
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
      },
    ],
  },
  ignorePatterns: ['scripts/*'],
};
