<template>
<div id="Article">
    <navbar></navbar>
    <div class="detailinfo">
        <div class="video">
            <video controls="controls" :src="model.content"></video>
        </div>
        <div class="detailitemtext">
            <div>
                <span>{{model.category}}</span>
                <span>{{model.name}}</span>
            </div>
            <div style="padding:10px"><span>{{model.date}}</span></div>
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
    .video {
        width: 100%;

        video {
            width: 100%;
        }
    }

    .detailitemtext {
        padding: 15px;
    }
}
</style>
