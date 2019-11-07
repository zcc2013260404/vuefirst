<template>
    <div class="nav-content">
        <div class="list-content">
            <div class="list">
                <a :key="i" v-for="(n,i) in list" @click="trnavc(i)" :class="{active:i==isActive}"><span>{{n}}</span></a>
            </div>
        </div>
        <span class="icon iconfont icon-index" @click="chansallnav"></span>
    </div>

</template>

<script>
    export default {
        name: "vnav",
        data(){
            return{
                list:['推荐','手机','智能','电视','笔记本','家电','生活周边'],
                isActive:0
            }
        },
        methods:{
            chansallnav(){
                this.$emit("ab")
            },
            trnavc(i){
                this.$emit("f1",i)
                this.isActive=i
            }
        }
    }
</script>

<style scoped>
    .nav-content{
        width: 3.75rem;
        background-color:#F2F2F2 ;
    }
     .list-content{
         width: 3.4rem;
         white-space: nowrap;
         overflow: hidden;
         font-size: .135rem;
     }
     .list{
         overflow-x: auto;
     }
    .list::-webkit-scrollbar{
       display:none;
    }
    .list a{
        display: inline-block;
        padding: 0 .13rem;
    }
    .list a span{
        font-size: .135rem;
    }
    .nav-content{
        display: flex;
        height: .3rem;
        line-height: .3rem;
    }
     .nav-content span{
         display: block;
         font-size: .2rem;
         height: .25rem;
         line-height: .25rem;
     }
    .active{
        color:#ED5B00;
    }
    .active span{
        border-bottom:.02rem solid #ED5B00 ;
    }
</style>