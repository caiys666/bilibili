<template>
<div class="commentitems">
    <div class="commentItem" v-for="(item,index) in commentChild" :key="index">
        <div class="userImg">
            <img v-if="item.userinfo && item.userinfo.user_img" :src="item.userinfo.user_img" alt="">
            <img v-else src="../../assets/user.jpg" alt="">
            <p>
                <span v-if="item.userinfo">{{item.userinfo.name}}</span>
                <span v-else>此用户无姓名</span>
                <span>{{item.comment_date}}</span>
            </p>
        </div>
        <div class="commentContent">

            <div>
                {{item.comment_content}}
            </div>
        </div>
        <commentchild-item :commentChild="item.child"></commentchild-item>
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
    .commentItem {
        display: flex;
        padding: 10px 0;
        flex-direction: column;

        .userImg {
            display: flex;
            margin-right: 10px;
            flex: 1;

            p {
                flex: 1;
                display: flex;
                justify-content: space-between;
                font-size: 13px;
                color: rgb(199, 206, 199);
                margin-bottom: 5px;
                justify-content: center;
                align-items: center;

                span {
                    padding: 5px 25px;
                }
            }

            img {
                width: 35px;
                height: 35px;
                margin: 0 5px 10px;
                border-radius: 50%;
            }
        }

        .commentContent {
            flex: 1;

            div {
                font-size: 13px;
                width: 100%;
                padding: 5px 0;
            }
        }
    }
}
</style>
