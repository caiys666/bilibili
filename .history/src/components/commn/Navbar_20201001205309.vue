<template>
    <div class="navbar">
        <div class="logo">
            <img src="../../assets/logo.jpg" alt="">
        </div>
        <div></div>
        <div>
            <img src="../../assets/user.jpg" alt="">
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
    
}
.logo{
    width: 33.333vw;
    display: flex;
    justify-content: center;
    align-items: center;
}
.logo img{
    width: 60%;
    height: 100%;
}
</style>