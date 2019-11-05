<template>
    <div class="nav-content">
        <div class="list">
            <a :key="i" v-for="(n,i) in list">{{n}}</a>
        </div>

        <span class="icon iconfont icon-index" @click="chansallnav"></span>
    </div>

</template>

<script>
    export default {
        name: "vnav",
        data(){
            return{
                list:['推荐','手机','智能','电视','笔记本','家电','生活周边']
            }
        },
        methods:{
            chansallnav(){
                this.$emit("ab")
            }
        }
    }
</script>

<style scoped>
    .nav-content{
        width: 3.75rem;
        background-color:#F2F2F2 ;
    }
     .list{
         width: 3.4rem;
         white-space: nowrap;
         overflow: hidden;
         font-size: .135rem;

     }
    .list a{
        display: inline-block;
        font-size: .135rem;
        padding: 0 .13rem;
    }
    .nav-content{
        display: flex;
        height: .3rem;
        line-height: .3rem;
    }
     .nav-content span{
         font-size: .2rem;
     }
</style>