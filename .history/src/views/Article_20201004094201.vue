<template>
<div id="Article">
    <navbar></navbar>
    <div class="detailinfo">
        <div class="video">
            <video controls="controls" :src="model.content"></video>
        </div>
        <div class="detailitemtext">
            <div>
                <span>{{model.category.title}}</span>
                <span>{{model.name}}</span>
            </div>
            <div style="padding:10px">
                <span>{{model.userinfo.name}}</span>
                <span>146.6万次观看</span>
                <span>5218弹幕</span>
                <span>{{model.date}}</span>
            </div>
            <div>
                <div>
                    <span class="icon-star-full"></span>
                    <span class="icon-download2"></span>
                </div>
            </div>
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
    background-color: white;

    .video {
        width: 100%;

        video {
            width: 100%;
        }
    }

    .detailitemtext {
        padding: 4.167vw;

        div:nth-child(1) {
            span:nth-child(1) {
                padding: 0 2.778vw;
                color: pink;
                background-color: rgb(245, 242, 242);
                border-radius: 2.778vw;
                font-size: 4.444vw;
            }
        }

        div:nth-child(2) {
            padding: 10px 10px;

            span {
                color: rgb(206, 202, 202);
                padding-right: 10px;
            }

            span:nth-child(1) {
                color: black;
                font-size: 16px;
                padding-right: 10px;
            }
        }
    }
}
</style>
