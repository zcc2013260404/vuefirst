import Vue from 'vue'
import Vuex from 'vuex'
import carts from './modules/carts'
Vue.use(Vuex)

// step1: 创建一个仓库，用来管理共享的状态，定义修改状态的规则
let store = new Vuex.Store({
  modules: {
    carts
  }
})

export default store
