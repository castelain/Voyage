<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <single-banner :img="img" id="banner"></single-banner>
        <my-row>
            <div slot="content">
                <my-patter :title="recommentData.title" class="recomment"></my-patter>
                <img :src="recommentData.src" alt="推荐风景图" class="full-image">
                <p class="subTitle">{{ recommentData.subTitle }}</p>
                <p class="title">{{ recommentData.description }}</p>
                <my-patter :title="title" style="margin-bottom: 40px; margin-top: 10px;"></my-patter>
                <el-row>
                    <el-col :span="8" v-for="(img, index) in imgs" :key="index" style="margin-top: -20px;" class="grid-inner">
                        <my-card-simple :img="img">
                        </my-card-simple>
                    </el-col>
                </el-row> 
            </div>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import SingleBanner from '@/components/base-components/Single-Banner'
export default {
    name: 'TravelPhotos',
    data () {
        return {
            // 导航栏高度
            navHeight: null,
             // banner图数据
            img: {
                src: require('../../assets/images/photography/banner.png'),
                msg: '旅游 banner',
                detailPath: '#'
            },
            // 本周推荐的数据
            recommentData: {
                title: '本周推荐',
                src: require('../../assets/images/photography/图层 3.png'),
                subTitle: '枫叶之路直通海岸',
                description: '从最美的路过到最美的尽头'
            },
            // 展示图片数据
            title: '2019展示',
            imgs: [
                {
                    src: require('../../assets/images/photography/1.png'),
                    path: '#',
                    msg: {
                        title: '专 注 的 相 扑 选 手',
                        description: '摄影于东京皇家酒店'
                    }
                },
                {
                    src: require('../../assets/images/photography/2.png'),
                    path: '#',
                    msg: {
                        title: '巴 厘 岛 度 假 村',
                        description: '拍摄于宝格丽度假村'
                    }
                },
                {
                    src: require('../../assets/images/photography/3.png'),
                    path: '#',
                    msg: {
                        title: '特 雷 大 酒 店',
                        description: '配摄于意大利'
                    }
                },
                {
                    src: require('../../assets/images/photography/4.png'),
                    path: '#',
                    msg: {
                        title: '荷 兰 度 假 村',
                        description: '拍摄于荷兰'
                    }
                },
                {
                    src: require('../../assets/images/photography/5.png'),
                    path: '#',
                    msg: {
                        title: '特 色 的 中 东 调 料',
                        description: '拍摄于阿富汗大酒店'
                    }
                },
                {
                    src: require('../../assets/images/photography/6.png'),
                    path: '#',
                    msg: {
                        title: '最 好 的 雪 茄',
                        description: '拍摄于古巴'
                    }
                },
                {
                    src: require('../../assets/images/photography/7.png'),
                    path: '#',
                    msg: {
                        title: '印 尼 招 牌 牛 排',
                        description: '拍摄于印度尼西亚'
                    }
                },
                {
                    src: require('../../assets/images/photography/8.png'),
                    path: '#',
                    msg: {
                        title: '秘 鲁 热 带 雨 林',
                        description: '拍摄于秘鲁'
                    }
                },
                {
                    src: require('../../assets/images/photography/9.png'),
                    path: '#',
                    msg: {
                        title: '奥 尔 巴 尼 巴 哈 马',
                        description: '拍摄于纽约'
                    }
                },

            ]
        }
    },
    components: {
       'single-banner': SingleBanner,
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('banner').style.marginTop = this.navHeight;
    },
}
</script>

<style scoped>
    .recommend {
        margin-top: 80px;
        margin-bottom: 10px;
    }
    .title {
        font-size: 18px;
        color: rgb(67, 67, 67);
        margin-bottom: 70px;
    }
    .subTitle {
        font-size: 30px;
        margin-top: 50px;
        margin-bottom: 30px;
    }
    .el-row {
        overflow-x: hidden;
    }
</style>
