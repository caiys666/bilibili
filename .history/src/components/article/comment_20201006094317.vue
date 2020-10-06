<template>
<div class="commentParent">
    <div v-for="(item,index) in commentList" :key="item.id">
        <div class="commentItem">
            <div class="userImg">
                <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt="">
                <img v-else src="../../assets/user.jpg" alt="">
            </div>
            <div class="commentContent">
                <p>
                    <span v-if="item.userinfo">{{item.userinfo.name}}</span>
                    <span v-else>此用户无姓名</span>
                    <span>{{item.comment_date}}</span>
                </p>
                <div>
                    {{item.comment_content}}
                    <span class="publishs" @click="publishClick(item.comment_id)">回复</span>
                </div>
            </div>
        </div>
        <comment-item style="padding-left:8.333vw" :commentChild='item.child' />
    </div>

</div>
</template>

<script>
import commentItem from './commentItem.vue'
export default {
    components: {
        commentItem
    },
    data() {
        return {
            commentList: null
        }
    },
    methods: {
        publishClick(id) {
            this.$emit('publishClick', id);
        },
        async commentData() {
            const res = await this.$http.get('/comment/' + this.$route.params.id);
            if (res.data) {
                this.$emit('lengthselect', res.data.length);
            }
            this.commentList = this.changecommentData(res.data);
        },
        changecommentData(data) {
            function fn(temp) {
                let arr1 = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].parent_id == temp) {
                        arr1.push(data[i]);
                        data[i].child = fn(data[i].comment_id);
                    }
                }
                return arr1;
            }
            return fn(null);
        }
    },
    created() {
        this.commentData();
    },
}
</script>

<style lang="less" scoped>
.commentParent {
    padding: 10px 10px;

    >div {
        border-bottom: 1px solid #e7e7e7;
    }

    .commentItem {
        display: flex;
        padding: 10px 0;

        .userImg {
            margin-right: 10px;

            img {
                width: 35px;
                height: 35px;
            }
        }

        .commentContent {
            flex: 1;

            p {
                display: flex;
                justify-content: space-between;
                font-size: 13px;
                color: rgb(199, 206, 199);
                margin-bottom: 5px;
            }

            div {
                font-size: 13px;
                width: 100%;

                .publishs {
                    position: absolute;
                    color: red;
                    right: 0;
                }

            }
        }
    }

}
</style>
