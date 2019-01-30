# Setup and development

- [Setup and development](#setup-and-development)
  - [First-time setup](#first-time-setup)
  - [Installation](#installation)
  - [Dev server](#dev-server)
  - [Generators](#generators)
  - [Globals](#globals)
    - [Base components](#base-components)

## First-time setup

Make sure you have the following installed:

- [Node](https://nodejs.org/en/) (at least the latest LTS)
- [Yarn](https://yarnpkg.com/lang/en/docs/install/) (at least 1.0)

Then update the following files to suit your application:

## Installation

```bash
# Install dependencies from package.json
yarn install
```

## Dev server

> Note: If you're on Linux and see an `ENOSPC` error when running the commands below, you must [increase the number of available file watchers](https://stackoverflow.com/questions/22475849/node-js-error-enospc#answer-32600959).

```bash
# Launch the dev server
yarn dev

# Launch the dev server and automatically open it in
# your default browser when ready
yarn dev --open
```

<!-- TODO: fix this section -->
<!-- ### Developing with the production API

By default, dev and tests filter requests through [the mock API](/docs/tests.md#the-mock-api) in `tests/mock-api`. To test directly against a local/live API instead, run dev and test commands with the `API_BASE_URL` environment variable set. For example:

```bash
# To develop against a local backend server
API_BASE_URL=http://localhost:3000 yarn dev

# To test and develop against a production server
API_BASE_URL=https://example.io yarn dev:e2e
``` -->

## Generators

This project includes generators to speed up common development tasks. Commands include:

```bash
# Generate a new component
yarn new component

# Generate a new layout component
yarn new layout

# Generate a new Vuex state
yarn new state
```

Update existing or create new generators in the `_templates` folder, with help from the [Hygen docs](http://www.hygen.io/) and [Enquirer docs](https://github.com/enquirer/enquirer).

## Globals

### Base components

[Base components](https://vuejs.org/v2/style-guide/#Base-component-names-strongly-recommended) (a.k.a. presentational, dumb, or pure components) that apply app-specific styling and conventions should all begin with the `_base-` prefix. Since these components are typically used in place of raw HTML element (and thus used as frequently), they're automatically globally registered for convenience. This means you don't have to import and locally register them to use them in templates.
