<template>
    <div class="pro-content">
        {{n}}
        <div class="pro-shop" :key="i" v-for="(n,i) in data">
            <div class="pro-header"><img :src="n.pic"></div>
            <div>
                <xm-classify-item1 :data="n.shops"></xm-classify-item1>
            </div>
        </div>
    </div>

</template>

<script>
    import items1 from "./items1";
    export default {
        name: "pro",
        components:{
            'xm-classify-item1':items1,
        },
        props:["data","n"],
        methods:{

        },
        mounted() {
            let o = document.querySelectorAll(".pro-shop")[0]
            let o1 = document.querySelectorAll(".pro-shop")[1]
            let o2 = document.querySelectorAll(".pro-shop")[2]
            let p=document.getElementsByClassName("pro-shop")

            console.log(o.offsetTop)
            console.log(o1.offsetTop)
            console.log(o)
            console.log(o1)
            console.log(o2)
            console.log(p)
        }
    }
</script>

<style scoped>
.pro-content{
    height:calc(100vh);
    overflow-y:scroll;
}
.pro-shop{
    margin-left: .2rem;
}
 .pro-header img{
     width: 2.60rem;
     height: 1.04rem;
 }
</style>