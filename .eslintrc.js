module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "airbnb",
    "airbnb-typescript",
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
    project: "./tsconfig.json"
  },
  plugins: ["@typescript-eslint"],
  rules: {
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never",
      },
    ],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx", ".ts", ".tsx"] }],
    semi: "off",
    quotes: "off",
    "@typescript-eslint/quotes": [2, "double"],
    "@typescript-eslint/semi": [2, "never"],
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["off"],
    "jsx-a11y/label-has-associated-control": "off",
    "react/require-default-props": 0,
    "global-require": "off",
    "react/no-array-index-key": "off",
    "react/jsx-props-no-spreading": "off",
  },
}
