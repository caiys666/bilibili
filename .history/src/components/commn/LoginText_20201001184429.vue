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
    methods: {
        handlerrulg() {
            const rule = new RegExp(this.rule);
            if (rule.test(this.content)) {
                console.log('正则校验成功！')
            }
        }
    },
    watch: {
        content() {
            this.handlerrulg()
        }
    }
}
</script>

<style scoped>

</style>
