<template>
    <div class="first-content">
        <!--        轮播图-->
        <xm-swiper style="position:absolute;top:.75rem" :pic="data.src" v-if="data.src"></xm-swiper>
        <!--        主导航-->
        <div class="home-main-banner">
            <a href="#"><img src="@/assets/ima/m3.png"> </a>
            <a href="#"><img src="@/assets/ima/m3.webp"> </a>
            <a href="#"><img src="@/assets/ima/m4.gif"> </a>
            <a href="#"><img src="@/assets/ima/m5.webp"> </a>
            <a href="#"><img src="@/assets/ima/m6.webp"> </a>
            <a href="#"><img src="@/assets/ima/m4.png"> </a>
            <a href="#"><img src="@/assets/ima/m6.jpg"> </a>
            <a href="#"><img src="@/assets/ima/m5.png"> </a>
            <a href="#"><img src="@/assets/ima/m6.png"> </a>
            <a href="#"><img src="@/assets/ima/m7.png"> </a>
        </div>
        <div class="home-pro1">
            <div class="home-pro1-l"> <img :src="data.s1" > </div>
            <div class="home-pro1-r">
                <img :src="data.s2" >
                <img :src="data.s3" >
            </div>
        </div>
        <div class="home-pro2">
            <img :src="data.s4" >
        </div>
        <div clsaa="home-proall">
            <xm-homepro :product="data.products"></xm-homepro>
            <xm-homeprob :order="data.order"></xm-homeprob>
        </div>
    </div>

</template>

<script>
    import swiper from "../swiper";
    import homepro from "./homepro";
    import homeprob from "./homeprob";
    export default {
        name: "first",
        props:['data'],
        components:{
            'xm-swiper':swiper,
            'xm-homepro':homepro,
            'xm-homeprob':homeprob,
        }
    }
</script>

<style scoped>
    .first-content{
        overflow: hidden;
    }
    .home-main-banner{
        display: flex;
        flex-wrap: wrap;
        margin-top: 2.61rem;
    }
    .home-main-banner img{
        width: .75rem;
        height: .795rem;
        display: block;
    }
    .home-pro1{
        display: flex;
        justify-content: space-between;
    }
    .home-pro1-l{
        width:1.86rem ;
        height: 2.64rem;
        background-color: white;
    }
    .home-pro1-l img{
        width:1.86rem ;
        height: 2.64rem;
    }
    .home-pro1-r{
        width:1.85rem ;
        height: 1.32rem;
    }
    .home-pro1-r img{
        width:1.85rem ;
        height: 1.32rem;
        display: block;
    }
    .home-pro1-r img:first-child{
        margin-bottom: .03rem;
    }
    .home-pro2 img{
        width:3.75rem ;
        height:2.30rem ;
    }
</style>