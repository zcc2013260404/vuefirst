<template>
    <ul class="homepro-content">
        <li class="homepro-content-pro" :key="i" v-for="(n,i) in data.sale">
            <img :src="n.pic" class="im1">
            <img :src="n.sr" class="im2">
            <div class="des">{{n.des}}</div>
            <div class="title">{{n.title}}</div>
            <div class="price"><i>{{n.price}}</i><span>{{n.beforeprice}}</span></div>
            <div class="buy"> <div>立即购买</div></div>
        </li>
    </ul>
</template>

<script>
    export default {
        name: "secondsale",
        props:["data"]
    }
</script>

<style scoped>
    .homepro-content{
        display: -webkit-box;
        background-color: #250168;
        overflow-x: auto;
        margin-left: -.6rem;
        height: 2.5rem;
    }
    .homepro-content::-webkit-scrollbar{
        display:none;
    }
    .homepro-content-pro{
        width: 1.58rem;
        text-align: center;
        position: relative;
        margin-right: .05rem;
        background-color: white;
    }
    .im1{
        width: 1.58rem;
    }
    .im2{
        width: .52rem;
        position: absolute;
        left: 1rem;
        top:.95rem
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