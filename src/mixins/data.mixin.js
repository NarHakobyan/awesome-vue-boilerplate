'use strict';

import { get, set } from 'lodash';

export const DataMixin = {
    methods: {
        resetData(path) {
            const defaultState = this.$options.data();

            if (path) {
                set(this.$data, path, get(defaultState, path));
            } else {
                Object.assign(this.$data, defaultState);
            }
        },
    },
};
