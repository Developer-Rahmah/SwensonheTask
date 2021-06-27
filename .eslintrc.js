module.exports = {
  root: true,
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "prettier",
    "plugin:@typescript-eslint/recommended"
  ],
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks"],

  rules: {
    "comma-dangle": 1,
    "no-undef": 0,
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "error",
    "no-shadow": "off",
    "@typescript-eslint/no-shadow": "error",
    quotes: 0,
    "space-before-function-paren": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-member-accessibility": 0,
    "@typescript-eslint/indent": 0,
    "@typescript-eslint/member-delimiter-style": 0,
    "@typescript-eslint/no-empty-interface": 0,
    "@typescript-eslint/no-explicit-any": 0,
    "@typescript-eslint/no-object-literal-type-assertion": 0,
    "@typescript-eslint/no-var-requires": 0,
    "@typescript-eslint/interface-name-prefix": 0,
    "@typescript-eslint/ban-ts-ignore": 0,
    "@typescript-eslint/no-empty-function": 0,
    "react-hooks/exhaustive-deps": "warn",
    "react-hooks/rules-of-hooks": "error",
    "@typescript-eslint/ban-ts-comment": 0,
    "react/no-unescaped-entities": 0,
    "react/prop-types": "off",
    "react-native/no-inline-styles": 0
  }
};
