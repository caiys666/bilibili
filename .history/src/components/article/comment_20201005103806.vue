<template>
<div class="commentParent">
    <div><img src="../../assets/user.jpg" alt=""></div>
    <div>
        <span>蜡笔小新</span>
        <span>04-27</span>
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
}
</style>
