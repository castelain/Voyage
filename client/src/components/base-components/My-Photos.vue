<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" :content="imgs[0].msg" placement="top">
                                <img :src="imgs[0].src">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" :content="imgs[1].msg" placement="top">
                                <img :src="imgs[1].src">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" :content="imgs[2].msg" placement="top">
                                <img :src="imgs[2].src">
                                <!--  style="transform: scale(1, 1.23); margin-top: 30px;" -->
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
            </el-col>
            <el-col :span="16">
                <el-row style="margin-bottom: -20px;">
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" :content="imgs[3].msg" placement="top">
                                <img :src="imgs[3].src">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-row>
                            <el-col :span="24"  style="margin-top: 20px;">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" :content="imgs[4].msg" placement="top">
                                        <img :src="imgs[4].src">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" :content="imgs[5].msg" placement="top">
                                        <img :src="imgs[5].src">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12">
                        <el-row>
                            <el-col :span="24"  style="margin-top: 20px;">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" :content="imgs[6].msg" placement="top">
                                        <img :src="imgs[6].src">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <router-link to="#">
                                <el-tooltip class="item" effect="dark" :content="imgs[7].msg" placement="top">
                                    <img :src="imgs[7].src">
                                </el-tooltip>
                            </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col> 
        </el-row>
        <my-button btnText="欣赏更多" class="last-bottom"></my-button>

    </div>
</template>

<script>
export default {
    name: 'MyPhotos',
    props: [ 'imgs' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped> 
    .el-row {
        margin-bottom: 20px;
    }
    img {
        width: 100%; 
    }
</style>
