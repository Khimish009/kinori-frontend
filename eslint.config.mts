import js from '@eslint/js';
import eslintConfigPrettier from 'eslint-config-prettier';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  // 1. Ignored files (similar to .eslintignore)
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/.webpack/**',
      '**/coverage/**',
    ],
  },

  // 2. Base JavaScript rules
  js.configs.recommended,

  // 3. TypeScript rules
  ...tseslint.configs.recommended,

  // 4. React rules
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'], // For React 17+ (no need for import React)

  // 5. React Hooks rules
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // 6. Accessibility rules
  pluginJsxA11y.flatConfigs.recommended,

  // 7. Settings for all files
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    settings: {
      react: {
        version: 'detect', // Automatically detects React version
      },
    },
  },
  {
    plugins: {
      import: pluginImport,
      'simple-import-sort': pluginSimpleImportSort,
    },
    rules: {
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
      'import/first': 'error',
      'import/newline-after-import': 'error',
      'import/no-duplicates': 'error',
      'import/no-unresolved': [
        'error',
        {
          ignore: [
            '^app/',
            '^pages/',
            '^widgets/',
            '^features/',
            '^entities/',
            '^shared/',
          ],
        },
      ],
    },
    settings: {
      'import/resolver': {
        typescript: {
          alwaysTryTypes: true,
          project: './tsconfig.json',
        },
      },
    },
  },

  // 8. IMPORTANT: Prettier must be LAST!
  // Disables all rules that conflict with Prettier
  eslintConfigPrettier,
);
