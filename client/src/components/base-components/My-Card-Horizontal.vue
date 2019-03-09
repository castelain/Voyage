<template>
    <el-row>
        <el-col :span="12" :class="{ right: !data.imgPosLeft }">
            <img :src="data.imgSrc" :alt="data.title">
        </el-col>
        <el-col :span="12">
            <el-card :body-style="{ padding: '40px' }" shadow="never">
                <div class="title">
                    {{ data.title }}
                </div>
                <div class="description">
                    {{ data.description }}
                </div>
                <my-button :btnText="data.btnText"></my-button>
            </el-card>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'MyCardHorizontal',
    props: [ 'data' ],
    data () {
        return {
            
        }
    }
}
</script>

<style scoped>
    img {
        width: 100%;
        
    }
    .el-row {
        margin-bottom: 0;
    }
    .el-card {
        border: 0;
        border-radius: 0;
    }
    .title {
        font-size: 30px;
        color: rgb(67, 67, 67);
    }
    .description {
        font-size: 14px;
        color: rgb(67, 67, 67);
        text-align: left;
        margin-top: 30px;
        margin-bottom: 50px;
    }
</style>
