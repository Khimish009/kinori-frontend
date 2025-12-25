import js from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import eslintConfigPrettier from 'eslint-config-prettier';

export default tseslint.config(
  // 1. Игнорируемые файлы (аналог .eslintignore)
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '**/.webpack/**',
      '**/coverage/**',
    ],
  },

  // 2. Базовые правила JavaScript
  js.configs.recommended,

  // 3. TypeScript правила
  ...tseslint.configs.recommended,

  // 4. React правила
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat['jsx-runtime'], // Для React 17+ (не нужен import React)

  // 5. React Hooks правила
  {
    plugins: {
      'react-hooks': pluginReactHooks,
    },
    rules: pluginReactHooks.configs.recommended.rules,
  },

  // 6. Accessibility правила
  pluginJsxA11y.flatConfigs.recommended,

  // 7. Настройки для всех файлов
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
        version: 'detect', // Автоматически определяет версию React
      },
    },
  },

  // 8. ВАЖНО: Prettier должен быть ПОСЛЕДНИМ!
  // Отключает все правила, которые конфликтуют с Prettier
  eslintConfigPrettier,
);
