<template>
<div id="Edit" v-if="model" class="editViews">
    <div style="margin-bottom:10px">
        <navbar ref="navbar"></navbar>
    </div>
    <van-uploader :after-read="afterRead" />
    <edit-banner left="头像">
        <img src="model.head_img" slot="right" alt="" v-if="model.head_img">
        <img src="../assets/user.jpg" slot="right" alt="">
    </edit-banner>
    <edit-banner left="昵称">
        <a href="javascript:;" slot="right">{{model.name}}</a>
    </edit-banner>
    <edit-banner left="账号">
        <a href="javascript:;" slot="right">{{model.username}}</a>
    </edit-banner>
    <edit-banner left="性别">

    </edit-banner>
    <edit-banner left="个签">

    </edit-banner>
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

<style lang="less" scoped>
.editViews a {
    color: #333;
}

.editViews img {
    height: 46px;
    width: 46px;
    background-color: #333;
}
</style>
