<template>
<div class="commentitems">
    <div class="commentItem" v-for="(item,index) in commentChild" :key="index">
        <div class="userImg">
            <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt="">
            <img v-else src="../../assets/user.jpg" alt="">
        </div>
        <div class="commentContent">
            <p>
                <span v-if="item.userinfo">{{item.userinfo.name}}</span>
                <span v-else>此用户无姓名</span>
                <span>{{item.comment_data}}</span>
            </p>
            <div>
                {{item.comment_content}}
            </div>
        </div>
        <commentchild-item></commentchild-item>
    </div>
</div>
</template>

<script>
export default {
    name: 'commentchildItem',
    props: ['commentChild'],
}
</script>

<style lang="less" scoped>
.commentitems {
    padding: 0 40px;

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

            }
        }
    }
}
</style>
