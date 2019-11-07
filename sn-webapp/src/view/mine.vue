<template>
   <div class="mine-content">
      <div class="mine-content-header">
         <div>
            <router-link to="/main/regist"><img src="../assets/ima/m2.png"></router-link>
            <span>登录/注册</span>
         </div>
      </div>
      <div class="mine-content-order">
         <div class="order-left">我的订单</div>
         <div class="order-right">全部订单</div>
      </div>
      <ul class="order-pack">
         <li>
            <a href="#">
               <div class="pack-icon icon1"></div>
               <span>待付款</span>
            </a>
         </li>
         <li>
            <a href="#">
               <div class="pack-icon icon2"></div>
               <span>待收货</span>
            </a>
         </li>
         <li>
            <a href="#">
               <div class="pack-icon icon3"></div>
               <span>退换修</span>
            </a>
         </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="us-items">
         <li class="i-member">
            <a href="#/">会员中心</a>
         </li>
         <li class="i-disc">
            <a href="#/">我的优惠</a>
         </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="us-items">
         <li class="i-server">
            <a href="#/">服务中心</a>
         </li>
         <li class="i-mihome">
            <a href="#/">小米之家</a>
         </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="us-items">
         <li class="i-fcode">
            <a href="#/">我的F码</a>
         </li>
         <li class="i-super">
            <a href="#" >礼物码兑换</a>
         </li>
      </ul>
      <div class="ui-line"></div>
      <ul class="us-items">
         <li class="i-res">
            <a href="#" >设置</a>
         </li>
      </ul>
      <div class="ui-line"></div>
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
     border-bottom: .01rem solid #D9D9D9;
   }
   .order-left{
      font-size: .145rem;
      padding-left: .16rem;
   }
   .order-right{
      font-size: .125rem;
      position: relative;
      margin-right: .3rem;
   }
   .order-right::after
  {
      content: "";
      position: absolute;
      right: -.1rem;
      top: 50%;
      width: .08rem;
      height: .08rem;
      border-left: 1px solid currentColor;
      border-top: 1px solid currentColor;
      transform: translate3d(0,-50%,0) rotate(135deg);
      -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
   }
   .order-pack{
      padding: 0 .41rem;
      background-color: #fff;
      display: flex;
      justify-content: space-between;
      align-items: center;
   }
   .order-pack li{
      align-content: space-between;
      position: relative;
      padding: .208rem 0;
      display: flex;
   }
   .icon1{
      background: url(../assets/ima/us-mony.png) no-repeat center 0;
   }
   .icon2{
      background: url(../assets/ima/us-cart.png) no-repeat center 0;
   }
   .icon3{
      background: url(../assets/ima/us-xiu.png) no-repeat center 0;
   }
   .pack-icon{
      width: .25rem;
      height: .25rem;
      margin: 0 .055rem;
      margin-bottom: 0.055rem;
      background-size: 100% auto;
   }
   .order-pack span{
      color: rgba(0,0,0,.87);
   }
   .ui-line{
      height: .105rem;
      background: #f5f5f5;
      overflow: hidden;
      clear: both;
   }
   .i-disc{
      background:url(../assets/ima/us-dis.png) no-repeat 0.18rem;
   }
   .i-member{
      background: url(../assets/ima/us-vip.png) no-repeat 0.18rem;
   }
   .i-server{
      background: url(../assets/ima/us-heart.png) no-repeat 0.18rem;
   }
   .i-mihome{
      background: url(../assets/ima/us-home.png) no-repeat 0.18rem;
   }
   .i-fcode{
      background: url(../assets/ima/us-fcode.png) no-repeat 0.18rem;
   }
   .i-res{
      background: url(../assets/ima/us-she.png) no-repeat 0.18rem;
   }
   .i-super{
      background: url(../assets/ima/user-li.png) no-repeat 0.18rem;
   }
   .us-items li{
      position: relative;
      color: rgba(0,0,0,.54);
      border-bottom: 1px solid rgba(0,0,0,.15);
      background-size: .25rem auto;
   }
   .us-items a{
      padding-right: .29rem;
      padding-left: 0.58rem;
      height: 0.54rem;
      display: -webkit-box;
      color: rgba(0,0,0,.87);
      font-size: 0.145rem;
      -webkit-box-align: center;
   }
   .us-items li:not(:first-child):before {
      content: "";
      position: absolute;
      left: 0;
      top: -2px;
      height: 3px;
      background: #fff;
      width: 0.58rem;
   }
   .us-items li:last-child {
      border-bottom-color: #fff;
   }
   .mine-content{
      margin-bottom: 0.4rem;
   }
</style>