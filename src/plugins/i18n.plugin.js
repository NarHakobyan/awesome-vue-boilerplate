import Vue from 'vue';
import VueI18n from 'vue-i18n';
import elementEnLocale from 'element-ui/lib/locale/lang/en'; // element-ui en lang
import enLocale from '../translations/en';

Vue.use(VueI18n);

const messages = {
    en: {
        ...enLocale,
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

export default i18n;
