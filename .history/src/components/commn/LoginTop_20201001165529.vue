<template>
<div>
    <div class="LoginTop">
        <div>1</div>
        <div>{{middleTop}}</div>
        <div>1</div>
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
    display: flex;

}
</style>
