<template>
    <div class="main-content">
        <router-view></router-view>
        <xm-footer></xm-footer>
    </div>
</template>

<script>
    import footer from "../components/footer";

    export default {
        name: "vmain",
        components:{
            'xm-footer':footer
        }
    }
</script>

<style scoped>
    .main-content{
        /*background-color:#F5F5F5 ;*/
        overflow: hidden;
    }
</style>