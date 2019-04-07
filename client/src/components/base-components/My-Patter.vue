<template>
    <div class="patter">
        <el-row>
            <el-col :span="9" class="hidden-xs-and-down">
                <hr>
            </el-col>
            <el-col :span="6">
                <span class="title">{{ title }}</span>
            </el-col>
            <el-col :span="9" class="hidden-xs-and-down">
                <hr>
            </el-col>
        </el-row>
        <el-row>
            <el-col :span="9">&nbsp;</el-col>
            <el-col :span="6">
                <slot class="subTitle"></slot>
            </el-col>
            <el-col :span="9">&nbsp;</el-col>
        </el-row>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css';
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
        margin-top: 8%;
        margin-bottom: 2%;
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
        text-align: center;
        position: relative;
        top: -15px;
    }
    .sub-title {
        margin-top: 30px;
        margin-bottom: 30px;
        color: rgb(160, 160, 160);
    }
</style>
