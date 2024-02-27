import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: "/",
        name: "Home",
        component: import('./views/Home.vue'),
        meta: {title: 'Home - Case Cloud'}
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