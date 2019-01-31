# Awesome Vue Boilerplate

> This is an ever-evolving, very opinionated architecture and dev environment for new Vue SPA projects using [Vue CLI 3](https://github.com/vuejs/vue-cli). Questions, feedback, and for now, even bikeshedding are welcome. 😄 If you'd like to increase the time I can spend on this project, as well as other Vue resources.

## Features

- [**Thorough documentation**](#documentation): Written with the same care as Vue's core docs to quickly train new team members and consolidate knowledge.
- [**Guaranteed consistency**](docs/linting.md): Opinionated linting for Vue, JavaScript/JSON, SCSS, and Markdown, integrated into Visual Studio Code and run against staged files on pre-commit.
- [**Speedy development**](docs/development.md): Between [configurable generators](docs/development.md#generators), [handy aliases](docs/development.md#aliases), and [global base components](docs/development.md#base-components), your productivity will skyrocket.

## Getting started

```bash
# 1. Clone the repository.
git clone https://github.com/NarHakobyan/awesome-vue-boilerplate.git my-new-project

# 2. Enter your newly-cloned folder.
cd my-new-project

# 3. Install dependencies. Make sure yarn is installed: https://yarnpkg.com/lang/en/docs/install
yarn

# 6. Read the documentation linked below for "Setup and development".
```

## Documentation

This project includes a `docs` folder with more details on:

1.  [Setup and development](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/development.html)
1.  [Architecture](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/architecture.html)
1.  [Languages and technologies](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/tech.html)
1.  [Routing, layouts, and views](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/routing.html)
1.  [State management](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/state.html)
1.  [Tests and mocking the API](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/tests.html)
1.  [Linting and formatting](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/linting.html)
1.  [Editor integration](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/editors.html)
1.  [Building and deploying to production](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/production.html)
1.  [Troubleshooting](https://narhakobyan.github.io/awesome-vue-boilerplate/docs/troubleshooting.html)

## FAQ

**Why would I use this boilerplate instead of generating a new project with [Vue CLI](https://github.com/vuejs/vue-cli) directly?**

Vue CLI aims for flexibility, making it as simple as possible for any team to set up a new project, no matter how big or small, whether it's an app or a library, or what languages and technologies are being used.

This boilerplate makes more assumptions. It assumes you're building a large app, possibly developed by a large team. It also makes a lot of default choices for you, based on what tends to work well for large, enterprise projects. At the same time, it aims to educate and empower users to configure these defaults to ideally suit their specific app and team.

**Why would I use this boilerplate instead of [Nuxt](https://nuxtjs.org/)?**

Nuxt is like a really smart personal assistant, immediately making you more productive by taking care of many concerns _for you_. This boilerplate is more of a personal coach, aiming to educate and empower users to essentially configure their _own_ framework, ideally suited to their app and team.

If what you're building is very well-defined, with requirements and technical challenges that won't drastically change over time, I'd probably recommend Nuxt instead. For the needs of common applications, it's more than up to the task. If you're a startup trying to prove product-market fit and your primary goal is initial development speed, that's also a point in Nuxt's favor.

Here's when you might prefer building a project off the boilerplate instead:

- The requirements for the product are very likely to change over time and you want to maintain maximum flexibility and control.
- You'd like to focus on developing skills that will transfer across _any_ Vue project.
- You're working in a large team, so need tooling to help everyone avoid common mistakes, write in a consistent style, and avoid bikeshedding in PRs.

Finally, it's not an either-or situation. This boilerplate demonstrates many useful patterns for building robust applications that can also be applied to Nuxt apps. That means you could build a project with Nuxt, while still using this boilerplate as a study guide.

**Can you build a Nuxt version of this boilerplate?**

I might! I'll be focusing on this Vue CLI version for now, but once I've made most of the improvements on my roadmap and as time allows, I _would_ like to start work on a Nuxt version. The Nuxt team has even generously offered to help!
