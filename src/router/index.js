import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SearchView from '../views/SearchView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import LoaderView from '../views/LoaderView.vue'

const routes = [
    { path: '/', component: HomeView },
    { path: '/search', component: SearchView },
    { path: '/load', component: LoaderView },
    { path: '/:patWatch(.*)*', component: NotFoundView },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router