<template>
    <div class="cart-content">
        <xm-cheader title="购物车"></xm-cheader>
        <div class="cart-center">
            <div>登录后享受更多优惠</div>
            <a>去登录</a>
        </div>
        <div class="cart-null">
            <span>购物车还是空的</span>
            <em>去逛逛</em>
        </div>
        <div class="youlike">
            <img src="../assets/ima/m7.jpg">
        </div>
        <div class="goodlist" v-if="data.shops">
            <a :href="'#/main/detail/'+u.pId" class="good-item" :key="i" v-for="(u,i) in data.shops[0].products" >
               <img src="../assets/ima/m7.jpg">
                <div class="good-tip">
                    <p>{{u.pName}}</p>
                    <span>￥{{u.pPrice}}</span>
                </div>
            </a>
        </div>
        <a href="#/main/detail/1">点我跳转{{buydata}}</a>
        <a href="#/main/detail/2">点我跳转</a>
        <div>{{buydata}}</div>
    </div>
</template>

<script>
    import cheader from "../components/cheader";
    import cartApi from "../apis/cartApi";
    export default {
        name: "cart",
        components:{
            'xm-cheader':cheader
        },
        data(){
            return{
              data:[],
              buydata:''
            }
        },
        methods:{
            async _initCartyData() {
                let data = await cartApi.getCarData();
                console.log(data);
                this.data=data;
                // this.$cart.$on("ca",(a)=>{
                //     this.buydata=a
                //     console.log( this.buydata)
                // })
            },
            updatadata(a){
                this.buydata=a
                console.log(this.buydata)
                console.log(233)
                // this.data.shops.forEach((shop)=>{
                //     shop.products.forEach((product)=>{
                //         // if(product==)
                //     })
                // })
            }
        },
        async beforeMount() {
            await  this._initCartyData()
            this.$cart.$on("ca",this.updatadata)
        },
        // beforeMount(){
        //     this.$cart.$on("ca",this.updatadata)
        // },

    }
</script>

<style scoped>
 .cart-content {
   height: 16rem;
 }
.cart-center{
 display: flex;
    height: .54rem;
    line-height: .54rem;
    margin: 0 .15rem;
    justify-content: space-between;
}
.cart-center div{
font-size: .17rem;
}
.cart-center a{
    font-size: .125rem;
    position: relative;
    margin-right: .18rem;
    color: #777777;
}
.cart-center a:after{
    content: "";
    position: absolute;
    right: -.1rem;
    top: 50%;
    width: .1rem;
    height: .1rem;
    border-left: 1px solid currentColor;
    border-top: 1px solid currentColor;
    transform: translate3d(0,-50%,0) rotate(135deg);
    -webkit-transform: translate3d(0,-50%,0) rotate(135deg);
}
.cart-null{
    height: .61rem;
    line-height: .61rem;
    background-color: #EBEBEB;
    text-align: center;

}
.cart-null span{
    display: inline-block;
    line-height: .4rem;
    background: url("../assets/ima/m10.png") no-repeat 0;
    background-size: auto 100%;
    color: rgba(0,0,0,.27);
    padding-left: .4rem;
    font-size: .125rem;
    margin-left: -.4rem;
}
.cart-null em{
    display: inline-block;
    line-height: .26rem;
    font-size: .125rem;
    font-style: normal;
    width: .64rem;
    height: .26rem;
    border: .01rem solid #C8C8C8;
    margin-left: .1rem;
}
.youlike img{
    height: .625rem;
}
 .goodlist{
     display: flex;
     justify-content: space-between;
     flex-wrap: wrap;
 }
 .good-item{
     width: 1.85rem;
     font-size: .145rem;
 }
.good-item img{
    width: 1.85rem;
    height: 1.85rem;
}
.good-tip p{
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
    width: 1.58rem;
}
 .good-tip{
     padding: .09rem .12rem;
 }
 .good-tip span{
     color: #ff6700;
     font-size: .16rem;
 }
</style>