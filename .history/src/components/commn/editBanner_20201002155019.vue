<template>
    <div>
        <div class="editbanner">
            <span>{{left}}</span>
            <span>{{right}}</span>
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
    padding: 15px ;
    border-bottom: 1px solid #fafafa;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
}
</style>