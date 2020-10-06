<template>
<div class="commentParent">
    <div class="commentItem">
        <div class="userImg">
            <img src="../../assets/user.jpg" alt="">
        </div>
        <div class="commentContent">
            <p>
                <span>蜡笔小新</span>
                <span>04-27</span>
            </p>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {

        }
    },
    methods: {
        async commentData() {
            const res = await this.$http.get('/comment/' + this.$route.params.id);

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

    .commentItem {
        display: flex;

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
                align-items: center;
                font-size: 13px;
                color: rgb(199, 206, 199);
            }
        }
    }

}
</style>
