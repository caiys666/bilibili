<template>
<div id="Edit">
    <div style="margin-bottom:10px">
        <navbar></navbar>
    </div>
    <edit-banner left="头像"></edit-banner>
    <edit-banner left="昵称"></edit-banner>
    <edit-banner left="账号"></edit-banner>
    <edit-banner left="性别"></edit-banner>
    <edit-banner left="个签"></edit-banner>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import editBanner from '../components/commn/editBanner.vue'
export default {
    name: 'Edit',
    data() {
        return {
            model: {}
        }
    },
    components: {
        Navbar,
        editBanner
    },
    methods: {
        async selectUser() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            this.model = res.data[0];
        }
    },
    created() {
        this.selectUser();
    },
}
</script>

<style lang="scss" scoped>

</style>
