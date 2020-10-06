<template>
<div id="Home">
    <navbar></navbar>
    <van-tabs v-model="active" scrollspy sticky>
        <van-tab v-for="(item,index) in category" :key="item.id" :title="item.title">
            内容{{index}}
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import Navbar from '../components/commn/Navbar.vue'
export default {
    name: 'Home',
    data() {
        return {
            category: [],
            active: 0
        }
    },
    components: {
        Navbar
    },
    methods: {
        async selectCategory() {
            const res = await this.$http.get('/category');
            this.changeCategory(res.data);

        },
        changeCategory(data) {
            const category1 = data.map((item, index) => {
                item.list = []; //代表每个标题里面应该存储不同的数据
                return item;
            })
            this.category = category1;
        },
        async selectArticle() {
            const categoryitem = this.categoryItem();
            const res = await this.$http.get('/detail/' + categoryitem._id);
        },
        categoryItem() {
            const categoryitem = this.category[this.active];
            return categoryitem;
        }
    },
    watch: {
        active() {
            this.categoryItem();
        }
    },
    created() {
        this.selectCategory();
    },
}
</script>

<style lang="less" scoped>

</style>
