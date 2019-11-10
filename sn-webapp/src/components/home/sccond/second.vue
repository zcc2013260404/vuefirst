<template>
    <div>
        <div class="second-content">
            <div class="second-im1"><img :src="data.s1"></div>
            <div class="second-im2"><img :src="data.s2"></div>
        </div>
        <second-sale :data="data"></second-sale>
        <div>
            <div class="second-im3"><img :src="data.s6.s1"></div>
            <div class="second-imall">
                <img :src="n" :key="i" v-for="(n,i) in data.s6.s2">
            </div>
            <div class="second-im3"><img :src="data.s6.s3"></div>
        </div>
        <div class="goodshop">
            <div class="goodlist-item" v-for="(n,i) in data.s7" :key="i">
                <second-sebigro :data="n"></second-sebigro>
                <second-sesmallro :data="n.product" class="good-bottom"></second-sesmallro>
            </div>
        </div>
    </div>
</template>

<script>
    import sale from "./sale";
    import sebigpro from "./sebigpro";
    import sesmallpro from "./sesmallpro";
    export default {
        name: "second",
        props:["data"],
        components:{
            "second-sale":sale,
            "second-sebigro":sebigpro,
            "second-sesmallro":sesmallpro,

        }
    }
</script>

<style scoped>
.second-content{
    margin-top: .74rem;
    width: 100%;
}
.second-im1 img{
    height: 3.86rem;
    display: block;
}
.second-im2 img{
    width: 3.75rem;
    height: .48rem;
    display: block;
}
.second-im3 img{
    width: 3.75rem;
    height: .47rem;
    display: block;
}
.second-imall{
    display: flex;
    flex-wrap: wrap;
}
.second-imall img{
    width: 1.25rem;
    height: 1.4rem;
}
.goodshop{
    background-color:#471793 ;
    padding: 0rem .06rem;
}
.good-bottom{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 3.58rem;
    margin: 0 auto;
}

</style>