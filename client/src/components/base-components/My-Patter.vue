<template>
    <div class="patter">
        <hr class="left-line">
        <span class="title">{{ title }}</span>
        <hr class="right-line">    
    </div>
</template>

<script>
export default {
    name: 'My-Patter',
    props: [ 'title' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .patter {
        margin-top: 80px;
        margin-bottom: 150px;
        position: relative;
    }
    hr {
        display: inline-block;
        width: 40%;
    }
    .left-line {
        float: left;
    }
    .right-line {
        float: right;
    }
    .title {
        font-size: 30px;
        color: rgb(67, 67, 67);
        position: absolute;
        bottom: -30px;
        left: 43%;
    }
</style>
