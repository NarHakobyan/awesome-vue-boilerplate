'use strict';

import debouncePromise from 'debounce-promise';
import { make, dispatch } from 'vuex-pathify';
import { set, get } from 'lodash';

/**
 * make default state
 * @param {Object} defaultState
 * @param {Object} states
 * @returns {Object}
 */
export function makeDefaultState(defaultState, ...states) {
    const data = { ...defaultState };
    for (let d of states) {
        Object.assign(data, d);
    }
    return data;
}

/**
 * make mutations
 * @param {Object} defaultState
 * @param {Object} mutations
 * @returns {Object}
 */
export function makeMutations(defaultState, ...mutations) {
    const data = { ...make.mutations(defaultState) };
    for (let d of mutations) {
        Object.assign(data, d);
    }

    data.resetState = (state, paths) => {
        if (!paths) {
            Object.assign(state, defaultState);
        }
        for (const path of paths) {
            set(state, path, get(defaultState, path));
        }
    };
    return data;
}

/**
 * make getters
 * @param {Object} defaultState
 * @param {Object} getters
 * @returns {Object}
 */
export function makeGetters(defaultState, ...getters) {
    const data = { ...make.getters(defaultState) };
    for (let d of getters) {
        Object.assign(data, d);
    }
    return data;
}

/**
 * make Actions
 * @param {Object} defaultState
 * @param {Object} actions
 * @returns {Object}
 */
export function makeActions(defaultState, ...actions) {
    const data = { ...make.actions(defaultState) };
    for (let d of actions) {
        Object.assign(data, d);
    }
    return data;
}

/**
 * Add loading to action
 *
 * @export
 * @param {String} loaderName
 * @param {Function} handler
 * @returns {Function}
 */
export function withLoading(loaderName, handler) {
    return withActions({ loader: loaderName }, handler);
}

/**
 * Add actions to vuex action handler
 * @param {{loader: string, debounce: boolean | number = true}} action
 * @param handler
 * @returns {Promise<(function(...[*]): *)>|(function(...[*]): *)}
 */
export function withActions(action, handler) {
    const newHandlerFunction = async (...args) => {
        let data;
        if (action.loader) {
            await dispatch('wait/start', action.loader, { root: true });
        }
        try {
            data = await handler(...args);
        } finally {
            if (action.loader) {
                await dispatch('wait/end', action.loader, { root: true });
            }
        }
        return data;
    };
    if (action.debounce) {
        const debounceTime = action.debounce === true ? 300 : action.debounce;
        return debouncePromise(newHandlerFunction, debounceTime);
    }

    return newHandlerFunction;
}
