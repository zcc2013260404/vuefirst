<template>
    <div class="classify-content">
        <xm-cheader title="分类" ref="o"></xm-cheader>
        <div class="classify-content-bpttom">
            <xm-classify-nav @r1="updata"></xm-classify-nav>
            <xm-classify-pro :data="data.m1" v-if="data.m1" :n="index"></xm-classify-pro>
        </div>
    </div>
</template>

<script>
    import cartApi from "../apis/cartApi"
    import cheader from "../components/cheader";
    import nav from "../components/classify/nav";
    import pro from "../components/classify/pro";
    export default {
        name: "vclassify",
        components:{
            'xm-cheader':cheader,
            'xm-classify-nav':nav,
            'xm-classify-pro':pro,
        },
        data(){
            return{
                data:[],
                index:""
            }
        },
        methods:{
            // async _initClassifyData() {
            //     let data = await cartApi.getClassifyData();
            //     console.log(data);
            //     this.data=data
            // },

            async _initClassifyData() {
                let data = await cartApi.getClassData();
                console.log(data);
                this.data=data
            },
            updata(i){
                console.log(i)
                this.index=i
                console.log(this.$refs.i)
            }
        },
        beforeMount () {
            this. _initClassifyData()
        },
        // mounted() {
        //     let o = document.querySelectorAll(".pro-shop")[0]
        //     let o1 = document.querySelectorAll(".pro-shop")[1]
        //     let o2 = document.querySelectorAll(".pro-shop")[2]
        //     console.log(o)
        //     console.log(o1)
        //     console.log(o2)
        // }




    }
</script>

<style scoped>
.classify-content-bpttom{
    display: flex;
}
</style>