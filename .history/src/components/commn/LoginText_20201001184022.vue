<template>
<div id="LoginText">
    <van-field v-model="content" :label="label" :placeholder="placeholder" :type='type' :rule='rule' />
</div>
</template>

<script>
export default {
    name: 'LoginText',
    data() {
        return {
            content: ''
        }
    },
    props: ['label', 'type', 'placeholder', 'rule'],
    watch: {
        content() {
            console.log('1123')
        }
    }
}
</script>

<style scoped>

</style>
