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
    data() {
        return {
            category: []
        }
    },
    components: {
        Navbar
    },
    methods: {
        async selectCategory() {
            const res = await this.$http.get('/category');
            this.category = res.data;
            console.log(this.category)
        }
    },
    created() {
        this.selectCategory();
    },
}
</script>

<style lang="less" scoped>

</style>
