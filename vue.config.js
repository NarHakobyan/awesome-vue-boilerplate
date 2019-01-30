const path = require('path');

const developmentMode = process.env.NODE_ENV === 'development';
module.exports = {
    lintOnSave: false,
    transpileDependencies: [/\bvue-awesome\b/, 'vuex-persist'],
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'scss',
            patterns: [path.resolve(__dirname, './src/styles/imports/*.scss')],
        },
    },
    configureWebpack: {
        devtool: developmentMode ? 'source-map' : false,
    },
    css: {
        sourceMap: developmentMode,
    },
};
