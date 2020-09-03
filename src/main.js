import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import CreateExpence from './CreateExpence.vue'
import VueRouter from 'vue-router'
import Vuetify from 'vuetify'
import vScroll from 'vue-scroll'

Vue.config.productionTip = false
Vue.use(VueRouter)
Vue.use(Vuetify)
Vue.use(vScroll)


const vuetify = new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#19458D',
        secondary: '#2870B2',
        accent: '#69C9CE',
        error: '#F94D4F',
        info: '#2196F3',
        success: '#4CAF50',
        warning: '#FED057',
      },
    },
  },
  icons: {
    iconfont: 'mdiSvg',
  },
});

new Vue({
  router,
  vuetify,
  render: h => h(App),
}).$mount('#app')
