<template>
    <div class="userdetail">
        <div class="user-img"><img src="../../assets/user.jpg" alt=""></div>
        <div class="user-edit">
            <div>
                <p>
                    <span>0</span>
                    <span>粉丝</span>
                </p>
                <p>
                    <span>54</span>
                    <span>关注</span>
                </p>
                <p>
                    <span>0</span>
                    <span>获赞</span>
                </p>
            </div>
            <div>
                <div>编辑资料</div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="less" scoped>
.userdetail{
    background-color: white;
    padding: 0 12px;
    .user-img{
        img{
            width: 85px;
            height: 85px;
            border-radius: 50%;
        }
    }
    .user-edit{

    }
}
</style>