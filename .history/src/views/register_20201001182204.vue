<template>
<div>
    <login-top middleTop="注册bilibili"></login-top>
    <login-text style="margin-top:2vw" label='姓名' placeholder='请输入姓名' rule='^.{6,16}

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
 />
    <login-text label='账户' placeholder='请输入账户' rule='^.{6,16}

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
 />
    <login-text label='密码' placeholder='请输入密码' type='password' rule='^.{6,16}

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
 />
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
