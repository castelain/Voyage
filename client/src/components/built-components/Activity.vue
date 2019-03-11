<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <single-banner :img="img" id="banner"></single-banner>
        <my-row>
            <div slot="content" style="margin-bottom: 10%;">
                <my-patter :title="title"></my-patter>

                <el-row>
                    <el-col :span="12" class="grid-left">
                        <el-row>
                            <el-col :span="24" v-for="(card, index) in activityData.slice(0, 3)" :key="index">
                                <my-card-vertical :img="card"></my-card-vertical>
                            </el-col>
                        </el-row>
                    </el-col>
                    <el-col :span="12" style="margin-top: 20%;" class="grid-right">
                        <el-row>
                            <el-col :span="24" v-for="(card, index) in activityData.slice(3, 6)" :key="index">
                                <my-card-vertical :img="card"></my-card-vertical>
                            </el-col>
                        </el-row>
                    </el-col>

                    <my-button :btnText="btnText" :path="path"></my-button>
                </el-row>

                <my-ad :ad="ad"></my-ad>
            </div>
        </my-row>
        
        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import SlideImages from '@/components/base-components/Slide-Images'
import MyPhotos from '@/components/base-components/My-Photos'
export default {
    name: 'Activity',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            img: {
                src: require('../../assets/images/activity/p8.jpg'),
                msg: '活动 banner',
                detailPath: '#'
            },
            // 活动体验数据
            title: '活动体验',
            btnText: '查 看 更 多', 
            path: '#',
            activityData: [
                {
                    src: require('../../assets/images/activity/p2.jpg'),
                    path: '/fuji-activity',
                    msg: {
                        point: 'JAPAN',
                        title: '富 士 山 行',
                        description: '富士山是日本最高峰，终年山顶白雪皑皑。富士山下有五个湖，周围还有原始森林、瀑布、山地植物等。一年四季不仅景色美丽，还有各种休闲娱乐场所。',
                        place: 'MOUNTAIN IN JAPAN'
                    }
                },
                {
                    src: require('../../assets/images/activity/p7.jpg'),
                    path: '#',
                    msg: {
                        point: 'CHINA',
                        title: '焚 香 祈 福',
                        description: '武当山，又名太和山，谢罗山，参上山，是联合国公布的世界文化遗产地，是中国国家重点风景名胜区、道教名山和武当名山和武当拳发源地。',
                        place: 'MOUNTAIN IN CHINA'
                    }
                },
                {
                    src: require('../../assets/images/activity/p3.jpg'),
                    path: '/travel-detail',
                    msg: {
                        point: 'MALDIVES',
                        title: '冲 浪 潜 水',
                        description: '被誉为上帝抛洒人间的项链，是度假、蜜月首选旅游目的地；椰林树影，水清沙幼，全球最著名蜜月圣地，木有之一，也适合家庭度假。',
                        place: 'ISLAND IN MALDIVES'
                    }
                },
                {
                    src: require('../../assets/images/activity/p1.jpg'),
                    path: '#',
                    msg: {
                        point: 'INDIA',
                        title: '异 域 风 情',
                        description: '泰姬陵是印度穆斯林艺术最完美的瑰宝，是世界遗产中的经典杰作之一，被誉为“完美建筑”，又有“印度明珠”的美誉。',
                        place: 'ARCHITECTURE IN INDIA'
                    }
                },
                {
                    src: require('../../assets/images/activity/p5.jpg'),
                    path: '#',
                    msg: {
                        point: 'CHINA',
                        title: '烧 烤 游 艇',
                        description: '泰姬陵是印度穆斯林艺术最完美的瑰宝，是世界遗产中的经典杰作之一，被誉为“完美建筑”，又有“印度明珠”的美誉。',
                        place: 'ISLAND IN CHINA'
                    }
                },
                {
                    src: require('../../assets/images/activity/p4.jpg'),
                    path: '#',
                    msg: {
                        point: 'AMERICA',
                        title: '派 对 狂 欢',
                        description: '夏威夷州由夏威夷群岛组成，位于北太平洋中，首府为檀香山。它除了是美国南方的州外，也是美国唯一一个全部位于热带的州。',
                        place: 'BEACH IN AMERICA'
                    }
                },
                
            ],
            // 广告位数据
            ad: {
                src: require('../../assets/images/activity/p6.jpg'),
                title: '这有一个广告',
                detailPath: '#'
            },
        }
    },
    components: {
        'slide-images': SlideImages,
        'my-photos': MyPhotos
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('banner').style.marginTop = this.navHeight;
    },
}
</script>

<style scoped>

</style>
