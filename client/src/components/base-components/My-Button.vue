<template>
    <el-button plain @click="loadMore(path)">
        {{ btnText }}
    </el-button>
</template>

<script>
export default {
    name: 'MyButton',
    props: [ 'btnText', 'path' ],
    data () {
        return {
            toTopShow: false
        }
    },
    methods: {
        loadMore: function(path){
            if(path){
                this.$router.push(path);
            }
        },
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
        border-color: rgb(160, 160, 160);
        width: 160px;
        height: 40px;
    }
</style>
