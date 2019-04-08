
import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';
import Meta from 'vue-meta'

Vue.use(Router);
Vue.use(Meta)

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/rsvp',
            name: 'rsvp',
            component: () => import('./views/Rsvp.vue')
        },
        {
            path: '/speakers',
            name: 'speakers',
            component: () => import('./views/Speakers.vue')
        },
    ]
});

export default router;

