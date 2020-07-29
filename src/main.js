import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import CreateExpence from './CreateExpence.vue'
import VueRouter from 'vue-router'

Vue.config.productionTip = false
Vue.use(VueRouter)

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
