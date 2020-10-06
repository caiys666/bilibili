<template>
<div class="comment">
    <p class="comment-title">
        <span>评论</span>
        <span>(4070)</span>
    </p>
    <div class="commentMyinfo">
        <img :src="myuser.user_img" alt="">
        <input type="text">
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
            this.myuser = res.data[0];
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
        }
    }
}
</style>
