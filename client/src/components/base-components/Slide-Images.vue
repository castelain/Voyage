<template>
    <div>
        <el-row>
            <el-col :span="8"
                    v-for="(img, index) in imgs2" 
                    :key="index">
                <my-card-vertical :img="img">
                </my-card-vertical>
            </el-col>
        </el-row>
        
        <hr>
        <div class="btns">
            <el-button icon="el-icon-arrow-left" @click="forward" class="left" circle>
            </el-button>
            <my-button :btnText="btnText" :path="path"></my-button>
            <el-button icon="el-icon-arrow-right" @click="back" class="right" circle>
            </el-button>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
import "element-ui/lib/theme-chalk/index.css"
export default {
    name: 'SlideImages',
    props: [ 'imgs', 'btnText', 'path' ],
    data () {
        return {
            imgs1: this.imgs, // 用于记录传入的参数 imgs 以及操作后的完整数据值（数组）
            imgs2: this.imgs.slice(0,3),    // 用于组件中需要的部分数据值
        }
    },
    methods: {
        forward: function() {
            // this.isSlideLeft = true;
            let tempArr = this.imgs1.slice();
            let itemFirst = tempArr[0];
            for(let i = 0; i < tempArr.length - 1; i ++){
                tempArr[i] = tempArr[i+1];
            }
            tempArr[tempArr.length-1] = itemFirst;
            this.imgs1 = tempArr.slice();
            this.imgs2 = tempArr.slice(0,3);
        },
        back: function() {
            let tempArr = this.imgs1.slice();
            let itemLast = tempArr[tempArr.length-1];
            for(let j = tempArr.length - 1; j > 0 ; j --){
                tempArr[j] = tempArr[j-1];
            }
            tempArr[0] = itemLast;
            this.imgs1 = tempArr.slice();
            this.imgs2 = tempArr.slice(-3);
        }
    }
}
</script>

<style scoped>
    .btns {
        margin-top: 40px;
    }
    .el-col:last-child {
        padding-left: 10px;
    }
    .el-col:first-child {
        padding-right: 10px;
    }
    .el-col:nth-child(2) {
        padding-left: 10px;
        padding-right: 10px;
    }
</style>
