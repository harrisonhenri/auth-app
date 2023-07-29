module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'prettier',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
    'plugin:jsx-a11y/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'prettier.config.cjs'],
  parser: '@typescript-eslint/parser',
  plugins: ['react-refresh', 'jsx-a11y'],
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    "@typescript-eslint/no-namespace": "off"
  },
}
