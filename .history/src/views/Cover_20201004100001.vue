<template>
<div id="Cover" @click="$router.push(`/article/${detailitem.id}`)">
    <div class="detailItem" @click="$router.push('/detail/'+detailitem.id+'')">
        <img :src="detailitem.img" style="width:100%;height:80px    " alt="">
        <div class="imgparent">
            <span class="video icon-bofang">777</span>
            <span class="content icon-pinglun">{{!detailitem.commentlen?7:detailitem.commentlen}}</span>
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
        font-size: 4.444vw;
    }

    .imgparent {
        position: relative;
        background: linear-gradient(0deg, black, black, grey);
        margin-top: 4.167vw;

        .video {
            position: absolute;
            left: 2.778vw;
            bottom: 0vw;
            color: black;
        }

        .content {
            position: absolute;
            right: 4.167vw;
            bottom: 0;
            color: black;
        }
    }
}
</style>
