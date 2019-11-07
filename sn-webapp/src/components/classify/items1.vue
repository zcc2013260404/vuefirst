<template>
    <div>
        <div class="item-content" :key="n.title" v-for="n in data">
            <div class="item-header"><span>{{n.title}}</span></div>
            <div class="item-product">
                <a :key="n.title" v-for="n in n.products">
                    <img :src="n.pic">
                    <span>{{n.title}}</span>
                </a>
            </div>
    </div>
    </div>
</template>

<script>
    export default {
        name: "items",
        props:["data"]
    }
</script>

<style scoped>
.item-header{
    text-align: center;
    height: .66rem;
    line-height: .66rem;
    font-size: .145rem;
}
.item-header span{
    position: relative;
    color: #3C3C3C;
    font-size: .145rem;
}
.item-header span:before{
    content: "";
    position: absolute;
    top: 50%;
    left:-.3rem;
    width: .25rem;
    border-top: .02rem solid #e0e0e0;
}
.item-header span:after{
    content: "";
    position: absolute;
    top: 50%;
   right:-.3rem;
    width: .25rem;
    border-top: .02rem solid #e0e0e0;
}
    .item-product{
        display: flex;
        flex-wrap: wrap;
    }
.item-product a{
    display: inline-block;
    width: .87rem;
    text-align: center;
}
.item-product img{
    width: .52rem;
    height: .52rem;
}
.item-product span{
    display: inline-block;
    color: #777777;
    margin: .145rem 0rem;
}
</style>