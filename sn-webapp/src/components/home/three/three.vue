<template>
    <div class="three-content">
        <div class="th1"><img :src="data.r1" v-if="data"></div>
        <div class="th2"><img :src="data.r2" v-if="data"></div>
        <div class="th3">
            <img :src="n" :key="i" v-for="(n,i) in data.r3">
        </div>
        <div class="th4"><img :src="data.r30"></div>
        <div class="goodlist">
            <div class="shop-items" v-for="(n,i) in data.r4" :key="i">
               <div class="g1">
                   <img :src="p" v-for="(p,o) in n.rr1" :key="o">
               </div>
                <div class="gg2" v-if="n.rr4">
                    <img :src="n.rr4">
                </div>
                <div class="gg3" v-if="n.rr5">
                    <img :src="n.rr5">
                </div>

               <div class="g2"><img :src="n.rr2" v-if="n.rr2"></div>
               <div class="g3"><img :src="n.rr3" v-if="n.rr2"></div>
                <three-thsmallpro :data="n.product"></three-thsmallpro>
            </div>
        </div>

    </div>
</template>

<script>
    import thsmallpro from "./thsmallpro";
    export default {
        name: "three",
        props:["data"],
        components:{
            "three-thsmallpro":thsmallpro
        }
    }
</script>

<style scoped>
    .three-content{
        margin-top: .74rem;
        margin-bottom: .6rem;
    }
    .th1 img{
        width:3.75rem;
        height: 1.52rem;
        display: block;
    }
    .th2 img{
        width: 3.75rem;
        height: 2.41rem;
        display: block;
    }
    .th3{
        display: flex;
    }
    .th3 img{
        width: 1.25rem;
        height: 1.55rem;
        display: block;
    }
    .th4 img{
        width: 3.75rem;
        height: 1.24rem;
        display: block;
    }
    .g1 img{
        height: .42rem;
        width: 25%;
       float: left;
    }
    .g2 img{
        width: 3.75rem;
        height: .46rem;
        display: block;
    }
    .g3 img{
        width: 3.75rem;
        height: .49rem;
        display: block;
    }
    .gg2 img{
        width: 3.75rem;
        height: 1.45rem;
        display: block;
    }
    .gg3 img{
        width: 3.75rem;
        height: .5rem;
        display: block;
    }
</style>