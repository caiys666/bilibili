<template>
  <div>
    <login-top middleTop="注册bilibili"></login-top>
    <login-text
      style="margin-top: 2vw"
      label="姓名"
      placeholder="请输入姓名"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.name = res)"
    ></login-text>
    <login-text
      label="账户"
      placeholder="请输入账户"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.username = res)"
    ></login-text>
    <login-text
      label="密码"
      placeholder="请输入密码"
      type="password"
      rule="^.{6,16}$"
      @inputChange="(res) => (model.password = res)"
    ></login-text>
    <login-btn @registerSubmit="registerSubmit" btntext="注册"></login-btn>
  </div>
</template>

<script>
import LoginTop from "../components/commn/LoginTop.vue";
import LoginText from "../components/commn/LoginText.vue";
import LoginBtn from "../components/commn/LoginBtn";
export default {
  data() {
    return {
      model: {
        name: "",
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (
        rulg.test(this.name) &&
        rulg.test(this.username) &&
        rulg.test(this.password)
      ) {
        const res = await this.$http.post("/register", this.model);
      }
    },
  },
  components: {
    LoginTop,
    LoginText,
    LoginBtn,
  },
};
</script>

<style scoped></style>
