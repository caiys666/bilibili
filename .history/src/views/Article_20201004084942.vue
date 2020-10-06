<template>
<div id="Article">
    <navbar></navbar>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
export default {
    name: 'Article',
    components: {
        Navbar
    },
    methods: {
        async articleitemData() {
            const res = await this.$http.get('/article/' + this.$router.params.id);
        }
    },
    created() {
        this.articleitemData();
    },
}
</script>

<style lang="scss" scoped>

</style>
