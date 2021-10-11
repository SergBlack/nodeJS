module.exports = {
  env: {
    es2020: true,
    node: true
  },
  extends: [
    "eslint:recommended",
    "airbnb-base/legacy"
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module"
  },
  rules: {
    indent: ["error", 2],
    "linebreak-style": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    "no-underscore-dangle": "warn"
  }
};
