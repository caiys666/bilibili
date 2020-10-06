<template>
<div id="Article">
    <navbar></navbar>
    <div class="detailinfo">
        <div class="video">
            <video controls="controls" :src="model.content"></video>
        </div>
    </div>
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
            const res = await this.$http.get('/article/' + this.$route.params.id);
            this.model = res.data[0];
        }
    },
    created() {
        this.articleitemData();
    },
}
</script>

<style lang="less" scoped>
.detailinfo {
    width: 100%;

    .video {
        width: 100%;
        height: 300px;
    }
}
</style>
