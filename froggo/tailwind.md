# Vue + Tailwind (Vite) Template

## Scripts

The following scripts are available in this project's `package.json`:

- `dev`: Starts the development server on `http://localhost:8888`.
- `start`: Alias for `dev`.
- `build`: Builds the project for production.
- `build:inline`: Builds the project for production and prepares it to be inlined.
- `build:iframe`: Builds the project for production and prepares it to be embedded via an `<iframe>`.
- `preview`: Serves the `dist/` folder on `http://localhost:9999`.

## Project Structure

```
project
├─ .sf-stuff/ (1)
├─ src/
│  ├─ assets/
│  ├─ components/ (2)
│  ├─ composables/ (3)
│  ├─ css/
│  ├─ public/ (4)
│  ├─ App.vue (5)
│  ├─ auto-imports.d.ts (6)
│  ├─ components.d.ts (7)
│  ├─ env.d.ts (8)
│  ├─ index.html
│  └─ main.ts
├─ .eslintrc.cjs
├─ .gitignore
├─ .prettierrc
├─ package.json
├─ postcss.config.cjs (9)
├─ README.md
├─ tailwind.config.cjs (10)
├─ tsconfig.json (11)
├─ tsconfig.node.json (12)
└─ vite.config.ts (13)
```

## Key Items

1. Contains build scripts and global variables - _**you shouldn't need to touch these files**_.

2. Contains [Vue components](https://vuejs.org/guide/essentials/component-basics.html). Components in this directory are automatically globally imported (see #7).

3. Contains [Vue composables](https://vuejs.org/guide/reusability/composables.html#composables). Composables in this directory are automatically globally imported (see #6).

4. Contains files to be served at `https://website.com/[file]`; usually social images ([learn more](https://vitejs.dev/guide/assets.html#the-public-directory)).

5. Entry point to the Vue application.

6. TypeScript declaration file created by [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import). Automatically updates to allow for [Vue Composition API methods](https://vuejs.org/api/reactivity-core.html) and [Vue composables](https://vuejs.org/guide/reusability/composables.html#composables) to be used without needing to import them - _**you shouldn't need to touch this file**_.

7. TypeScript declaration file created by [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components). Automatically updates to allow for [Vue components](https://vuejs.org/guide/essentials/component-basics.html) to be used without needing to import them - _**you shouldn't need to touch this file**_.

8. TypeScript declaration file containing types for [Vue](https://vuejs.org/) and [Vite](https://vitejs.dev) - _**you shouldn't need to touch this file**_.

9. Configuration file for [PostCSS](https://postcss.org/).

10. Configuration file for [TailwindCSS](https://tailwindcss.com). A suggested Tailwind config can be found [below](#suggested-tailwind-configuration).

11. Configuration file for [TypeScript](https://www.typescriptlang.org/) used in `src/` (`.vue`, `.ts` or `.d.ts` files).

12. Configuration file for [TypeScript](https://www.typescriptlang.org/) used by [Vite](https://vitejs.dev).

13. Configuration file for [Vite](https://vitejs.dev).

## Suggested Tailwind Configuration

:::warning
The options in Tailwind configuration files can vary as new versions are released. Be sure to update this suggested configuration should any such changes occur.

The config below is valid for `tailwindcss` version `^3.2.x`.
:::

```js
/** @type { import('tailwindcss').Config } */
const defaultTheme = require('tailwindcss/defaultTheme')
const _GLOBAL_VARS = require('./.sf-stuff/global-variables.json')

const ROOT_CONTAINER_ID = _GLOBAL_VARS.ROOT_CONTAINER_ID

module.exports = {
  content: ['./src/**/*.{html,js,ts,vue}'],
  important: `#${ROOT_CONTAINER_ID}`,
  darkMode: 'media', // or 'class'
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px'
      // '2xl': '1536px'
    },
    extend: {
      fontFamily: {
        // sans: ['CustomSansFont', ...defaultTheme.fontFamily.sans]
      }
    }
  }
}
```

## Helpful Docs

- [Tailwind](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev)
- [Vue](https://vuejs.org/)
