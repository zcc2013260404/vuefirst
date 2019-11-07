<template>
    <div>
        <div class="homeprob-content" :key="i"   v-for="(n,i) in order">
            <div class="title"><span>{{n.title}}</span></div>
            <div class="im1"><img :src="n.pic1"></div>
            <div class="im2"><img :src="n.pic2"></div>
            <xm-homepro :product="n.products"></xm-homepro>
        </div>
    </div>

</template>

<script>
    import homepro from "./homepro";
    export default {
        name: "homeprob",
        components:{
            'xm-homepro':homepro
        },
        props:['order']

    }
</script>

<style scoped>
.title{
    text-align: center;
}
.title span{
    height: .52rem;
    font-size: .145rem;
    color: #676767;
    line-height: .52rem;
    position: relative;
}
.title span::after{
    content: "";
    position: absolute;
    right: -.1rem;
    top: 50%;
    width: .08rem;
    height: .08rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.im1 img{
    width: 3.75rem;
    height: 1.45rem;
}
.im2 img{
    width: 3.75rem;
    height: 2.3rem;
}
</style>