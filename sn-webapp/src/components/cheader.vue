<template>
    <div class="cheader-content">
        <span class="icon iconfont icon-index"></span>
        <div>
            {{title}}
        </div>
        <span class="icon iconfont icon-index"></span>
    </div>
</template>

<script>
    export default {
        name: "cheader",
       props:['title']
    }
</script>

<style scoped>
.cheader-content{
    display: flex;
    height: .5rem;
    background-color: #F2F2F2;
    font-size: .156rem;
    line-height: .5rem;
    text-align: center;
}
.cheader-content span{
    width: .52rem;
    font-size: .26rem;
}
.cheader-content div{
    width: 2.7rem;
}
</style>