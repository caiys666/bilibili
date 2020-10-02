<template>
<div id="Edit" v-if="model" class="editViews">
    <div style="margin-bottom: 10px">
        <navbar ref="navbar"></navbar>
    </div>
    <div class="uploadfile">
        <van-uploader class="uploadimg" preview-size="100vw" :after-read="afterRead" />
        <edit-banner left="头像">
            <img :src="model.user_img" slot="right" alt="" v-if="model.user_img" />
            <img v-else src="../assets/user.jpg" slot="right" alt="" />
        </edit-banner>
    </div>
    <edit-banner left="昵称" @bannerClick="show = true">
        <a href="javascript:;" slot="right">{{ model.name }}</a>
    </edit-banner>
    <edit-banner left="账号">
        <a href="javascript:;" slot="right">{{ model.username }}</a>
    </edit-banner>
    <edit-banner left="性别" @bannerClick='gendershow = true'>
        <a href="javascript:;" slot="right">{{ model.gender ? '男':'女' }}</a>
    </edit-banner>
    <edit-banner left="个签" @bannerClick="textshow = true">
        <a href="javascript:;" slot="right">{{ model.user_desc }}</a>
    </edit-banner>

    <div class="editback">返回个人中心</div>

    <van-dialog v-model="show" title="昵称" show-cancel-button @confirm="confirmClick" @canale="content = ''">
        <van-field v-model="content" autofocus />
    </van-dialog>

    <van-dialog v-model="textshow" title="个性签名" show-cancel-button @confirm="textareaClick" @canale="content = ''">
        <van-field v-model="content" type="textarea" autofocus />
    </van-dialog>

    <van-action-sheet v-model="gendershow" cancel-text="取消" :actions="actions" @select="onSelect"></van-action-sheet>
</div>
</template>

<script>
import Navbar from "../components/commn/Navbar.vue";
import editBanner from "../components/commn/editBanner.vue";
export default {
    name: "Edit",
    data() {
        return {
            model: {},
            show: false,
            content: "",
            text: "",
            textshow: false,
            gendershow: false,
            actions: [{
                    name: '男',
                    val: 1
                },
                {
                    name: '女',
                    val: 0
                }
            ]
        };
    },
    components: {
        Navbar,
        editBanner,
    },
    methods: {
        async selectUser() {
            const res = await this.$http.get("/user/" + localStorage.getItem("id"));
            this.model = res.data[0];
        },
        async afterRead(file) {
            const fromdata = new FormData();
            fromdata.append("file", file.file);
            const res = await this.$http.post("/upload", fromdata);
            console.log(res);
            this.model.user_img = res.data.url;
            this.UserUpdate();
        },
        async UserUpdate() {
            const res = await this.$http.post(
                "/update/" + localStorage.getItem("id"),
                this.model
            );
            if (res.data.code == 200) {
                this.$msg.fail('修改成功！');
            }

        },
        confirmClick() {
            this.model.name = this.content;
            this.UserUpdate();
            this.content = "";
        },
        textareaClick() {
            this.model.user_desc = this.content;
            this.UserUpdate();
            this.content = "";
        },
        onSelect(data) {
            this.model.gender = data.val;
            this.UserUpdate();
            this.gendershow = false;
        }
    },
    created() {
        this.selectUser();
    },
};
</script>

<style lang="less" scoped>
.editViews a {
    color: #333;
}

.editViews img {
    height: 46px;
    width: 46px;
    background-color: #333;
}

.uploadfile {
    position: relative;
    overflow: hidden;

    .uploadimg {
        position: absolute;
        opacity: 0;
    }
}

.editback {
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgb(22, 21, 21);
    padding: 4.167vw 0;
    margin-top: 13.889vw;
    font-size: 5vw;
}
</style>
