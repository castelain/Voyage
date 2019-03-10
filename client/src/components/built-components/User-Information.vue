<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row>
            <div slot="content" id="content">
                <el-row :gutter="40" id="block-1">
                    <el-col :span="18">
                        <el-row>
                            <el-col :span="14">
                                <el-row :gutter="20">
                                    <el-col :span="8">
                                        <img :src="user.iconSrc" alt="用户默认头像">
                                    </el-col>
                                    <el-col :span="16">
                                        <p style="font-size: 24px;">{{ user.phone }}</p>
                                        <el-button plain style="margin-top: 30px;">更改资料</el-button>
                                    </el-col>
                                </el-row>
                            </el-col>
                            <el-col :span="10">
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
                        <p>优惠券：&nbsp;&nbsp;&nbsp;&nbsp;<span class="number">{{ user.ticket1 }}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>
                        <p>优惠券：&nbsp;&nbsp;&nbsp;&nbsp;<span class="number">{{ user.ticket2 }}</span>&nbsp;&nbsp;&nbsp;&nbsp;</p>
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
    #block-1 {
        background-image: url('../../assets/images/user-information/background1.jpg');
        margin-bottom: 20px;
        padding: 20px 50px;
    }
</style>
