<template>
<div>
    <login-top middleTop="注册bilibili"></login-top>
    <login-text style="margin-top:2vw" label="姓名" placeholder="请输入姓名" rule="^.{6,16}$"></login-text>
    <login-text label="账户" placeholder="请输入账户" rule="^.{6,16}$"></login-text>
    <login-text label="密码" placeholder="请输入密码" type="password" rule="^.{6,16}$"></login-text>
    <login-btn btntext='注册'></login-btn>
</div>
</template>

<script>
import LoginTop from "../components/commn/LoginTop.vue";
import LoginText from "../components/commn/LoginText.vue";
import LoginBtn from '../components/commn/LoginBtn';
export default {
    components: {
        LoginTop,
        LoginText,
        LoginBtn
    },
};
</script>

<style scoped></style>
