<template>
    <div>
        <div class="sem1">
            <img :src="data.im1">
        </div>
        <div class="esem2">
            <div class="sem2">
                <img :src="data.im2">
            </div>
            <div class="sem3">
                <div class="sem3-left">
                    <p> {{data.title}} </p>
                    <span>{{data.des}}</span>
                </div>
                <div class="sem3-right">
                    <p>{{data.price}}</p>
                    <span>立即预订</span>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "sebigpro",
        props:["data"]
    }
</script>

<style scoped>
    .esem2{
        border-radius: .15rem;
        overflow: hidden;
        margin-bottom: .05rem;
    }
    .sem1 img{
        width: 3.75rem;
        height: .5rem;
        display: block;
    }
    .sem2{
        width: 3.58rem;
        margin: 0 auto;
    }
    .sem2 img{
        width:100%;
        height: 2rem;
        display: block;
    }
    .sem3{
        display: flex;
        padding: .145rem;
        width: 3.58rem;
        margin:  0 auto;
        background-color: white;
        box-sizing: border-box;
    }
    .sem3-left {
        width: 2rem;
    }
    .sem3-left p{
        font-size: .167rem;
        font-weight: 700;
    }
    .sem3-left span {
        font-size: .12rem;
    }
    .sem3-right {
        width: 1.14rem;
    }
    .sem3-right p{
        width: 1.14rem;
        color: #ff4a48;
        font-size: .167rem;
        text-align: center;
        font-weight: 700;
    }
    .sem3-right span{
        display: block;
        font-size: .125rem;
        background-color: rgb(245, 75, 75);
        color: rgb(255, 255, 255);
        width: 1.14rem;
        height: .25rem;
        line-height: .25rem;
        text-align: center;
    }
</style>