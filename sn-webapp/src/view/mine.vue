<template>
   <div class="mine-content">
      <div class="mine-content-header">
         <div>
            <img src="../assets/ima/m2.png">
            <span>登录/注册</span>
         </div>
      </div>
      <div class="mine-content-order">
         <div class="order-left">我的订单</div>
         <div class="order-right">全部订单<span class="icon iconfont icon-index"></span></div>
      </div>
   </div>
</template>

<script>
    export default {
        name: "mine",
    }
</script>

<style scoped>
   .mine-content-header{
      width: 3.75rem;
      height: .83rem;
      background: url(../assets/ima/m1.png) center 0 #f37d0f;
      background-size: auto 100%;
      overflow: hidden;
   }
   .mine-content-header div{
      display: flex;
      width: 3.75rem;
      height: .5rem;
      line-height: .5rem;
      margin-top: .17rem;
   }
   .mine-content-header img{
      width: .44rem;
      height: .44rem;
      margin-left: .2rem;
   }
   .mine-content-header span{
      color:white;
      font-size: .125rem;
      margin-bottom: .2rem;
      margin-left: .15rem;
   }
   .mine-content-order{
      height: .42rem;
      display: flex;
      justify-content: space-between;
      line-height: .42rem;
   }
   .order-left{
      font-size: .145rem;
      padding-left: .16rem;
   }
   .order-right{
      font-size: .125rem;
   }
   .order-right span{
      display: inline-block;
      text-align: center;
      width: .3rem;
   }
</style>