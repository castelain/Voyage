<template>
    <img :src="ad.src" :alt="ad.title">
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

</style>
