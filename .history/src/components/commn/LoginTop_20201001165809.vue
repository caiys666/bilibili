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
    background-color: white;
    display: flex;
}

.LoginTop div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 16px;
}
</style>
