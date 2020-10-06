<template>
<div id="Home">
    <navbar></navbar>
    <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="index in 8" :title="'选项'+ index">
            内容{{index}}
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
export default {
    name: 'Home',
    components: {
        Navbar
    },
    methods: {
        async selectCatgroy() {
            const res = this.$http.get('/catgroy');
            console.log(res)
        }
    },
    created() {
        this.selectCatgroy();
    },
}
</script>

<style lang="less" scoped>

</style>
