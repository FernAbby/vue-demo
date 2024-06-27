/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:prettier/recommended',
    '@vue/eslint-config-typescript',
    // '@vue/eslint-config-prettier/skip-formatting'
  ],
  plugins: [
  'import', 'simple-import-sort'
  ],
  globals: {
    'AMap': true
  },
  overrides: [
    {
      files: [
        'cypress/e2e/**/*.{cy,spec}.{js,ts,jsx,tsx}',
        'cypress/support/**/*.{js,ts,jsx,tsx}'
      ],
      'extends': [
        'plugin:cypress/recommended'
      ]
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    // .vue文件明明必须是多个单词命名
    "vue/multi-word-component-names": "off",
  },
  ignorePatterns: ["dist", "node_modules", "docs"]
}
