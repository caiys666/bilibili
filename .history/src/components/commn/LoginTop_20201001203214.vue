<template>
<div>
    <div class="LoginTop">
        <div>1</div>
        <div>{{middleTop}}</div>
        <div>1
            <slot name="right"/>
        </div>
    </div>
</div>
</template>

<script>
export default {
    props: ['middleTop'],
}
</script>

<style scoped>
.LoginTop {
    height: 12.5vw;
    background-color: white;
    display: flex;
}

.LoginTop div {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;
    font-size: 3.433vw;
}
</style>
