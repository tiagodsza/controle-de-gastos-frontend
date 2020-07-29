import CreateExpence from './CreateExpence.vue'
import VueRouter from 'vue-router'


const routes = [
    { name: 'create',path: '/create', component: CreateExpence},
]

const router = new VueRouter({
    routes // short for `routes: routes`
})

export default router;