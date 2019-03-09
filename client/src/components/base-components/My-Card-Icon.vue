<template>
    <div class="block">
        <img :src="icon.src" :alt="icon.title">
        <p class="title">{{ icon.title }}</p>
        <p class="info">{{ icon.info }}</p>
    </div>
</template>

<script>
export default {
    name: 'MyCardIcon',
    props: [ 'icon' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .block {
        text-align: center;
        color: rgb(67, 67, 67);
    }
    .title {
        font-size: 16px;
        font-weight: bold;
        margin-top: 20px;
        margin-bottom: 10px;
    }
    .info {
        font-size: 14px;
        text-align: left;
    }
</style>
