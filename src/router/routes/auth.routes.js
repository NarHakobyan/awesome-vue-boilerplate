'use strict';

export const authRoutes = [
    {
        path: '/auth/login',
        name: 'login',
        meta: { title: 'login' },
        component: () => import(/* webpackChunkName: "Login" */ '@/views/auth/Login.vue'),
    },
];
