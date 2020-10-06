<template>
<div id="Article" v-if="model">
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
                <p>
                    <span class="icon-star-full"></span>
                    <span>收藏</span>
                </p>
                <p>
                    <span class="icon-download2"></span>
                    <span>缓存</span>
                </p>
                <p>
                    <span class="icon-grin"></span>
                    <span>分享</span>
                </p>
            </div>
        </div>
    </div>
    <div class="detailparent">
        <cover class="detailitem" v-for="(item,index) in commendList" :key="item.id" :detailitem="item"></cover>
    </div>

    <comment-title></comment-title>

</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import Cover from './Cover.vue'
import commentTitle from '../components/article/commentTitle.vue'
export default {
    name: 'Article',
    data() {
        return {
            model: null,
            commendList: [],
            myuser: null
        }
    },
    components: {
        Navbar,
        Cover,
        commentTitle
    },
    methods: {
        async articleitemData() {
            const res = await this.$http.get('/article/' + this.$route.params.id);
            this.model = res.data[0];
        },
        async commendData() {
            const res = await this.$http.get('/commend');
            this.commendList = res.data;
        },
    },
    created() {
        this.articleitemData();
        this.commendData();
    },
    watch: {
        $route() {
            this.articleitemData();
            this.commendData();
        }
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

        div:nth-child(3) {
            display: flex;
            padding: 0 10px;

            p {
                color: rgb(133, 130, 130);
                align-items: center;
                display: flex;
                margin-right: 25px;

                span {
                    padding: 0 5px;
                }

                span:nth-child(1) {
                    font-size: 20px;
                }

                span:nth-child(2) {
                    font-size: 13px;
                }
            }
        }

    }
}

.detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .detailitem {
        margin: 1.389vw 0;
        width: 45%;
    }
}
</style>
