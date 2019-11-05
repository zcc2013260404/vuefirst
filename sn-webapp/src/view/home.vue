<template>
    <div class="home-content">
        <div class="home-content-header">
            <span class="icon iconfont icon-index"></span>
            <div><i class="icon iconfont icon-index"></i><input type="text" value="搜索商品名称"></div>
            <span class="icon iconfont icon-index"></span>
        </div>
        <transition mode="out-in">
            <div :is="flag"  @ab="flag='xm-allnav'" @cd="flag='xm-nav'" style="position: absolute;top: .44rem;z-index: 2">
            </div>
        </transition>
<!--        轮播图-->
        <xm-swiper style="position:absolute;top:.75rem" :pic="data.src" v-if="data.src"></xm-swiper>
<!--        主导航-->
        <div class="home-main-banner">
            <a href="#"><img src="../assets/ima/m3.png"> </a>
            <a href="#"><img src="../assets/ima/m3.webp"> </a>
            <a href="#"><img src="../assets/ima/m4.gif"> </a>
            <a href="#"><img src="../assets/ima/m5.webp"> </a>
            <a href="#"><img src="../assets/ima/m6.webp"> </a>
            <a href="#"><img src="../assets/ima/m3.png"> </a>
            <a href="#"><img src="../assets/ima/m3.png"> </a>
            <a href="#"><img src="../assets/ima/m3.png"> </a>
            <a href="#"><img src="../assets/ima/m3.png"> </a>
            <a href="#"><img src="../assets/ima/m3.png"> </a>
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
         <xm-homepro></xm-homepro>
        </div>
    </div>
</template>

<script>
    import cartApi from "../apis/cartApi"
    import nav from "../components/home/nav";
    import allnav from "../components/home/allnav";
    import swiper from "../components/home/swiper";
    import homepro from "../components/home/homepro";
    export default {
        name: "home",
        methods: {
            /**
             * 页面的数据加载
             **/
            async _initHomeData() {
                let data = await cartApi.getHomeData()
                console.log(data)
                this.data=data
            }
        },
        beforeMount () {
            this._initHomeData()
        },
        data(){
            return{
                flag:"xm-nav",
                data:[]
            }
        },
        components:{
            'xm-nav':nav,
            'xm-allnav':allnav,
            'xm-swiper':swiper,
            'xm-homepro':homepro
        }
    }
</script>

<style scoped>
    .home-content{
       position: relative;
        height: 16rem;
  }
    .home-content-header{
        display: flex;
        height: .44rem;
        line-height: .5rem;
        text-align: center;
        background-color: #F2F2F2;
    }
    .home-content-header span{
        width: .52rem;
        font-size: .26rem;
    }
    .home-content-header div{
        width: 2.7rem;
        height: .34rem;
        line-height: .34rem;
        border: .01rem solid #E4E4E4;
        background-color: white;
        margin-top:.05rem ;
        position: relative;
    }
    .home-content-header i{
        position: absolute;
        font-size: .2rem;
        width: .4rem;
        text-align: center;
        left: 0rem;
    }
    .home-content-header input{
        font-size: .156rem;
        color: #A5A5A5;
        margin-top: .08rem;
        border: none;
    }
    .home-main-banner{
        display: flex;
        margin-top: 2.17rem;
        flex-wrap: wrap;
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