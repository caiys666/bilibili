<template>
<div>
    <div class="LoginTop">
        <div></div>
        <div>{{middleTop}}</div>
        <div></div>
    </div>
</div>
</template>

<script>
export default {
    props: ['middleTop']
}
</script>

<style scoped>
.LoginTop {
    height: 45px;
    background-color: rgb(124, 118, 118);
}
</style>
