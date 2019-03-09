<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row id="innerNav">
            <my-nav-inner :navs="navs" slot="content"></my-nav-inner>
        </my-row>
        <my-row>
            <div slot="content">
                <el-row>
                    <el-col>
                        <my-patter :title="title" id="patter"></my-patter>
                    </el-col>
                </el-row>
                <el-row :gutter="20">
                    <el-col :span="8"
                            v-for="(img, index) in imgs" 
                            :key="index">
                        <my-card-vertical
                                :img="img">
                        </my-card-vertical>
                    </el-col>
                </el-row>
            </div>
        </my-row>
        <my-button :btnText="btnText" style="margin-bottom: 50px;"></my-button>
        <my-row style="margin-bottom: 100px;">
            <my-ad :ad="ad" slot="content"></my-ad>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'RecommentTravel',
    data () {
        return {
            // 二级导航数据
            navs: [ 
                {    
                    title: '首页>',
                    path: '/'
                },
                {
                    title: '推荐旅行>',
                    path: '/recomment-travel',
                },   
            ],
            title: '推荐旅行',
            btnText: '查看更多',
            ad: {
                src: require('../../assets/images/recommended-travel/ad1.png'),
                title: "这是一个广告",
                detailPath: '#'
            },
            imgs: [
                {
                    src: require('../../assets/images/recommended-travel/1.png'),
                    path: '#',
                    msg: {
                        point: 'TAIWAN101',
                        title: '台 北 馥 敦 饭 店',
                        description: '台北馥敦饭店毗邻台湾101，夜景美如画，尽览101全图美景，即刻拥有。',
                        place: 'TAIWAN,CHINA'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/2.png'),
                    path: '#',
                    msg: {
                        point: 'MAPLE LEAF',
                        title: '日 本 香 山 公 园',
                        description: '在香山公园漫天的枫叶下感受最纯正的日本情怀，枫叶缓缓飘落，是最美的邂逅。',
                        place: 'JAPAN,ASIA'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/3.png'),
                    path: '/travel-detail',
                    msg: {
                        point: 'PRIVATE ISLAND',
                        title: 'Kudadoo 私 人 岛 屿',
                        description: 'Kudadoo PRIVATE ISLAND 是马尔代夫的一座田园诗般的岛屿，可以根据私人需求定制。',
                        place: 'MALDIVES,INDIAN OCEAN'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/4.png'),
                    path: '#',
                    msg: {
                        point: 'BUILDINGS',
                        title: '京 都 名 宿 体 验',
                        description: '身临其境的体验日系生活风格，生活在京都有代表性的民俗建筑，享受日本的生活格调。',
                        place: 'JAPAN,ASIA'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/5.png'),
                    path: '#',
                    msg: {
                        point: 'SEA ANIMAL',
                        title: '深 海 潜 水 体 验',
                        description: '身临其境的体验日系生活风格，生活在京都有代表性的民俗建筑，享受日本的生活格调。',
                        place: 'HAINAN,CHINA'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/6.png'),
                    path: '#',
                    msg: {
                        point: 'SEA ANIMAL',
                        title: '岛 屿 上 的 城 堡',
                        description: '英国伦敦式的城堡建筑风格，让人有英式贵族般的体验。城堡与岛屿的融合，不容错过。',
                        place: 'LODON,ENGLAND'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/7.png'),
                    path: '#',
                    msg: {
                        point: 'BUILDINGS',
                        title: '藏 氏 大 乘 佛 教',
                        description: '去西藏感受神圣的佛教信仰和藏族文化的魅力，建筑就是最好的表达方式。',
                        place: 'XIZANG,CHINA'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/8.png'),
                    path: '#',
                    msg: {
                        point: 'LAVENDER',
                        title: '薰 衣 草 田',
                        description: '碧蓝的天空装饰着一望无际的薰衣草田，独特的香气让人沉醉，美妙的薰衣草沁人心脾。',
                        place: 'ITALY,EUROPE'
                    }
                },
                {
                    src: require('../../assets/images/recommended-travel/9.png'),
                    path: '#',
                    msg: {
                        point: 'BOAT',
                        title: '帆 船 旅 行',
                        description: '自己选择帆船在海上漂流，圆了儿时的船长梦，在哪，去哪，由你决定。',
                        place: 'MALDIVES,INDIAN OCEAN'
                    }
                },

            ]
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('innerNav').style.marginTop = Number.parseInt(this.navHeight) + 'px';
    },
}
</script>

<style scoped>

</style>
