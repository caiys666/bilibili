<template>
<div id="Home">
    <navbar></navbar>
    <van-tabs v-model="active">
        <van-tab title="标签 1">内容 1</van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
        <van-tab title="标签 4">内容 4</van-tab>
    </van-tabs>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
export default {
    name: 'Home',
    components: {
        Navbar
    }
}
</script>

<style lang="less" scoped>

</style>
