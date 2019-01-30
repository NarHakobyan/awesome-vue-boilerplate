'use strict';

import Vue from 'vue';

export const EventBus = {};

const bus = new Vue();

EventBus.install = function(Vue, _options) {
    // 4. add an instance method
    Vue.prototype.$bus = bus;
};
