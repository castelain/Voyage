<template>
    <el-container>
        <el-header height="">
            <!-- Header content -->
            <slot name="my-header"></slot>
        </el-header>
        <el-main height="">
            <!-- Main content -->
            <slot></slot>
        </el-main>
        <el-footer :height="bgHeight">
            <!-- Footer content -->
            <slot name="my-footer"></slot>
        </el-footer>
        
    </el-container>
    
</template>

<script>
export default {
    name: 'MyContainer',
    data () {
        return {
            bgHeight: document.body.clientWidth / 1440 * 650 + 'px',
        };
    },
    mounted() {
       window.onresize = function(){
           this.bgHeight = document.body.clientWidth / 1440 * 650 + 'px';
       } ;
    },
}
</script>

<style scoped>
    .el-header {
        margin-top: -60px;
    }
    .el-footer {
        background-image: url('../../assets/images/home/底部.png');
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        width: 100%;
        height: 100%;
    }
    .el-header, .el-footer, .el-main {
        padding: 0;
    }
</style>
