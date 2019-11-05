import Vue from 'vue'
import home from "../view/home";
import classify from "../view/classify";
import main from "../view/main";
import mine from "../view/mine";
import cart from "../view/cart";
import VueRouter from 'vue-router'
Vue.use(VueRouter)

let router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/main/home'
    },
    {
      path: '/main',
      component: main,
      children: [
        {
          path: 'home',
          component: home
        },
        {
          path: 'classify',
          component: classify
        },
        {
          path: 'mine',
          component: mine
        },
        {
          path: 'cart',
          component: cart
        },
      ]
    }
  ]
})

// 全局路由guard 前置guard user ->main -> login


export default router
