<template>
    <div class="navbar">
        <div class="logo">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <div>
            <p></p>
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
        p{
            background-color: thistle;
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