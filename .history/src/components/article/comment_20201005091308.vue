<template>
<div>
    1111
</div>
</template>

<script>
export default {
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
