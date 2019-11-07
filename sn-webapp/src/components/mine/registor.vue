<template>
    <div class="registor-content">
        <div class="registor-logo">
            <a> <img src="../../assets/ima/r1.png"><span>小米账号登录</span></a>
        </div>
        <div class="res-phone">
            <div v-if="flag">+86<span class="icon iconfont icon-index"></span></div>
            <div><input type="text" :placeholder="flag?'手机号码':'邮箱/手机号码/小米ID'" ></div>
        </div>
        <div class="res-number">
            <div><input type="text" :placeholder="flag?'短信验证码':'密码'"></div>
            <div>获取验证码</div>
        </div>
        <div class="submit" @click="changems1">
           {{ms1}}
        </div>
        <div class="phone-submit" @click="changems2">
            {{ms2}}
        </div>
        <div class="remember">
            <a>立即注册</a>
            <a>忘记密码？</a>
        </div>
        <div class="other-way">
          <a>其他方式登录</a>
        </div>
    </div>
</template>

<script>
    export default {
        name: "vregistor",
        data(){
            return{
                ms1:"立即登录/注册",
                ms2:"用户名密码登录",
                flag:true
            }
        },
        methods:{
            changems2(){
                this.ms1="登录";
                this.ms2="手机短信登录/注册";
                this.flag=false
            },
            changems1(){
                this.ms1="立即登录/注册";
                this.ms2="用户名密码登录";
                this.flag=true
            }
        }
    }
</script>

<style scoped>
.registor-content{

}
.registor-logo{
    margin-top: .3rem;
    text-align: center;
}
.registor-logo a span{
    display: block;
    font-size: .18rem;
    margin-top: .1rem;
}
.res-phone{
    width: 3.35rem;
    height: .54rem;
    border-bottom: .015rem solid #D3D3D3;
    margin: 0 auto;
    display: flex;
    font-size: .18rem;
    line-height: .56rem;
    color:#9B9B9B
}
.res-phone div:first-child{
    margin-right: .1rem;
}
.res-phone div:first-child span{
    margin-left: .05rem;
}
.res-phone input{
    font-size: .18rem;
    color:#9B9B9B;
    border: none;
    outline: none;
}
.res-number{
    width: 3.35rem;
    height: .54rem;
    border-bottom: .015rem solid #D3D3D3;
    margin: 0 auto;
    display: flex;
    line-height: .56rem;
}
.res-number input{
    font-size: .18rem;
    color:#9B9B9B;
    border: none;
    outline: none;
}
.res-number div:last-child{
    cursor: pointer;
    color: #2ea5e5;
    font-size: .14rem;
    margin-left: .3rem;
}
.submit{
    width: 3.35rem;
    height: .44rem;
    background-color: #FF6700;
    margin: .24rem auto 0;
    color: white;
    font-size: .18rem;
    text-align: center;
    line-height: .44rem;
    border-radius: .05rem;
}
.phone-submit{
    width: 3.35rem;
    height: .44rem;
    margin: .24rem auto 0;
    font-size: .18rem;
    text-align: center;
    line-height: .44rem;
    border:.01rem solid #D3D3D3;
    border-radius: .05rem;
}
 .remember{
     height: .21rem;
     text-align: center;
     margin: .15rem;
 }
.remember a{
    font-size: .16rem;
    padding: 0rem .1rem;
    color: #9BA7C3;

}
.remember a:first-child{
    border-right: .01rem solid #87004F;
}
 .other-way{
     width: 3.35rem;
     height: .4rem;
     border-bottom:.01rem solid #A79BA7;
    margin: 0 auto;
     position: relative;

 }
.other-way a{
    position: absolute;
    bottom:-.05rem;
    left: 1.4rem;
    z-index: 9999;
    color: #A79BA7;
    height: .21rem;
    background-color: white;
    line-height: .26rem;
}
</style>