import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Index',
        redirect: '/list',
        component: () => import(/* webpackChunkName: "index" */ '../views/index/index.vue'),
        children: [
            {
                path: '/list',
                name: 'List',
                component: () => import(/* webpackChunkName: "index" */ '../views/index/article-list/index.vue')
            },
            {
                path: '/article',
                name: 'Article',
                component: () => import(/* webpackChunkName: "index" */ '../views/index/acticle/index.vue')
            },
        ]
    },

]

const router = createRouter({
    // history: createWebHistory(process.env.VITE_BASE_URL),
    history: createWebHistory('./'),
    routes
})

export default router
