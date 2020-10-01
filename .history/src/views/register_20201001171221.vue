<template>
<div>
    <login-top middleTop="注册bilibili"></login-top>
    <login-text label='用户名'></login-text>
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
