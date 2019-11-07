<template>
    <div class="nav-content">
        <ul>
            <li :key="n" v-for="(n,i) in list" @click="rightchange(i)" :class="{active:isactive==i}"><span>{{n}}</span></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "cnav",
        data(){
            return{
                list:['新品','众筹','小米手机','Redmi手机','黑鲨游戏',
                    '手机配件','电视','大家电','电脑','小爱智能','路由器',
                    '生活电器','厨房电器','智能穿戴','智能家居','车载出行',
                    '个护健康','数码配件','日用百货','有品精选','服务',
                    '米粉卡','零售店'],
                isactive:0
            }

        },
        methods:{
            rightchange(i){
                this.$emit("r1",i)
                this.isactive=i
            }
        }

    }
</script>

<style scoped>
    ul{
        width: .8rem;
        border-right: .01rem solid #EFEFEF;
        overflow-y: auto;
        position: relative;
        height:calc(100vh);
        overflow-y:scroll;
    }
    ul::-webkit-scrollbar{
        display:none;
    }
 li{
     width: .8rem;
     height: .37rem;
     font-size: .13rem;
     text-align: center;
     line-height: .37rem;
     white-space: nowrap;
     overflow: hidden;
     box-sizing: border-box;
     color: #3C3C3C;
     padding: .1rem 0rem;
 }
 .active{
     font-size: .17rem;
     color: #fb7d34;
 }
</style>