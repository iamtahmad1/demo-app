module.exports = {
    env: {
      node: true,
      jest: true,
    },
    extends: [
      'eslint:recommended',
      'plugin:node/recommended',
      'plugin:prettier/recommended',
    ],
    parserOptions: {
      ecmaVersion: 2020,
    },
    rules: {
      'no-console': 'warn',
      'no-unused-vars': 'warn',
    },
  };
  