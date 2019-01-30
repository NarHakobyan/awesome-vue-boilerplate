import Vue from 'vue';
import VueWait from 'vue-wait';
import debounce from 'v-debounce';
import VueResource from 'vue-resource';
import { Validator } from 'vee-validate';
import VeeValidate from 'vee-validate';
import VueConfig from 'vue-configuration';
import { Plugin as FragmentPlugin } from 'vue-fragment';
import dictionary from '@/translations/validation-messages';
import config from '@/config';
import '@/common/validator';

import './vue-awesome.plugin';
import { EventBus } from '@/services/EventBus';

Vue.use(FragmentPlugin);

// global directives

Vue.directive('debounce', debounce);

Vue.use(EventBus);
Vue.use(VueWait);
Vue.use(VueResource);
Vue.use(VueConfig, { config });
Vue.use(VeeValidate, { fieldsBagName: 'formFields', events: 'blur|input' });
Validator.localize(dictionary);
Validator.localize('en');
