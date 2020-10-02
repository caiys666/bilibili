<template>
  <div>
    <login-top middleTop="登录bilibili">
        <div slot="right" @click="$router.push('/')">切换注册</div>
    </login-top>
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
    <login-btn @registerSubmit="registerSubmit" btntext="登录"></login-btn>
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
        username: "",
        password: "",
      },
    };
  },
  methods: {
    async registerSubmit() {
      let rulg = /^.{6,16}$/;
      if (
        rulg.test(this.model.username) &&
        rulg.test(this.model.password)
      ) {
        const res = await this.$http.post("/login", this.model);
        this.$msg.fail(res.data.msg)
        if(res.data.code == 301 || res.data.code == 302){
          return
        }
        console.log(res);
        localStorage.setItem('token',res.data.token);
        localStorage.setItem('id',res.data.id);
        setTimeout(() => {
          this.$router.push('/userinfo')
        },1000)
        /*-------------------------------------------*/
      } else{
          this.$msg.fail('格式不正确！请重新输入')
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
