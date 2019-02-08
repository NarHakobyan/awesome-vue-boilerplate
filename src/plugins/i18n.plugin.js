import Vue from 'vue';
import VueI18n from 'vue-i18n';
import elementEnLocale from 'element-ui/lib/locale/lang/en'; // element-ui en lang
import translations from '../translations';

Vue.use(VueI18n);

const messages = {
    en: {
        ...translations.en,
        ...elementEnLocale,
    },
};

const i18n = new VueI18n({
    // set locale
    // options: en
    locale: localStorage.getItem('language') || 'en',
    // set locale messages
    messages,
});

if (module.hot) {
    const cacheModules = {};
    const requireContext = require.context(
        // Search for files in the current directory.
        '../translations',
        // Search for files in subdirectories.
        false,
        // Include any .js files that are not this file or a unit test.
        /^((?!\.unit\.|validation-messages).)*\.js$/
    );

    // Whenever any i18n translation file is updated module is updated...
    module.hot.accept(requireContext.keys().map(key => requireContext.resolve(key)), () => {
        // Update `root.modules` with the latest definitions.

        let translations = require('../translations').default;
        for (const [lang, values] of Object.entries(translations)) {
            if (cacheModules[lang] === values) {
                continue;
            }
            cacheModules[lang] = values;
            i18n.setLocaleMessage(lang, values);
        }
    });
}

export default i18n;
