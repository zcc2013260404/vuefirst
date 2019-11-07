<template>
    <div class="allnav-content">
          <div class="allnav-content-header">
              <span>全部</span>
              <span class="icon iconfont icon-index" @click="chansnav"></span>
          </div>
          <div class="allnav-content-nav">
              <div :key='i' v-for="(n,i) in list" @click="trallnav(i)" :class="{active:i==isActive}">
                  <span>{{n}} </span>
              </div>
          </div>
    </div>
</template>

<script>
    export default {
        name: "allnav",
        data(){
            return{
                list:['推荐','手机','智能','电视','笔记本','家电','生活周边'],
                isActive:0
            }
        },
        methods:{
            chansnav(){
                this.$emit("cd")
            },
            trallnav(i){
                this.$emit("fall1",i)
                this.isActive=i
                console.log(i)
            }
        }

    }
</script>

<style scoped>
.allnav-content{
    position: relative;
    height: 1.3rem;
    background-color: #F2F2F2;
    padding: 0 .13rem;
}
.allnav-content-header span:first-child{
    font-size: .145rem;
}
.allnav-content-header span:last-child{
    font-size: .2rem;
}
.allnav-content-header{
    display: flex;
    justify-content: space-between;
}
.allnav-content-nav{
    display: flex;
    flex-wrap: wrap;
}
 allnav-content-nav div{
    width: 25%;
 }
.allnav-content-nav span{
    display: block;
    width: .78rem;
    height: .3rem;
    border: .01rem solid #E5E5E5;
    background-color: white;
    line-height: .3rem;
    text-align: center;
    margin: .1rem .07rem .1rem 0rem;
    border-radius: .05rem;
}
.active{
    color:#ED5B00;
}
.active span{
    border-color: #FF6700;
    background-color: #FDE0D5;
    color: #FF6700;
}
</style>