<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide box1"><img :src="pic.s1"/></div>
            <div class="swiper-slide box1"><img :src="pic.s2"/></div>
            <div class="swiper-slide box1"><img :src="pic.s3"/></div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination">

        </div>
    </div>
</template>

<script>
    import Swiper from 'swiper'
    import "swiper"
    export default {
        name: "vswiper",
        props:["pic"],
        mounted(){
            //需要在mounted里写
            this._initddf()
        },
        methods:{
            _initddf(){
                new Swiper('.swiper-container', {
                    pagination:{
                        el:".swiper-pagination",
                    }
                })
            }
        }
    }
</script>

<style scoped>
    @import "../../../node_modules/swiper/css/swiper.css";
    .swiper-container {
        width: 3.75rem;
        height: 1.87rem;
    }
    .swiper-container img{
        width: 3.75rem;
        height: 1.87rem;
    }
    .swiper-pagination-bullet-active{
        background-color: white!important;
    }
</style>