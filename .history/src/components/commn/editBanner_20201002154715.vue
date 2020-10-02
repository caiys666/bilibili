<template>
    <div>
        <div class="editbanner">
            <span>头像</span>
            <span>姓名</span>
            <span>姓名</span>
        </div>
    </div>
</template>

<script>
    export default {
        name:'editBanner',
        props:['left','right']
    }
</script>

<style lang="less" scoped>
.editbanner{
    background-color: white;
    padding: 15px 0;
    border-bottom: 1px solid #fafafa;
}
</style>