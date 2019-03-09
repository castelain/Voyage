<template>
    <el-button-group class="hidden-sm-and-down">
        <el-tooltip effect="dark" content="回到顶部" placement="left">
            <back-to-top></back-to-top>
        </el-tooltip>
        <el-tooltip class="item" effect="dark" content="回到首页" placement="left">
            <router-link to="/">
                <el-button type="primary" icon="el-icon-location-outline"></el-button>
            </router-link>
        </el-tooltip>
    </el-button-group>
</template>

<script>
import BackToTop from '@/components/base-components/Back-To-Top'
export default {
    name: 'MySideBtn',
    data () {
        return {
            
        }
    },
    components: {
        'back-to-top': BackToTop
    }
}
</script>

<style scoped>
    .el-button-group {
        width: 70px;
        position: fixed;
        right: 0;
        bottom: 20%;
    }
    .el-button {
        display: inline-block;
        width: 100%;
        /* border: 0; */
        border-radius: 0;
    }
</style>
