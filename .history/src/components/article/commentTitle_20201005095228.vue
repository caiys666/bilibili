<template>
<div class="comment">
    <p class="comment-title">
        <span>评论</span>
        <span>(4070)</span>
    </p>
    <div class="commentMyinfo">
        <img :src="myuser.user_img" alt="">
        <img src="../../assets/user.jpg" alt="" v-else>
        <input type="text" placeholder="说点什么">
        <button>发表</button>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            myuser: null
        }
    },
    methods: {
        async myUserinfo() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            console.log(res)
            this.myuser = res.data[0];
        },
        focusInput() {
            if (!this.myuser && !localStorage.getItem('token') && !localStorage.getItem('id')) {
                this.$msg.fail('请先登录');
            }
        }
    },
    created() {
        this.myUserinfo();
    },
}
</script>

<style lang="less" scoped>
.comment {
    padding: 30px 10px;

    .comment-title {
        span:nth-child(2) {
            color: #aaa;
            margin-left: 10px;
        }
    }

    .commentMyinfo {
        padding: 10px 0;
        display: flex;

        img {
            width: 7.944vw;
            height: 7.944vw;
            border-radius: 50%;
        }

        input {
            outline: none;
            border: 0;
            background-color: rgb(218, 211, 211);
            border-radius: 10px;
            margin-left: 20px;
            font-size: 12px;
            padding: 0 20px 0 15px;
        }

        button {
            outline: none;
            border: 0;
            border-radius: 12px;
            background-color: pink;
            color: white;
            font-size: 12px;
            padding: 10px;
        }
    }
}
</style>
