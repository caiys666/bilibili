<template>
<div id="Article">
    <navbar></navbar>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
export default {
    name: 'Article',
    data() {
        return {
            model: {}
        }
    },
    components: {
        Navbar
    },
    methods: {
        async articleitemData() {
            const res = await this.$http.get('/article/' + this.$router.params.id);
            this.model = res.data[0];
        }
    },
    created() {
        this.articleitemData();
    },
}
</script>

<style lang="scss" scoped>

</style>
