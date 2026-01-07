// eslint.config.mjs
import js from '@eslint/js';
import vitest from '@vitest/eslint-plugin';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import i18next from 'eslint-plugin-i18next';
import pluginImport from 'eslint-plugin-import';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig(
  // 0) Global ignores
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/.webpack/**',
      '**/coverage/**',
    ],
  },

  // 1) Base for all source files
  {
    name: 'base',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
    extends: [js.configs.recommended],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },

  // 2) TypeScript
  {
    name: 'ts-typechecked',
    files: ['**/*.{ts,mts,cts,tsx}'],
    extends: [
      tseslint.configs.recommendedTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },

  // 3) React + JSX runtime (only for JSX/TSX)
  {
    name: 'react',
    files: ['**/*.{jsx,tsx}'],
    extends: [
      pluginReact.configs.flat.recommended,
      pluginReact.configs.flat['jsx-runtime'],
    ],
    settings: {
      react: { version: 'detect' },
    },
  },

  // 4) React Hooks (plugin historically uses rules from recommended)
  {
    name: 'react-hooks',
    files: ['**/*.{jsx,tsx}'],
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // 5) a11y (only for JSX/TSX)
  {
    name: 'a11y',
    files: ['**/*.{jsx,tsx}'],
    extends: [pluginJsxA11y.flatConfigs.recommended],
  },

  // 6) Import/sort rules
  {
    name: 'imports',
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
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

  // 7) Node configs/scripts (vite/webpack/eslint config, etc.)
  {
    name: 'node-configs',
    files: ['**/*.{config,conf}.{js,mjs,cjs,ts}', '**/scripts/**/*.{js,ts}'],
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },

  // 8) CJS — to avoid conflicts with sourceType
  {
    name: 'commonjs',
    files: ['**/*.cjs', '**/*.cts'],
    languageOptions: {
      sourceType: 'script',
    },
  },

  // 9) Vitest tests
  {
    name: 'tests',
    files: [
      '**/*.{test,spec}.{js,jsx,ts,tsx}',
      '**/tests/**/*.{js,jsx,ts,tsx}',
    ],
    extends: [vitest.configs.recommended],
  },

  // 10) i18next
  {
    name: 'i18next',
    plugins: {
      i18next: i18next,
    },
    rules: {
      'i18next/no-literal-string': 'error',
    },
  },

  // 11) Prettier LAST
  eslintConfigPrettier,
);
