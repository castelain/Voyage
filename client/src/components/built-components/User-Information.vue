<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row>
            <div slot="content" id="content">
                <el-row :gutter="40" id="block-1">
                    <el-col :span="18">
                        <el-row>
                            <el-col :span="14">
                                <el-row :gutter="60">
                                    <el-col :span="14">
                                        <img :src="user.iconSrc" alt="用户默认头像">
                                    </el-col>
                                    <el-col :span="10">
                                        <p style="font-size: 24px;">{{ user.phone }}</p>
                                        <el-button plain style="margin-top: 30px;">更改资料</el-button>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="10" style="border-right: 1px solid rgba(160, 160, 160, .2); font-size: 14px;"
                                    class="hidden-md-and-down">
                                <el-row :gutter="20">
                                    <el-col :span="12" v-for="(icon, index) in icons" :key="index">
                                        <my-card-icon :icon="icon">
                                        </my-card-icon>
                                    </el-col>
                                </el-row>  
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="6">
                        <p class="tickets">优惠券：&nbsp;&nbsp;&nbsp;&nbsp;<span>{{ user.ticket1 }}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p class="tickets">优惠券：&nbsp;&nbsp;&nbsp;&nbsp;<span>{{ user.ticket2 }}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                    </el-col>
                </el-row>
                
                <el-row :gutter="40">
                    <el-col :span="17" id="block-2">
                        <el-tabs v-model="activeTab1" type="card">
                            <el-tab-pane label="我的订单" name="我的订单">
                                <img src="../../assets/images/user-information/big-Search failed.jpg" alt="search图标" class="full-img">
                                <p style="color: rgb(160, 160, 160)">没有符合的订单，去
                                    <router-link to="/">首页</router-link>
                                    逛逛
                                </p>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                    <el-col :span="7">
                        <el-row>
                            <el-col :span="24" id="block-3" style="margin-bottom: 20px;">
                                <el-tabs v-model="activeTab2" type="card">
                                    <el-tab-pane label="我的收藏" name="我的收藏">
                                        <img src="../../assets/images/user-information/small-Search failed.jpg" alt="search图标" class="full-img">
                                        <p style="color: rgb(160, 160, 160)">您还没有收藏任何产品
                                        </p>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="24" id="block-4">
                                <el-tabs v-model="activeTab3" type="card">
                                    <el-tab-pane label="会员推荐" name="会员推荐">
                                        <div>
                                            <img src="../../assets/images/user-information/qiandao.jpg" alt="日历图标">
                                            <p>会议签到</p>
                                        </div>
                                    </el-tab-pane>
                                </el-tabs>
                            </el-col>
                        </el-row>
                    </el-col>
                </el-row>
                
                <h3 style="text-align: left;">您可能感兴趣的目的地</h3>
                <el-row class="places">
                    <el-col :span="8" v-for="(place, index) in places" :key="index" class="grid-inner">
                        <router-link :to="place.path">
                            <img :src="place.src" :alt="place.title">
                            <p>{{ place.title }}</p>
                        </router-link>
                    </el-col>
                </el-row>
            </div>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'UserInformation',
    data () {
        return {
            user: {
                iconSrc: require('../../assets/images/user-information/touxiang.jpg'),
                phone: this.$route.params.phone,
                ticket1: 2,
                ticket2: 0,
            },
            icons: [
                {
                    src: require('../../assets/images/user-information/vip.jpg'),
                    title: '会员俱乐部',
                    info: ''
                },
                {
                    src: require('../../assets/images/user-information/huiyuan.jpg'),
                    title: '会员权益',
                    info: ''
                },
            ],
            activeTab1: '我的订单',
            activeTab2: '我的收藏',
            activeTab3: '会员推荐',
            places: [
                {
                    title: '台 北',
                    src: require('../../assets/images/user-information/taibei.jpg'),
                    path: '#'
                },
                {
                    title: '日 本 香 山 公 园',
                    src: require('../../assets/images/user-information/japan.jpg'),
                    path: '#'
                },
                {
                    title: 'Kudadoo 私 人 岛 屿',
                    src: require('../../assets/images/user-information/kudadoo.jpg'),
                    path: '/travel-detail'
                }
            ]
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('content').style.marginTop = Number.parseInt(this.navHeight) + 20 + 'px';
    },
}
</script>

<style scoped>
    * {
        color: rgb(38, 38, 38);
    }
    #block-1 {
        background-image: url('../../assets/images/user-information/background1.jpg');
        margin-bottom: 20px;
        padding: 20px;
    }
    #block-2 {
        background-image: url('../../assets/images/user-information/background2.jpg');
        margin-bottom: 20px;
    }
    #block-2 img {
        margin: 20px auto;
    }
    #block-2 a {
        text-decoration: none;
    }
    #block-3 {
        background-image: url('../../assets/images/user-information/background3.jpg');

    }
    #block-3 img {
        margin-bottom: 10px;
        margin-top: 40px;
        /* width: 100%; */
    }
    #block-4 {
        background-image: url('../../assets/images/user-information/background4.jpg');
        padding-top: 20px auto;
    }
    #block-4 p {
        /* display: inline-block;
        margin-left: 30px; */
        margin-top: 10px;
    }
    #block-4 img {
        margin-top: 40px;
    }
    .tickets{
        font-size: 16px;
        margin-bottom: 10px;
    }
    .tickets span {
        color: orange;
        font-size: 18px;
    }
    .el-tabs {
        margin-bottom: 80px;
    }
    .el-tab-pane {
        padding: 40px auto;
    }
    .places p {
        margin-top: 20px;
        margin-bottom: 100px;
    }
    .places img {
        margin-top: 20px;
        width: 100%;
    }
    .places a {
        text-decoration: none;
        font-weight: bold;
    }
</style>
