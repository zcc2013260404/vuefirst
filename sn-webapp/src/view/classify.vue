<template>
    <div class="classify-content">
        <xm-cheader title="分类" ref="o"></xm-cheader>
        <div class="classify-content-bpttom">
            <xm-classify-nav @r1="updata"></xm-classify-nav>
            <xm-classify-pro :key="i" v-for="(n,i) in data" :data="n" ref="" ></xm-classify-pro>
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
                console.log(this.$refs.o)
            }
        },
        beforeMount () {
            this. _initClassifyData()
        },



    }
</script>

<style scoped>
.classify-content-bpttom{
    display: flex;
}
</style>