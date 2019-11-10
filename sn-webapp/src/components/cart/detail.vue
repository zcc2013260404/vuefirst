<template>
    <div class="detail-content">
        <div class="im1"><img :src="detaildata.pZQImg"></div>
        <div class="buynow">
            <div class="s1">预约中</div>
            <div class="s2"><span >距预约结束2天</span><span>06:44:25</span></div>
        </div>
        <div class="tittle">{{detaildata.pName}}</div>
        <div class="describe"><span>「11月11日0点再次开售，加99元得立式风冷无线充，分期享6期免息」</span>5G双卡全网通超高速网络 / 骁龙855Plus旗舰处理器 / 40W有线闪充+30W无线闪充+10W无线反充，4000mAh长续航 / 4800万全焦段三摄 / 超振感横向线性马达 / VC液冷散热 / 高色准三星AMOLED屏幕 / 多功能NFC</div>
        <div class="price">￥{{detaildata.pPrice}}</div>
        <div class="buyit">
            <a><img src="../../assets/ima/ca1.png"><span>首页</span></a>
            <a><img src="../../assets/ima/ca2.png"><span>购物车</span></a>
            <a href="#/main/cart"  class="appoint" @click="cpp">立即预定</a>
        </div>
    </div>
</template>

<script>
    import cartApi from "../../apis/cartApi";
    export default {
        name: "detail",
        data() {
            return {
                data: [],
                detaildata:[],
                id:""
            }
        },

        methods: {
            async _initCarifyData() {
                let data = await cartApi.getCarData();
                console.log(data);
                this.data = data
                let a = this.$route.params.id;
                this.id=a;
                console.log(a)
                if (this.data.shops) {
                    this.data.shops.forEach((shop) => {
                        shop.products.forEach((product) => {
                            if (product.pId == a) {
                                this.detaildata = product;
                                console.log(this.detaildata)
                            }
                        })
                    })
                }
            },
            cpp(){
                this.$cart.$emit("ca", this.detaildata.pId)
                this.$store.dispatch('INITCART',this.id)
            }
            // updata() {
            //     let a = this.$route.params.id;
            //     console.log(a)
            //     if (this.data) {
            //         this.data.shops.forEach((shop) => {
            //             shop.products.forEach((product) => {
            //                 if (product.pId == a) {
            //                     this.detaildata = product;
            //                     console.log(this.detaildata)
            //                     this.$cart.$emit("ca", this.detaildata)
            //                 }
            //             })
            //         })
            //     }
            // }
        },
        beforeMount() {
            this._initCarifyData()

        }
    }
</script>

<style scoped>
 .detail-content{
     margin-bottom: .55rem;
 }
 .im1 img{
    width: 3.75rem;
     height: 4.12rem;
     display: block;
    }
  .buynow{
      display: flex;
      justify-content: space-between;
      height: .5rem;
      line-height: .5rem;
      padding: 0rem .2rem;
      background-color: #F56600;
      color: white;
  }
  .s1{
      font-size: .167rem;
  }
  .s2{
      font-size: .125rem;
  }
 .tittle{
     height: .47rem;
 }
 .describe{
     height: .9rem;
 }
.price{
    height: .35rem;
}
 .tittle{
     font-size: .20rem;
     line-height: .6rem;
     text-align: center;
 }
 .describe {
     color: #777777;
     margin: .05rem .14rem;
 }
 .describe span{
     color: #FF4A00;
 }
.price{
    color: #ff6700;
    margin: .05rem .14rem;
    font-size: .25rem;
}
 .buyit{
     width: 3.58rem;
     height: .54rem;
     margin: 0 auto;
     box-shadow: 0 2px 4px -1px rgba(0,0,0,.2), 0 4px 5px rgba(0,0,0,.14), 0 1px 10px rgba(0,0,0,.12);
     border-radius: .05rem;
     position: relative;
 }
 .buyit a{
     display: inline-block;
     text-align: center;
     margin-left: .3rem;
     color: #717172;
 }
 .buyit a span{
     display: block;
 }
 .buyit a img{
     width: .2rem;
     height: .2rem;
     margin-top: .1rem;
 }
 .appoint{
     background: #ff6700;
     text-align: center;
     font-size: .145rem;
     padding: .08rem .25rem;
     position: absolute;
     right: .2rem;
     top: .1rem;
     border-radius: .1rem;
     color: white!important;
 }
</style>