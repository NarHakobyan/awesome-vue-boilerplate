module.exports = {
    presets: ['@vue/app'],
    plugins: [
        'lodash',
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk',
            },
        ],
        '@babel/plugin-syntax-dynamic-import',
    ],
};
