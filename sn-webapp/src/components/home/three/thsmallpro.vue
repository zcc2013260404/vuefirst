<template>
    <div class="threesmall-content">
        <div class="goods-item" v-for="(l,u) in data" :key="u">
            <img :src="l.pic">
            <div class="goods-text">
                <h5>{{l.title}}</h5>
                <p>{{l.des}}</p>
                <span>{{l.price}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "thsmallpro",
        props:["data"]
    }
</script>

<style scoped>
.threesmall-content{
    padding: 0rem .083rem;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    background-color: #481794;
}
.goods-item{
    width: 1.15rem;
    background-color: white;
    margin-bottom: .05rem;
}
.goods-item img{
    width: 1.15rem;
    height: 1.15rem;
}
.goods-text{
    text-align: center;
    padding: 0.1rem 0.05rem;
}
.goods-text p{
    font-size: .125rem;
    width: 1rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
}
.goods-text span{
    color:#F54B4B;
    font-size: .145rem;
    font-weight: 800;
}
</style>