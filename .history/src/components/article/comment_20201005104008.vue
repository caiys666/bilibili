<template>
<div class="commentParent">
    <div class="commentItem">
        <div class="userImg">
            <img src="../../assets/user.jpg" alt="">
        </div>
        <div>
            <span>蜡笔小新</span>
            <span>04-27</span>
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
            img {
                width: 35px;
                height: 35px;
            }
        }
    }

}
</style>
