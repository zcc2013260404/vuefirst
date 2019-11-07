import Vue from 'vue'
import home from "../view/home";
import classify from "../view/classify";
import main from "../view/main";
import mine from "../view/mine";
import cart from "../view/cart";
import registor from "../components/mine/registor";
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
            component: mine,
        },
        {
          path: 'cart',
          component: cart
        },
        {
          path: 'regist',
          component: registor
        },
      ]
    }
  ]
})

// 全局路由guard 前置guard user ->main -> login
// router.beforeEach((to,from,next)=>{
//   //是按照如下的打印顺序执行的
//   console.log(to)
//   console.log(from)
//   console.log(to.path)
//   if(to.path=='/main/regist'){
//     alert(1)
//   }
//   next()
//
// })

export default router
