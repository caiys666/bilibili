<template>
    <div class="userinfo">
        <navbar></navbar>
        <img src="../assets/back.jpg" alt="" class="backimg">
        <div>

        </div>
    </div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import userDetail from '../components/userComponent/userDetail.vue'
    export default {
        components:{
            Navbar
        }
    }
</script>

<style lanf='less' scoped>
.backimg{
    width: 100%;
    height: 100px;
}

</style>