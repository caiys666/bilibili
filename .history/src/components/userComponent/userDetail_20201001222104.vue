<template>
    <div class="userdetail">
        <div>
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
                    <div class="user_editBtn">编辑资料</div>
                </div>
            </div>
        </div>
        <div>
            <h2>cabbage</h2>
            <p>这个人很神秘，什么都没写</p>
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
    padding: 0 3.333vw;
    >div:nth-child(1){
        display: flex;
        .user-img{
            margin-right: 5.556vw;
            img{
                width: 23.611vw;
                height: 23.611vw;
                border-radius: 50%;
            }
        }
        .user-edit{
            flex: 1;
            div:nth-child(1){
                display: flex;
                padding: 1.389vw 1.389vw;
                p{
                    flex: 1;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-direction: column;
                    font-size: 3.611vw;
                    .user-text{
                        color: #aaa;
                    }
                }
                p:nth-child(1),p:nth-child(2){
                    border-right:  0.278vw solid black;
                }
            }
            div:nth-child(2){
                padding: 0.556vw 2.778vw;
                margin-top: 2.778vw;
                .user_editBtn{
                    background-color: pink;
                    padding:  0.833vw;
                    color:white;
                    align-items: center;
                    justify-content: center;
                    border-radius: 2.778vw;
                }
            }
        }
    }
    >div:nth-child(2){
        h2{
            margin: 10px 0 3px 0;
        }
        p{
            padding: 0;
            margin: 10px 0;
            color: #999;
        }

    }
    


}

</style>