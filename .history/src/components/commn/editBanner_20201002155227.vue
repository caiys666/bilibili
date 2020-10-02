<template>
    <div>
        <div class="editbanner">
            <span>{{left}}</span>
            <span><slot name='right'></slot></span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'editBanner',
        props:['left']
    }
</script>

<style lang="less" scoped>
.editbanner{
    background-color: white;
    padding: 15px ;
    border-bottom: 1px solid #eee;
    font-size: 14px;
    display: flex;
    color: #333;
    justify-content: space-between;
}
</style>