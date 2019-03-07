<template>
    <el-row>
        <el-col :span="24">
            <router-link :to="img.detailPath">
                <img :src="img.src" :alt="img.msg">
            </router-link>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'SingleBanner',
    props: [ 'img' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    img {
        width: 100%;
    }
</style>
