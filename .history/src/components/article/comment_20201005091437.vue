<template>
<div>
    {{myuser}}
</div>
</template>

<script>
export default {
    data() {
        return {
            myuser: {}
        }
    },
    methods: {
        async myUserinfo() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            this.myuser = res.data;
        }
    },
    created() {
        this.myUserinfo();
    },
}
</script>

<style lang="scss" scoped>

</style>
