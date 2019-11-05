<template>
    <div class="homepro-content">
        <img src="../../../public/assets/updaa/h5.jpg">
        <div class="des">Redmi Note 8 Pro</div>
        <div class="title">6400万全场景四摄</div>
        <div class="price"><i>￥1299</i><span>￥1399</span></div>
        <div class="buy"> <div>立即购买</div></div>

    </div>
</template>

<script>
    export default {
        name: "homepro"
    }
</script>

<style scoped>
    .homepro-content{
      width: 1.85rem;
        text-align: center;
    }
    .homepro-content img{
        width: 1.85rem;
    }
    .des{
        font-size: .145rem;
        margin: .05rem 0rem;
    }
    .title{
        color: #777777;
    }
    .price i{
        color: #EA625B;
        font-style: normal;
        font-size: .146rem;
        font-weight: 400;
    }
    .price span{
        text-decoration: line-through;
        color: #777777;
    }
    .buy div{
        background: #ea625b;
        width: 1rem;
        height: .3rem;
        line-height: .3rem;
        border-radius: .02rem;
        text-align: center;
        color: #fff;
        font-size: .125rem;
        font-weight: 500;
        margin: 0 auto;

    }
</style>