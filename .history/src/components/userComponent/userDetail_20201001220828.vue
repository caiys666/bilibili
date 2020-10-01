<template>
    <div class="userdetail">
        <div class="user-img"><img src="../../assets/user.jpg" alt=""></div>
        <div class="user-edit">
            <div>
                <p>
                    <span>0</span>
                    <span class="user-text">粉丝</span>
                </p>
                <p>
                    <span>54</span>
                    <span class="user-text">关注</span>
                </p>
                <p>
                    <span>0</span>
                    <span class="user-text">获赞</span>
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
    display: flex;
    .user-img{
        margin-right: 20px;
        img{
            width: 85px;
            height: 85px;
            border-radius: 50%;
        }
    }
    .user-edit{
        flex: 1;
        div:nth-child(1){
            display: flex;
            padding: 5px 5px;
            p{
                flex: 1;
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
                font-size: 13px;
                .user-text{
                    color: #aaa;
                }
            }
            p:nth-child(1),p:nth-child(2){
                border-right:  1px solid black;
            }
        }
        div:nth-child(2){
            background-color: pink;
            display: inline-block;
        }
    }


}

</style>