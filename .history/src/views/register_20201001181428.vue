<template>
<div>
    <login-top middleTop="注册bilibili"></login-top>
    <login-text style="margin-top:2vw" label='姓名'></login-text>
    <login-text label='账户'></login-text>
    <login-text label='密码'></login-text>
</div>
</template>

<script>
import LoginTop from '../components/commn/LoginTop.vue'
import LoginText from '../components/commn/LoginText.vue'
export default {
    components: {
        LoginTop,
        LoginText
    }
}
</script>

<style scoped>

</style>
