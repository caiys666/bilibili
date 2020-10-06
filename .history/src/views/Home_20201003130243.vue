<template>
<div id="Home">
    <navbar></navbar>
    <van-tabs v-model="active" swipeable sticky>
        <van-tab v-for="(item, index) in category" :key="item.id" :title="item.title">
            <div class="detailparent">
                <cover class="detailitem" v-if="active == index" v-for="(categoryitem, categoryindex) in item.list" :key="categoryitem.id" :detailitem="categoryitem" />
            </div>
        </van-tab>
    </van-tabs>
</div>
</template>

<script>
import Navbar from "../components/commn/Navbar.vue";
import Cover from "../views/Cover.vue";
export default {
    name: "Home",
    data() {
        return {
            category: [],
            active: 0,
        };
    },
    components: {
        Navbar,
        Cover,
    },
    methods: {
        async selectCategory() {
            const res = await this.$http.get("/category");
            this.changeCategory(res.data);
        },
        changeCategory(data) {
            const category1 = data.map((item, index) => {
                item.list = []; //代表每个标题里面应该存储不同的数据
                item.page = 0;
                item.pagesize = 10;
                return item;
            });
            this.category = category1;
            this.selectArticle();
        },
        async selectArticle() {
            const categoryitem = this.categoryItem();
            const res = await this.$http.get("/detail/" + categoryitem._id, {
                params: {
                    page: categoryitem.page,
                    pagesize: categoryitem.pagesize,
                },
            });
            categoryitem.list = res.data;
        },
        categoryItem() {
            const categoryitem = this.category[this.active];
            return categoryitem;
        },
    },
    watch: {
        active() {
            this.selectArticle();
        },
    },
    created() {
        this.selectCategory();
    },
};
</script>

<style lang="less" scoped>
#Home {
    background-color: white;
}

.detailparent {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    .detailitem {
        margin: 1.389vw 0;
        width: 45%;
    }
}
</style>
