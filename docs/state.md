# State management

- [State management](#state-management)
  - [Modules](#modules)
  - [Helpers](#helpers)
  - [Default Helpers](#default-helpers)

## Modules

The `src/store/modules` directory is where all shared application state lives. Any JS file added here (apart from unit tests) will be automatically registered in the store as a [namespaced module](https://vuex.vuejs.org/en/modules.html#namespacing).

Read more in the [Vuex modules](https://vuex.vuejs.org/en/modules.html) docs.

## Helpers

The state helpers in `src/store/helpers/*.helper.js` are the components' interface to the Vuex store. Depending on a component's concerns, we can import a subset of these helpers to quickly bring in the data and actions we need.

You might be thinking, "Why not just automatically inject all of these into every component?" Well, then it would be difficult to figure out where a particular part of state is coming from. As our state becomes increasingly complex, the risk would also increase of accidentally using the same names for internal component state. This way, each component remains traceable, as the necessary `import` will provide a thread back to our helpers file if we ever don't understand where something is coming from.

Here's an example:

```js
import { authComputed } from '@state/helpers/auth'

export default {
  computed: {
    ...authComputed,
  },
}
```

## Default Helpers

Vue Awesome Boilerplate has it's own default helpers in `src/store/helpers/default.helper.js`.

- `makeDefaultState` combines all default state objects
- `makeMutations` combines all mutations objects and adds `resetState` mutation, `resetState` mutation resets specified fields or all data object
- `makeGetters` combines all getters objects
- `makeActions` combines all actions objects
- `withLoading` adds loading to action, which will start loading when action is triggered and stops after complete (success or error)


Here's an example:

```js
import Auth from '@/resources/Auth';
import { commit } from 'vuex-pathify';
import { makeMutations, makeGetters, makeActions, withLoading } from '@/store/helpers/default.helper';

const defaultState = {
    token: null,
    user: null,
};

const mutations = {};
const getters = {
    isAuthenticated: state => !!state.token,
};

const actions = {
    login: withLoading('authState/login', async (_, credentials) => {
        const res = await Auth.login(credentials);
        commit('authState/SET_TOKEN', res.body.token.access);
        commit('authState/SET_USER', res.body.user);
        return res;
    }),
};

export default {
    state: defaultState,
    mutations: makeMutations(defaultState, mutations),
    actions: makeActions(defaultState, actions),
    getters: makeGetters(defaultState, getters),
};

```
