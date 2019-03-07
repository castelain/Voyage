<template>
    <el-button plain @click="loadMore">
        {{ btnText }}
    </el-button>
</template>

<script>
export default {
    name: 'MyButton',
    props: [ 'btnText' ],
    data () {
        return {

        }
    },
    methods: {
        loadMore: function(){

        }
    },
}
</script>

<style scoped>
    * {
        font-size: 16px;
        color: rgb(67, 67, 67);
    }
    .el-button {
        border-radius: 10px;
        border-color: rgb(67, 67, 67);
        width: 160px;
        height: 40px;
    }
</style>
