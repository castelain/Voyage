<template>
    <my-container>
        <my-header slot="my-header"></my-header>

        <single-banner :img="img"></single-banner>
        <my-row>
            <my-patter :title="title1" slot="content"></my-patter>
        </my-row>
        <my-row>
            <slide-images :imgs="travelData" :btnText="btnText" slot="content"></slide-images>
        </my-row>
        <my-row>
            <my-ad :ad="ad1" slot="content"></my-ad>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import SingleBanner from '@/components/base-components/Single-Banner'
import SlideImages from '@/components/base-components/Slide-Images'
export default {
    name: 'Home',
    data () {
        return {
            // banner图数据
            img: {
                src: require('../../assets/images/home/banner.png'),
                msg: '活动 banner',
                detailPath: '#'
            },
            // 推荐旅行数据
            title1: '推荐旅行',
            btnText: '查 看 更 多', 
            travelData: [
                {
                    src: require('../../assets/images/home/travel1.png'),
                    msg: {
                        point: 'TAIWAN101',
                        title: '台 北 馥 敦 饭 店',
                        description: '台北馥敦饭店毗邻台湾101，夜景美如画，尽览101全图美景，即刻拥有。',
                        place: 'TAIWAN,CHINA'
                    }
                },
                {
                    src: require('../../assets/images/home/travel2.png'),
                    msg: {
                        point: 'MAPLE LEAF',
                        title: '日 本 香 山 公 园',
                        description: '在香山公园漫天的枫叶下感受最纯正的日本情怀，枫叶缓缓飘落，是最美的邂逅。',
                        place: 'JAPAN,ASIA'
                    }
                },
                {
                    src: require('../../assets/images/home/travel3.png'),
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
                src: require('../../assets/images/home/ad2.png'),
                title: '这有一个广告'
            }
        }
    },
    components: {
        'single-banner': SingleBanner,
        'slide-images': SlideImages
    }
}
</script>

<style scoped>

</style>
