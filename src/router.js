import CreateExpence from './CreateExpence.vue'
import GetExpenses from './GetExpenses.vue'
import VueRouter from 'vue-router'


const routes = [
    { name: 'create',path: '/create', component: CreateExpence},
    { name: 'get_expenses',path: '/get_expenses', component: GetExpenses},
]

const router = new VueRouter({
    routes 
})

export default router;