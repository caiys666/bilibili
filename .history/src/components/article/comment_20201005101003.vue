<template>
<div>

</div>
</template>

<script>
export default {
    methods: {
        async commentData() {
            const res = await this.$http.get('/comment/' + $route.params.id);
            console.log(res)
        }
    },
    created() {
        this.commentData();
    },
}
</script>

<style lang="scss" scoped>

</style>
