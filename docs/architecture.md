# Architecture

- [Architecture](#architecture)
  - [`_templates`](#templates)
  - [`.vscode`](#vscode)
  - [`docs`](#docs)
  - [`public`](#public)
    - [`index.html`](#indexhtml)
  - [`src`](#src)
    - [`styles`](#styles)
    - [`assets`](#assets)
    - [`common`](#common)
    - [`filters`](#filters)
    - [`interceptors`](#interceptors)
    - [`config`](#config)
    - [`mixin`](#mixin)
    - [`plugins`](#plugins)
    - [`resources`](#resources)
    - [`components`](#components)
    - [`styles`](#styles-1)
    - [`router`](#router)
    - [`translations`](#translations)
    - [`store`](#store)
    - [`utils`](#utils)
    - [`App.vue`](#appvue)
    - [`main.js`](#mainjs)

## `_templates`

Generator templates to speed up development. See [the development doc](development.md#generators) for more.

## `.vscode`

Settings and extensions specific to this project, for Visual Studio Code. See [the editors doc](editors.md#visual-studio-code) for more.

## `docs`

You found me! :wink:

## `public`

Where you'll keep any static assets, to be added to the `dist` directory without processing from our build system.

### `index.html`

This one file actually _does_ get processed by our build system, allowing us to inject some information from Webpack with [EJS](http://ejs.co/), such as the title, then add our JS and CSS.

## `src`

Where we keep all our source files.

### `styles`

Where we keep our [design variables and tooling](tech.md#design-variables-and-tooling).

### `assets`

This project manages assets via Vue CLI. Learn more about [its asset handling here](https://cli.vuejs.org/guide/html-and-static-assets.html).

### `common`

Where we keep common javascript files, e.g. constants or validator functions. [vue-configuration module uses this](https://github.com/alex-oleshkevich/vue-config#readme)

### `filters`

This folder contains all global [filters (pipes)](https://v1.vuejs.org/guide/custom-filter.html), each filter automatically will be added to global filters list.

### `interceptors`

Where we are keep [interceptors](https://github.com/pagekit/vue-resource/blob/develop/docs/http.md#interceptors) of [Http Client](https://github.com/pagekit/vue-resource)

### `config`

This folder contains all configuration of our application.

### `mixin`

You can store local or global mixins here

### `plugins`

In this folder need to add plugin which we are trying to integrate to our application
You can store local or global mixins here

### `resources`

This folder contains [resource](https://github.com/pagekit/vue-resource/blob/develop/docs/resource.md) Models of [Http Client](https://github.com/pagekit/vue-resource)

### `components`

Where most of the components in our app will live, including our [global base components](development.md#base-components).

### `styles`

Where we keep our [design variables and tooling](tech.md#design-variables-and-tooling).

### `router`

Where the router, routes, and any routing-related. See [the routing doc](routing.md) for more.
Where we keep our [design variables and tooling](tech.md#design-variables-and-tooling).

### `translations`

Here we are store translation files of i18n.

### `store`

Where all our global state management lives. See [the state management doc](state.md) for more.

### `utils`

These are utility functions you may want to share between many files in your application. They will always be pure and never have side effects, meaning if you provide a function the same arguments, it will always return the same result. These should also never directly affect the DOM or interface with our Vuex state.

### `App.vue`

The root Vue component that simply delegates to the router view. This is typically the only component to contain global CSS.

### `main.js`

The entry point to our app, were we create our Vue instance and mount it to the DOM.
