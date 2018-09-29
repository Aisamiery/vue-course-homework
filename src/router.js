import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('./views/Home')
        },
        {
            path: '/users',
            name: 'users',
            component: () => import('./views/Users')
        },
        {
            path: '/edit/:userId',
            name: 'edit',
            component: () => import('./views/Edit')
        }
    ],
    linkExactActiveClass: 'active'
})
