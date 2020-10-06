<template>
<div id="Detail">
    <div class="detailItem" @click="$router.push('/detail/'+detailitem.id+'')">
        <div class="imgparent">
            <img :src="detailitem.img" style="width:100%;height:80%" alt="">
            <span class="video">777</span>
            <span class="content">{{detailitem.commentlen}}</span>
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
            margin-top: 10px;
            left: 10px;
            bottom: 0;
        }

        .content {
            position: absolute;
            right: 15px;
            bottom: 0;
        }
    }
}
</style>
