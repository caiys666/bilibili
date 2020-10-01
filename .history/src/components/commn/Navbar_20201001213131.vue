<template>
    <div class="navbar">
        <div class="logo">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <div>
            <p>
                <van-icon class="ipt-icon" name="search" />
            </p>
        </div>
        <div>
            <img src="../../assets/user.jpg" alt="">
            <p>下载app</p>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang='less' scoped>
.navbar{
    height: 12.5vw;
    background-color: white;
    display: flex;
    div:nth-child(2){
        flex: 1;
        display: flex;
        align-items: center;
        p{
            background-color: thistle;
            position: relative;
            padding: 15px 0px;
            width: 90%;
            border-radius: 10px;
            .ipt-icon{
                position: absolute;
                left: 10px;
                top: 50%;
                transform:  translate(0,-40%);
            }
        }
    }
    div:nth-child(3){
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 32px;
            height: 32px;
        }
        p{
            padding: 5px 10px;
            margin: 0 8px;
            border-radius: 3px;
            background-color: pink;
            color: white;
            font-size: 13px;
        }
    }
}
.logo{
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo img{
    width: 60%;
    height: 100%;
}
</style>