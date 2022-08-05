/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  env: {
    node: true,
    browser: true,
    es6: true,
  },
  extends: [
    "plugin:vue/vue3-recommended",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended",
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "vue/component-name-in-template-casing": "error",
    "vue/camelcase": "error",
    "vue/eqeqeq": "error",
    "vue/no-boolean-default": ["error", "default-false"],
    "vue/no-deprecated-scope-attribute": "error",
    "vue/no-empty-pattern": "error",
    "vue/v-slot-style": [
      "error",
      {
        atComponent: "v-slot",
        default: "v-slot",
        named: "longform",
      },
    ],
    "vue/valid-v-slot": "error",
    "vue/multi-word-component-names": "off",
    "vue/v-on-function-call": "error",
  },
  overrides: [
    {
      files: ["cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}"],
      extends: ["plugin:cypress/recommended"],
    },
  ],
};
