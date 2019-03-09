<template>
    <router-link :to="ad.detailPath">
        <img :src="ad.src" :alt="ad.title">
    </router-link>
</template>

<script>
export default {
    name: 'My-Ad',
    props: [ 'ad' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    * {
        margin-top: 80px;
    }
    img {
        width: 100%;
        overflow-y: hidden;
    }
</style>
