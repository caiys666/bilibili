<template>
<div id="Detail">
    <div class="detailItem" @click="$router.push('/detail/'+detailitem.id+'')">
        <img :src="detailitem.img" style="width:100%;height:80px    " alt="">
        <div class="imgparent">
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
        max-width: top;

        10px .video {
            position: absolute;
            left: 10px;
            bottom: 0px;
        }

        .content {
            position: absolute;
            right: 15px;
            bottom: 0;
        }
    }
}
</style>
