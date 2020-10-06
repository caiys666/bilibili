<template>
<div id="Detail">
    <div class="detailItem">
        <img :src="detailitem.img" style="width:100%" alt="">
        <p>{{detailitem.name}}</p>
    </div>
</div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['detailitem']
}
</script>

<style lang="less" scoped>
.detailItem {
    p {
        font-size: 16px;
    }
}
</style>
