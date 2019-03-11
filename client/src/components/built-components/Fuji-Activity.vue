<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row id="navs">
            <my-nav-inner :navs="navs" slot="content"></my-nav-inner>
        </my-row>

        <my-row>
            <div slot="content" style="margin-bottom: 10%;">
                <my-patter-vertical :msg="msg1"></my-patter-vertical>

                <el-carousel height="540px" slot="content" id="banner" class="hidden-sm-and-down">
                    <el-carousel-item v-for="(img, index) in imgs" :key="index" id="img">
                        <img :src="img.src" :alt="img.msg">
                    </el-carousel-item>
                </el-carousel>

                <my-patter :title="msg2.title"></my-patter>
                <p class="subTitle" style="margin-bottom: 50px;">{{ msg2.subTitle }}</p>

                <el-row :gutter="20">
                    <el-col :span="8">
                        <img src="../../assets/images/fuji/图层 8.png" alt="详情图">
                    </el-col>
                    <el-col :span="8">
                        <div style="padding: 35% 20px;">
                            日本の着物：着物は日本人の伝統的な
                            民族服です。日本人が最も世界に誇れ
                            る文でもあります。化資産の一つ。
                            和服は実は中国の漢唐から由来するフ
                            ァッション
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../../assets/images/fuji/09.png" alt="详情图">
                    </el-col>
                </el-row>
                
                <el-row>
                    <el-col :span="8">
                        <div style="padding: 20% 20px;">
                            日本の温泉：関連資料によると、日本
                            は北から南までは約2600基の温泉が
                            あり、7.5万軒の温泉があるホテル。
                            日本には毎年、約1.1億人がいるとい
                            う。温泉は日本の総人口に相当する。
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../../assets/images/fuji/图层 5.png" alt="">
                    </el-col>
                    <el-col :span="8">
                        <div style="padding: 25% 20px;">
                            花見：桜、日本の国花、日本語化され
                            たトーテムは、日本人民の生産、生活
                            と感情が密接に融合し、民族文化の深
                            さに根ざしている所。
                        </div>
                    </el-col>
                </el-row>
                
                <el-row :gutter="20">
                    <el-col :span="8">
                        <img src="../../assets/images/fuji/图层 6.png" alt="详情图">
                    </el-col>
                    <el-col :span="8">
                        <div style="padding: 50% 20px;">
                            日本の寿司：寿司は日本の食文化の中
                            で最も楽しむ世界の美食の一つは千年
                            だけではない歴史は世界中の人々にも
                            ますます受けてきた好きです。寿司と
                            いうと人々の第一反応日本からの料
                            理です。
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <img src="../../assets/images/fuji/图层 11.png" alt="详情图">
                    </el-col>
                </el-row>

                <my-button btnText="即 刻 出 发"></my-button>

                <my-ad :ad="ad"></my-ad>

                <my-patter :title="hotels.title"></my-patter>
                <p class="subTitle" style="margin-bottom: 50px;">{{ hotels.subTitle }}</p>
                <el-row>
                    <el-col :span="8" v-for="(hotel, index) in hotels.data" :key="index" class="grid-inner">
                        <my-card-simple :img="hotel"></my-card-simple>
                    </el-col>
                </el-row>

                <my-button btnText="即刻体验"></my-button>
            </div>         
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'FujiActivity',
    data () {
        return {
            // 二级导航数据
            navs: [ 
                {    
                    title: '首页>',
                    path: '/'
                },
                {
                    title: '活动体验>',
                    path: '/activity',
                },
                {
                    title: '富士山行',
                    path: '/fuji-activity'
                }        
            ],
            // 标题部分数据
            msg1: {
                point: 'MOUNTAIN IN JAPAN',
                title: '富士山行——日本著名景点',
                description: '',
                place: 'MALDIVES,INDIAN OCEAN'
            },
            // 轮播图高度
            bannerHeight: null,
            // 轮播图数据
            imgs: [
                {
                    src: require('../../assets/images/fuji/图层 1.png'),
                    msg: '活动详情页面 banner',
                    detailPath: '#'
                },
            ],
            msg2: {
                title: '富士山行',
                subTitle: `日本具有着仅次于文明古国的悠久历史，它在漫长的发展中形成极具特色的民族文化，和服、寿司、赏樱都在向
我们展示着其特有的文化魅力。本次旅行，本旅游团不仅仅只是带您游览富士山，还将带您体验日本民俗文化活动。`
            },
             // 广告位数据
            ad: {
                src: require('../../assets/images/fuji/图层 10.png'),
                title: '这有一个广告',
                detailPath: '#'
            },
            // 旅馆简介
            hotels: {
                title: '旅馆简介',
                subTitle: '本次文化体验活动居住的宾馆为日式家具宾馆，带您体验传统的日本家居文化',
                data: [
                    {
                        src: require('../../assets/images/fuji/图层 2.png'),
                        path: '#',
                        msg: {
                            title: '旅 馆 客 厅',
                            description: '传统日式家具风格，带您体验日式家庭文化的魅力。',
                            info: '畳と低いテーブル'
                        }   
                    },
                    {
                        src: require('../../assets/images/fuji/图层 3.png'),
                        path: '#',
                        msg: {
                            title: '榻 榻 米',
                            description: '榻榻米，旧称“叠席”，就是房间里供人坐或卧的一种家具。榻榻米从盛唐时期传入的日本、韩国等地。',
                            info: '地面に敷くベッド'
                        }   
                    },
                    {
                        src: require('../../assets/images/fuji/图层 4.png'),
                        path: '#',
                        msg: {
                            title: '室 内 温 泉',
                            description: '天然温泉，有着疗养身体，舒适心里的功效，作为日本文化体验旅游，怎么能不泡泡温泉。',
                            info: '湯気のある温泉'
                        }   
                    }
                ]
            }
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        let navs = document.getElementById('navs');
        let img = document.getElementById('img');
        this.bannerHeight = window.getComputedStyle(img).height;
        navs.style.marginTop = this.navHeight;
    },
}
</script>

<style scoped>
    .el-row {
        margin-top: 20px;
    }
    button {
        margin: 50px auto;
    }
    .subTitle {
        margin-top: 20px;
        text-align: center;
    }
</style>
