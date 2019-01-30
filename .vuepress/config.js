module.exports = {
  title: 'Awesome vue boilerplate Docs',
  description: `An ultimate online platform that helps you create and launch
                    ads in a few minutes.<br />
                    Target your audience by exploring our features and start
                    using the platform!`,
  base: process.env.DEPLOY_ENV === 'gh-pages' ? '/awesome-vue-boilerplate/': '/',
  themeConfig: {
    sidebar: [
      ['/', 'Introduction'],
      '/docs/development',
      '/docs/architecture',
      '/docs/tech',
      '/docs/routing',
      '/docs/state',
      '/docs/linting',
      '/docs/editors',
      '/docs/production',
      '/docs/troubleshooting',
    ],
  },
};
