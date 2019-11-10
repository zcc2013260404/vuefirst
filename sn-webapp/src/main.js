import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import router from './router'
import Vuex from 'vuex'
import store from './store'
let cart=new Vue()
Vue.prototype.$cart=cart
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

new Vue({
  router,
   store,
  render: h => h(App),
}).$mount('#app')
