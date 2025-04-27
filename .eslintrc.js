module.exports = {
  env: {
    node: true,
    jest: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:node/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module", // Add this line
  },
  plugins: ["node"],
  rules: {
    "no-console": "off",
    "no-unused-vars": "warn",
  },
};
