<template>
<div class="commentParent">
    <div>
        <div class="commentItem">
            <div class="userImg">
                <img src="../../assets/user.jpg" alt="">
            </div>
            <div class="commentContent">
                <p>
                    <span>蜡笔小新</span>
                    <span>04-27</span>
                </p>
                <div>
                    asoikflhasoryihascbasiodfuweodgbopasifuio
                    pasyuriosfhjnsopAFYEPQGHFPO
                </div>
            </div>
        </div>
        <comment-item />
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

            }
        }
    }

}
</style>
