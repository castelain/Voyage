<template>
    <el-row>
        <el-col :xs="0" :sm="1" :md="2" :lg="4" :xl="5">&nbsp;</el-col>
        <el-col :xs="24" :sm="22" :md="20" :lg="16" :xl="14">
            <slot></slot>
        </el-col>
        <el-col :xs="0" :sm="1" :md="2" :lg="4" :xl="5">&nbsp;</el-col>
    </el-row>
</template>

<script>
export default {
    name: 'MyRow',
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>

</style>
