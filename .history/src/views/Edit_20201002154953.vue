<template>
    <div id="Edit">
        <navbar></navbar>
        <edit-banner left="头像"></edit-banner>
        <edit-banner left="姓名"></edit-banner>
        <edit-banner left="头像"></edit-banner>
        <edit-banner left="头像"></edit-banner>
        <edit-banner left="头像"></edit-banner>
    </div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import editBanner from '../components/commn/editBanner.vue'
    export default {
        name:'Edit',
        components:{
            Navbar,
            editBanner
        }
    }
</script>

<style lang="scss" scoped>

</style>