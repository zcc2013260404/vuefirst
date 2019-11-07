<template>
    <div class="pro-content">
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
        props:["data"]
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