<template>
    <div class="home-content">
        <div class="home-content-header">
            <span class="logo-left"><img src="../assets/ima/m8.png"></span>
            <div><i class="icon iconfont icon-index"></i><input type="text" value="搜索商品名称"></div>
            <a href="#/main/mine" class="logo-right"><img src="../assets/ima/m9.png"></a>
        </div>
        <keep-alive>
            <transition mode="out-in">
                <div :is="flag"  @ab="flag='xm-home-allnav'" @cd="flag='xm-home-nav'" @f1="f1r" @fall1="f1allr"  style="position: absolute;top: .44rem;z-index: 2">
                </div>
            </transition>
        </keep-alive>
        <home-first v-if="com==0" :data="data"></home-first>
        <home-second v-if="com==1" :data="data.phone"></home-second>
        <home-three v-else-if="com==2" :data="data.rooboot"></home-three>
        <home-four v-else-if="com==3"></home-four>
        <home-five v-else-if="com==4"></home-five>
    </div>
</template>

<script>
    import cartApi from "../apis/cartApi"
    import nav from "../components/home/nav";
    import allnav from "../components/home/allnav";
    import first from "../components/home/first/first";
    import second from "../components/home/sccond/second";
    import three from "../components/home/three/three";
    import four from "../components/home/four";
    import five from "../components/home/five";
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
            },
            f1r(i){
                // console.log(i)
                this.com=i
            },
            f1allr(i){
                this.com=i
                this.flag ='xm-home-nav'
            }
        },
        beforeMount () {
            this._initHomeData()
        },
        data(){
            return{
                flag:"xm-home-nav",
                com:0,
                data:[],
            }
        },
        components:{
            'xm-home-nav':nav,
            'xm-home-allnav':allnav,
            'home-first':first,
            'home-second':second,
            'home-three':three,
            'home-four':four,
            'home-five':five
        }
    }
</script>

<style scoped>
    .home-content{
       position: relative;
        overflow: hidden;
  }
    .home-content-header{
        display: flex;
        height: .44rem;
        line-height: .5rem;
        text-align: center;
        background-color: #F2F2F2;
        width: 3.75rem;
        position: fixed;
        z-index:999;
    }
    .home-content-header span{
        width: .52rem;
        font-size: .26rem;
    }
    .home-content-header a{
        width: .52rem;
        font-size: .26rem;
    }
    .logo-left img{
        width: .25rem;
        height: .16rem;
    }
    .logo-right img{
        width: .2rem;
        height: .2rem;
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
</style>