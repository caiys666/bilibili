<template>
<div id="LoginText">
    <van-field v-model="text" :label="label" :placeholder="placeholder" :type='type' :rule='rule' />
</div>
</template>

<script>
export default {
    name: 'LoginText',
    props: ['label', 'TYPE', 'placeholder', 'rule']
}
</script>

<style scoped>

</style>
