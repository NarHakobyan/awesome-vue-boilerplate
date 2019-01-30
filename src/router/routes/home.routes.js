'use strict';

export const homeRoutes = [
    {
        path: '',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '@/views/home/Home'),
        meta: {
            title: 'home',
        },
    },
    {
        path: 'messaging',
        name: 'messaging',
        component: () => import(/* webpackChunkName: "Messaging" */ '@/views/home/Messaging'),
        meta: {
            // authRequired: true, // Authentication check
            title: 'messaging',
            beforeResolve(routeTo, routeFrom, next) {
                setTimeout(() => next(), 2000);
            },
        },
    },
];
