import { createRouterLayout } from 'vue-router-layout';

import { authRoutes } from '@/router/routes/auth.routes';
import { homeRoutes } from '@/router/routes/home.routes';

const RouterLayout = createRouterLayout(layout => {
    return import('@/layouts/' + layout + '.vue');
});

const routes = [
    {
        path: '/',
        component: RouterLayout,
        children: [
            ...authRoutes,
            ...homeRoutes,
            {
                path: '*',
                meta: { title: 'Not Found' },
                component: () => import('@/views/Page404'),
            },
        ],
    },
];

export default routes;
