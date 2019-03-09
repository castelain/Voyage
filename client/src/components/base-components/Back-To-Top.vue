<template>
     <el-tooltip class="item" effect="dark" content="返回顶部" placement="left">
        <el-button plain @click="backToTop"  v-show="toTopShow">
            <i class="el-icon-arrow-up"></i>
        </el-button>
     </el-tooltip>
</template>

<script>
export default {
    name: 'BackToTop',
    data () {
        return {
            toTopShow: false,
            scrollTop: 0
        }
    },
    methods: {
        // 点击”返回顶部“按钮的绑定事件
       backToTop: function () {
           document.documentElement.scrollTop = document.body.scrollTop = 0;
       },
        // 获取屏幕的滚动高度，决定按钮的显示与否
        handleScroll: function(){
            this.scrollTop = document.documentElement.scrollTop;
            if (this.scrollTop > 300) {
                this.toTopShow = true;
            }else {
                this.toTopShow = false;
            }
        }
    },
     mounted() {
        this.$nextTick(function () {
            window.addEventListener('scroll', this.handleScroll,true);
        });
    },
    destroyed() {
        window.addEventListener('scroll', this.handleScroll,true);
    }
}
</script>

<style scoped>

</style>
