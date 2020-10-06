<template>
<div id="Detail">
    <div class="detailItem" @click="$router.push('/detail/'+detailitem.id+'')">
        <div class="imgparent">
            <img :src="detailitem.img" style="width:100%" alt="">
            <span class="video">777</span>
            <span class="content">666</span>
        </div>
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

    .imgparent {
        position: relative;

        .video {
            position: absolute;
            left: 0;
            bottom: 0;
        }

        .content {
            position: abs();
            right: 0;
            bottom: 0;
        }
    }
}
</style>
