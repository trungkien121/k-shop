import config from '@/config';
import { BasicLayout } from '@/layouts';
import CreateArticle from '@/pages/CreateArticle';
import Home from '@/pages/Home';

import Login from '@/pages/Login';
import Product from '@/pages/Product';
import Register from '@/pages/Register';

const publicRoutes = [
    {
        path: config.routes.home,
        component: Home,
        // layout: BasicLayout,
    },
    {
        path: config.routes.product,
        component: Product,
        layout: BasicLayout,
    },
    {
        path: config.routes.login,
        component: Login,
        layout: BasicLayout,
    },
    {
        path: config.routes.register,
        component: Register,
    },
    {
        path: config.routes.CreateArticle,
        component: CreateArticle,
    },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
