<template>
<div id="LoginText">
    <van-field v-model="value" :label="label" placeholder="请输入用户名" />
</div>
</template>

<script>
export default {
    name: 'LoginText',
    props: ['label']
}
</script>

<style scoped>

</style>
