<template>
<div id="Detail">
    <div>
        {{detailitm.id}}
        <img src="detailitem.img" style="width:100%" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'Detail',
    props: ['detailitem']
}
</script>

<style lang="scss" scoped>

</style>
