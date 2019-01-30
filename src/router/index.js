import Vue from 'vue';
import Router from 'vue-router';
import NProgress from 'nprogress';

import store from '@/store';
import i18n from '@/plugins/i18n.plugin';

import routes from './routes';

Vue.use(Router);

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
});

router.beforeEach(async (to, from, next) => {
    function redirectToLogin() {
        // Pass the original route to the login component
        next({ name: 'login', query: { redirectFrom: to.fullPath } });
    }

    // If this isn't an initial page load...
    if (from.name !== null) {
        // Start the route progress bar.
        NProgress.start();
    }

    /* FIXME: use https://github.com/declandewet/vue-meta,
    https://stackoverflow.com/questions/36612847/how-can-i-bind-the-html-title-content-in-vuejs#answer-40388120
    https://github.com/vuejs/vue-router/issues/914#issuecomment-376719306*/
    document.title = to.meta.title || i18n.t('app.title');
    const authRequired = to.matched.some(record => record.meta.authRequired);

    // If auth isn't required for the route, just continue.
    if (!authRequired) return next();

    // If auth is required and the user is logged in...
    const token = store.get('authState/isAuthenticated');

    if (token) {
        if (store.get('authState@user')) {
            return next();
        }
        // Validate the local user token...
        const currentUser = await store.dispatch('authState/fetchCurrentUser');
        // Then continue if the token still represents a valid user,
        // otherwise redirect to login.
        return currentUser ? next() : redirectToLogin();
    }

    // If auth is required and the user is NOT currently logged in,
    // redirect to login.
    redirectToLogin();
});

router.beforeResolve(async (routeTo, routeFrom, next) => {
    // Create a `beforeResolve` hook, which fires whenever
    // `beforeRouteEnter` and `beforeRouteUpdate` would. This
    // allows us to ensure data is fetched even when params change,
    // but the resolved route does not. We put it in `meta` to
    // indicate that it's a hook we created, rather than part of
    // Vue Router (yet?).
    try {
        // For each matched route...
        for (const route of routeTo.matched) {
            await new Promise((resolve, reject) => {
                // If a `beforeResolve` hook is defined, call it with
                // the same arguments as the `beforeEnter` hook.
                if (route.meta && route.meta.beforeResolve) {
                    route.meta.beforeResolve(routeTo, routeFrom, (...args) => {
                        // If the user chose to redirect...
                        if (args.length) {
                            // If redirecting to the same route we're coming from...
                            if (routeFrom.name === args[0].name) {
                                // Complete the animation of the route progress bar.
                                NProgress.done();
                            }
                            // Complete the redirect.
                            next(...args);
                            reject(new Error('Redirected'));
                        } else {
                            resolve();
                        }
                    });
                } else {
                    // Otherwise, continue resolving the route.
                    resolve();
                }
            });
        }
        // If a `beforeResolve` hook chose to redirect, just return.
    } catch (error) {
        return;
    }

    // If we reach this point, continue resolving the route.
    next();
});

// When each route is finished evaluating...
router.afterEach(() => {
    // Complete the animation of the route progress bar.
    NProgress.done();
});

export default router;
