<template>
<div id="Detail">
    <div class="detailItem" @click="$router.push('/detail/'+detailitem.id+'')">
        <img :src="detailitem.img" style="width:100%;height:80px    " alt="">
        <div class="imgparent">
            <span class="video icon-bofang">777</span>
            <span class="content icon-pinglun">{{detailitem.commentlen}}</span>
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
        background: linear-gradient(to top, rgb(48, 47, 47), transparent);

        .video {
            position: absolute;
            left: 10px;
            bottom: 0px;
            color: white;
        }

        .content {
            position: absolute;
            right: 15px;
            bottom: 0;
            color: white;
        }
    }
}
</style>
