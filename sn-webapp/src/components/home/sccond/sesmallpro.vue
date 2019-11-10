<template>
    <div>
        <div class="homepro-content-pro" :key="o" v-for="(p,o) in data">
            <img :src="p.pic" class="im1">
            <img :src="p.sr" class="im2">
            <div class="des">{{p.des}}</div>
            <div class="title">{{p.title}}</div>
            <div class="price"><i>{{p.price}}</i><span>{{p.beforeprice}}</span></div>
            <div class="buy"> <div>立即购买</div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "sesmallpro",
        props:["data"]
    }
</script>

<style scoped>
    .homepro-content-pro{
        width: 1.76rem;
        text-align: center;
        position: relative;
        background-color: white;
        margin-bottom: .06rem;
        border-radius: .05rem;
    }
    .im1{
        width: 1.58rem;
        display: block;
    }
    .im2{
        width: .52rem;
        position: absolute;
        left: 1rem;
        top:.95rem;
        display: block;
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
        margin: 0 auto .2rem;
    }
</style>