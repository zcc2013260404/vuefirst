<template>
    <div class="footer">
        <router-link to="/main/home"><span class="icon iconfont icon-index"></span>首页</router-link>
        <router-link to="/main/classify"><span class="icon iconfont icon-index"></span>分类</router-link>
        <router-link to="/main/cart"><span class="icon iconfont icon-index"></span>购物车</router-link>
        <router-link to="/main/mine"><span class="icon iconfont icon-index"></span>我的</router-link>
    </div>
</template>

<script>
    export default {
        name: "vfooter"
    }
</script>

<style scoped>
    @import "../assets/icfont/iconfont.css";
    .footer{
        position: fixed;
        bottom: 0;
        width: 100%;
        height:.52rem;
        display: flex;
        justify-content: space-around;
        text-align: center;
        color: #9E9E9E;
    }
    .footer span{
        display: block;
        font-size: .26rem;
    }
    .footer a{
        color: #9E9E9E;
    }
    .footer a.router-link-active {
        color:#F56C03;
    }
</style>