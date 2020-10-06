<template>
<div class="comment">
    <p class="comment-title">
        <span>评论</span>
        <span>(4070)</span>
    </p>
    <div>
        <img :src="myuser.img" alt="">
        <input type="text">
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            myuser: {}
        }
    },
    methods: {
        async myUserinfo() {
            const res = await this.$http.get('/user/' + localStorage.getItem('id'));
            this.myuser = res.data;
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
}
</style>
