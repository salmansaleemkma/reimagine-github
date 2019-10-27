import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router/index.js'
import axios from 'axios'

Vue.use(VueRouter)
Vue.config.productionTip = false

Vue.use({
    install (Vue) {
    Vue.prototype.$api = axios.create({
      baseURL: 'https://api.github.com/'
    })
  }
})

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
