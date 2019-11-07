<template>
    <div class="homepro-content">
        <div class="homepro-content-pro" :key="i" v-for="(n,i) in product">
            <img :src="n.pic" class="im1">
            <img :src="n.sr" class="im2">
            <div class="des">{{n.title}}</div>
            <div class="title">{{n.des}}</div>
            <div class="price"><i>{{n.price}}</i><span>{{n.beforeprice}}</span></div>
            <div class="buy"> <div>立即购买</div></div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "homepro",
        props:["product"]
    }
</script>

<style scoped>
    .homepro-content{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .homepro-content-pro{
      width: 1.84rem;
        text-align: center;
        position: relative;
    }
    .im1{
        width: 1.85rem;
    }
    .im2{
        width: .52rem;
        position: absolute;
        left: 1.3rem;
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