<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <single-banner :img="img" id="banner"></single-banner>

        <my-row>
            <div slot="content">
                <my-patter :title="title1"></my-patter>
                <slide-images :imgs="travelData" :btnText="btnText" :path="path"></slide-images>
                <my-ad :ad="ad1"></my-ad>
                <my-patter :title="title2"></my-patter>
                 <div v-for="(item, index) in activityData" :key="index">
                    <my-card-horizontal :data="item">
                    </my-card-horizontal>
                </div>
                <my-ad :ad="ad2"></my-ad>
                 <my-patter :title="title3">
                    <span v-html="subTitle">
                    </span>
                </my-patter>
                <my-photos :imgs="imgs"></my-photos>
            </div>
        </my-row>
        
        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import SlideImages from '@/components/base-components/Slide-Images'
import MyPhotos from '@/components/base-components/My-Photos'
export default {
    name: 'Home',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            img: {
                src: require('../../assets/images/home/banner.png'),
                msg: '活动 banner',
                detailPath: '#'
            },
            // 推荐旅行数据
            title1: '推荐旅行',
            btnText: '查 看 更 多', 
            path: '/recomment-travel',
            travelData: [
                {
                    src: require('../../assets/images/home/travel1-1.png'),
                    path: '#',
                    msg: {
                        point: 'TAIWAN101',
                        title: '台 北 馥 敦 饭 店',
                        description: '台北馥敦饭店毗邻台湾101，夜景美如画，尽览101全图美景，即刻拥有。',
                        place: 'TAIWAN,CHINA'
                    }
                },
                {
                    src: require('../../assets/images/home/travel2.png'),
                    path: '#',
                    msg: {
                        point: 'MAPLE LEAF',
                        title: '日 本 香 山 公 园',
                        description: '在香山公园漫天的枫叶下感受最纯正的日本情怀，枫叶缓缓飘落，是最美的邂逅。',
                        place: 'JAPAN,ASIA'
                    }
                },
                {
                    src: require('../../assets/images/home/travel3-1.png'),
                    path: '/travel-detail',
                    msg: {
                        point: 'PRIVATE ISLAND',
                        title: 'Kudadoo 私 人 岛 屿',
                        description: 'Kudadoo PRIVATE ISLAND 是马尔代夫的一座田园诗般的岛屿，可以根据私人需求定制。',
                        place: 'MALDIVES,INDIAN OCEAN'
                    }
                },
                // { src: require('../../assets/imgs/Sunset_of_the_Lake_Nam_by_Wang_Jinyu.jpg'), msg: 'travel4' },
            ],
            // 广告位1数据
            ad1: {
                src: require('../../assets/images/home/ad1.png'),
                title: '这有一个广告',
                detailPath: '#'
            },
            // 广告位2数据
            ad2: {
                src: require('../../assets/images/home/ad2.png'),
                title: '这有一个广告',
                detailPath: '#'
            },
            // 活动体验数据
            title2: '活动数据',
            activityData: [
                {
                    title: '水城威尼斯之旅',
                    description: '威尼斯(Venice)，意大利旅游城市，世界著名的历史文化名城威尼斯因”饮水而生，因水而美，因水而兴“的美誉，享有”水城“、”水上都市“、”白岛城“等美称。上帝将眼泪流在了这里，却让它更加晶莹和柔情，就好像一个漂浮在碧波上浪漫的梦。',
                    btnText: '即刻出发',
                    imgSrc: require('../../assets/images/home/activity1.png'),
                    imgPosLeft: true 
                },
                {
                    title: '塞舌尔度假海岛',
                    description: '有人评价，如果说马尔大夫是人间天堂，塞舌尔就是世外仙境，塞舌尔除了拥有和马尔代夫一样水清沙幼的海滩和奢华度假村之外，游客更少，私密性高、还拥有世界一流的天然浴场。《孤独星球》评选塞舌尔为”最佳旅游地“之一。',
                    btnText: '即刻出发',
                    imgSrc: require('../../assets/images/home/activity2.png'),
                    imgPosLeft: false 
                }
            ],
            // 完美瞬间部分数据
            title3: '完美瞬间',
            subTitle: `由VOYAGE<br>活动体验游客拍摄`,
            
            // 拼图照片数据
            imgs: [
                {
                    msg: '土著习俗',
                    src: require('../../assets/images/home/p1.png')
                },
                {
                    msg: '非洲歌舞，热情四射',
                    src: require('../../assets/images/home/p3.png')
                },
                {
                    msg: '享受海岛日光浴',
                    src: require('../../assets/images/home/1.png')
                },
                {
                    msg: '浅书小文，休憩时光',
                    src: require('../../assets/images/home/p2.png')
                },
                {
                    msg: '水石嬉戏',
                    src: require('../../assets/images/home/p4.png')
                },
                {
                    msg: 'Poilane',
                    src: require('../../assets/images/home/p7.png')
                },
                {
                    msg: '海边景观',
                    src: require('../../assets/images/home/p5.png')
                },
                {
                    msg: '一人远行出海',
                    src: require('../../assets/images/home/p8-1.png')
                },

            ]
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
