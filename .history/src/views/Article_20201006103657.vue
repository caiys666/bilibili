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
                <p @click="collectionClick" :class="{activeColor:collectionActive}">
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

        <div class="detailparent">
            <cover class="detailitem" v-for="(item,index) in commendList" :key="item.id" :detailitem="item"></cover>
        </div>
        <comment-title @Postcomment="PostSuccess" ref="commentIpt" :dataLength="lens"></comment-title>
        <comment @publishClick="PostChildClick" ref="commentPublish" @lengthselect="len => lens = len"></comment>
    </div>

</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
import Cover from './Cover.vue'
import commentTitle from '../components/article/commentTitle.vue'
import comment from '../components/article/comment.vue'
export default {
    name: 'Article',
    data() {
        return {
            model: null,
            commendList: [],
            lens: null,
            Postcom: {
                coment_content: "",
                comment_date: "",
                parent_id: null,
                article_id: null
            },
            collectionActive: false
        }
    },
    components: {
        Navbar,
        Cover,
        commentTitle,
        comment
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
        async PostSuccess(res) {
            const date = new Date();
            let m = date.getMonth() + 1;
            let d = date.getDate();
            if (m < 10) {
                m = '0' + m;
            }
            if (d < 10) {
                d = '0' + d;
            }
            let str = `${m}+-+${d}`;
            this.comment_date = str;
            this.coment_content = res;
            this.article_id = this.$route.params.id;
            const result = await this.$http.post('/comment_post/' + localStorage.getItem('id'), this.Postcom);
            this.$refs.commentPublish.commentData();
            this.Postcom.parent_id = "";
            if (result.code == 200) {
                this.$msg.fail('评论发布成功！');
            }
        },
        async collectionClick() {
            if (localStorage.getItem('token')) {
                const res = await this.$http.post('/collection/' + localStorage.getItem('id'), {
                    article_id: this.$route.params.id
                });
                if (res.data.msg == '收藏成功') {
                    this.collectionActive = true;
                } else {
                    this.collectionActive = false;
                }
            }
        },
        //进入页面是否收藏
        async collectionInit() {
            if (localStorage.getItem('token')) {
                const res = await this.$http.post('/collection/' + localStorage.getItem('id'), {
                    params: {
                        article_id: this.$route.params.id
                    }
                });
                this.collectionActive = res.data.success;
            }
        },
        PostChildClick(id) {
            this.parent_id = id;
            this.$refs.commentIpt.focusIpt();
        }
    },
    created() {
        this.articleitemData();
        this.commendData();
        this.collectionInit();
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

            .activeColor {
                color: pink;
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
