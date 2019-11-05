<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
 import cartApi from "./apis/cartApi"
 // import main from "./components/view/main";

export default {
  name: 'app',
  methods: {
    /**
     * 页面的数据加载
     **/
  async _initPageData() {
    let data = await cartApi.getCartInfoByUserId()
    console.log(data)
  }
  },
  beforeMount () {
    this._initPageData()
  },
 }
</script>

<style>
  @import "assets/css/index.css";
</style>
