<template>
    <div>
        <my-card v-for="(img, index) in imgs2" 
                :key="index" :img="img" 
                :isSlideLeft='isSlideLeft' :isSlideRight="isSlideRight">
        </my-card>
        <hr>
        <div class="btns">
            <el-button icon="el-icon-arrow-left" @click="forward" id="left-btn" circle>
            </el-button>
            <my-button :btnText="btnText"></my-button>
            <el-button icon="el-icon-arrow-right" @click="back" id="right-btn" circle>
            </el-button>
        </div>
    </div>
</template>

<script>
import 'element-ui/lib/theme-chalk/display.css'
export default {
    name: 'SlideImages',
    props: [ 'imgs', 'btnText' ],
    data () {
        return {
            imgs1: this.imgs, // 用于记录传入的参数 imgs 以及操作后的完整数据值（数组）
            imgs2: this.imgs.slice(0,3),    // 用于组件中需要的部分数据值
            isSlideLeft: null,
            isSlideRight: null
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
            // setTimeout(function(){
            //     this.isSlideLeft = null;
            // }, 500);
        },
        back: function() {
            // this.isSlideRight = true;
            let tempArr = this.imgs1.slice();
            let itemLast = tempArr[tempArr.length-1];
            for(let j = tempArr.length - 1; j > 0 ; j --){
                tempArr[j] = tempArr[j-1];
            }
            tempArr[0] = itemLast;
            this.imgs1 = tempArr.slice();
            this.imgs2 = tempArr.slice(-3);
            // setTimeout(function(){
            //     this.isSlideRight = null;
            // }, 500);
        }
    }
}
</script>

<style scoped>
    #left-btn {
        float: left;
    }
    #right-btn {
        float: right;
    }
    .btns {
        margin-top: 40px;
        margin-bottom: 80px;
    }

</style>
