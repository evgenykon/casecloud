import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Dashboard",
        component: () => import('./views/Dashboard.vue'),
        meta: {title: 'Dashboard - Case Cloud'}
    },
    {
        path: "/modules",
        name: "Modules",
        component: () => import('./views/Modules.vue'),
        meta: {title: 'Modules - Case Cloud'}
    },
    {
        path: "/team",
        name: "Team",
        component: () => import('./views/Team.vue'),
        meta: {title: 'Team - Case Cloud'}
    },
    {
        path: "/tests",
        name: "Tests",
        component: () => import('./views/tests/Index.vue'),
        meta: {title: 'Tests - Case Cloud'}
    },
    {
        path: "/tests/new",
        name: "NewTestRequest",
        component: () => import('./views/tests/NewRequest.vue'),
        meta: {title: 'New test request - Case Cloud'}
    },
    {
        path: "/tests/:id",
        name: "EditTestRequest",
        component: () => import('./views/tests/EditRequest.vue'),
        meta: {title: 'Test request - Case Cloud'}
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from) => {
    document.title = to.meta?.title ?? 'Case Cloud'
})

export default router;