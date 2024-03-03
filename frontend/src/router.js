import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import('./views/Dashboard.vue'),
        meta: {title: 'Dashboard - Case Cloud'}
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Case Cloud'
})

export default router;