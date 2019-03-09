<template>
    <el-card :body-style="{ padding: '0px' }" 
             shadow="never">
        <router-link :to="img.path">
            <img :src="img.src" alt="img.msg.title" class="image">
        </router-link>
            <!-- card body -->
            <div class="text-block">
                <div class="text-title">
                    {{ img.msg.title }}
                </div>
                <div class="text-description">
                    {{ img.msg.description }}
                </div>
            </div>
    </el-card>
</template>

<script>
export default {
    name: 'MyCardSimple',
    props: [ 'img' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .el-card {
        /* width: 31%; */
        width: 100%;
        display: inline-block;
        border: 0;
        border-radius: 0;
        margin-right: 20px;
    }
    .image {
        width: 100%;
        display: inline-block;
    }
    .text-block {
        margin-top: 5px;
        margin-bottom: 60px;
        margin-left: 0;
        text-align: left;
    }
    .text-bold {
        font-weight: bold;
        font-size: 14px;
        color: rgb(160, 160, 160);
    }
    .text-light {
        color: gainsboro;
        font-size: 12px;
    }
    .text-title {
        font-weight: bold;
        font-size: 18px;
        color: rgb(67, 67, 67);
        margin-top: 15px;
        margin-bottom: 10px;
    }
    .text-description {
        font-size: 14px;
        color: rgb(160, 160, 160);
        margin-bottom: 50px;
    }
    .text-place {
        font-size: 14px;
        color: rgb(160, 160, 160);
    }
</style>
