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
        <el-footer height="100px">
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

        }
    }
}
</script>

<style scoped>
    .el-header {
        margin-top: -60px;
    }
    .el-footer {
        background-color: aquamarine;
        margin-top: 100px;
    }
    .el-header, .el-footer, .el-main {
        padding: 0;
    }
</style>
