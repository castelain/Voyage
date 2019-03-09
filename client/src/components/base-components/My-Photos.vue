<template>
    <div>
        <el-row :gutter="20">
            <el-col :span="8">
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" content="土著习俗" placement="top">
                                <img src="../../assets/images/home/p1.png">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" content="非洲歌舞，热情四射" placement="top">
                                <img src="../../assets/images/home/p3.png">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row>
                    <el-col :span="24">
                        <router-link to="#">
                            <el-tooltip class="item" effect="dark" content="享受海岛日光浴" placement="top">
                                <img src="../../assets/images/home/1.jpeg">
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
                            <el-tooltip class="item" effect="dark" content="浅书小文，休憩时光" placement="top">
                                <img src="../../assets/images/home/p2.png">
                            </el-tooltip>
                        </router-link>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-row>
                            <el-col :span="24"  style="margin-top: 20px;">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" content="水石嬉戏" placement="top">
                                        <img src="../../assets/images/home/p4.png">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" content="Poilane" placement="top">
                                        <img src="../../assets/images/home/p7.png">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12">
                        <el-row>
                            <el-col :span="24"  style="margin-top: 20px;">
                                <router-link to="#">
                                    <el-tooltip class="item" effect="dark" content="海边景观" placement="top">
                                        <img src="../../assets/images/home/p5.png">
                                    </el-tooltip>
                                </router-link>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24">
                                <router-link to="#">
                                <el-tooltip class="item" effect="dark" content="一人远行出海" placement="top">
                                    <img src="../../assets/images/home/p8.png">
                                </el-tooltip>
                            </router-link>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
            </el-col> 
        </el-row>
        <my-button btnText="欣赏更多" style="margin-bottom: 100px;"></my-button>

    </div>
</template>

<script>
export default {
    name: 'MyPhotos',
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
