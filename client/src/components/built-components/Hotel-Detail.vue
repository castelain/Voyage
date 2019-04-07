<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row id="navs">
            <my-nav-inner :navs="navs" slot="content"></my-nav-inner>
        </my-row>

        <my-row>
            <my-patter-vertical slot="content" :msg="msg"></my-patter-vertical>
        </my-row>

        <my-row class="hidden-sm-and-down">
            <el-carousel height="540px" slot="content" id="banner">
                <el-carousel-item v-for="(img, index) in imgs" :key="index" id="img">
                    <img :src="img.src" :alt="img.msg">
                </el-carousel-item>
            </el-carousel>
        </my-row>
            
        <my-row>
            <el-row slot="content">
                <el-col :span="9" id="side"  style="padding-right: 80px;">
                    <el-row>
                        <el-col :span="24">
                            <my-fieldset title="相 邻 岛 屿" id="details">
                                <p v-for="(point, index) in points" :key="index">
                                    {{ point }}
                                </p>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <my-fieldset title="热 门 设 施 服 务" id="glance">
                                <el-button size="mini" plain v-for="(text, index) in services" :key="index">
                                    {{ text }}
                                </el-button>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                    <el-row class="hidden-sm-and-down">
                        <el-col :span="24">
                            <my-fieldset title="评 价" id="more">
                                <el-button size="mini" type="info" v-for="(text, index) in comments" :key="index">{{ text }}</el-button>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="15" style="text-align: left;">
                   <el-row>
                       <el-col :span="24" style="margin-top: 90px; margin-bottom: 40px;">
                           <span style="font-size: 40px; font-weight: bold;">{{ description1.slice(0, 1) }}</span>
                           <span style="color: rgb(160, 160, 160);">{{ description1.slice(1,) }}</span>
                       </el-col>
                   </el-row>
                    <el-row>
                        <el-col :span="24" style="margin-bottom: 40px; text-align: center;">
                            <img src="../../assets/images/details-in-english/pic mid.png" alt="风景图" style=" width: 100%;">
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" style="color: rgb(160, 160, 160); margin-bottom: 50px;">
                            <p>{{ description2 }}</p>
                        </el-col>
                    </el-row>
                    <my-button btnText="立 即 购 买" id="share"></my-button>
                </el-col>
            </el-row>       
        </my-row>

        <my-row>
            <my-ad :ad="ad" slot="content"></my-ad>    
        </my-row>

        <my-row>
            <my-patter :title="title" slot="content">
                <span v-html="subTitle">
                </span>
            </my-patter>
        </my-row>
        <my-row>
            <my-photos slot="content" :imgs="photos"></my-photos>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import MyPhotos from '@/components/base-components/My-Photos'
export default {
    name: 'HotelDetail',
    data () {
        return {
            // 二级导航数据
            navs: [ 
                {    
                    title: '首页>',
                    path: '/'
                },
                {
                    title: '酒店>',
                    path: '/hotel',
                },
                {
                    title: '酒店详情',
                    path: '/hotel-detail'
                }        
            ],
            // 标题部分数据
            msg: {
                point: 'KOHH LANTA',
                title: '兰达莫拉克度假酒店',
                description: 'Idyllic Maldivian escape customisable to your heart\'s desire',
                place: 'MALDIVES,INDIAN OCEAN'
            },
            // 轮播图高度
            bannerHeight: null,
            // 轮播图数据
            imgs: [
                {
                    src: require('../../assets/images/hotel-detail/hai.jpg'),
                    msg: '酒店详情页面 banner',
                    detailPath: '#'
                },
                 {
                    src: require('../../assets/images/details-in-english/big.png'),
                    msg: '酒店详情页面 banner',
                    detailPath: '#'
                },
            ],
            description1: '兰达莫拉克度假酒店距离卡隆曼尼科蜜拉斯海滩只有几步之遥，设有1个室外游泳池和1间海滨餐厅，提供免费停车场，全面覆盖了免费无线网络连接。酒店的距离Saladan码头只有2.4公里。装饰高雅的空调客房配备了1台平面有线电视、保险箱和冰箱。所有客房都设有私人阳台或露台，享有花园的景色。私人浴室配备了淋浴设施和免费洗浴用品。',
            description2: 'Banana Beach Resort酒店的内部旅游咨询台和24小时前台提供汽车和自行车租赁服务。为了客人更加方便，酒店还提供收费的机场接送服务和班车服务。',
            // 侧边栏数据
            points: [ '库杜岛(Kudadoo Island)','丽迷安屿(Lhaviyani Atoll 07080)','马维尔岛(Maldives)' ],
            services: [ '海滨','禁烟房','酒吧','泳池','早餐' ],
            comments: [ '很美','很浪漫','天堂','赞','舒适', '温馨', '服务优质' ],
            // 广告信息
            ad: {
                src: require('../../assets/images/hotel-detail/guanggao.jpg'),
                title: '这有一个广告',
                detailPath: '#'
            },
            // 酒店风貌数据
            title: '酒店风貌',
            subTitle: '由VOYAGE<br>活动体验游客提供',
            // 拼图照片数据
            photos: [
                {
                    msg: '大气海景房',
                    src: require('../../assets/images/hotel-detail/xiaotu1.jpg')
                },
                {
                    msg: '面朝大海，春暖花开',
                    src: require('../../assets/images/hotel-detail/xiaotu3.jpg')
                },
                {
                    msg: '享受海岛日光浴',
                    src: require('../../assets/images/hotel-detail/xiaotu6.jpg')
                },
                {
                    msg: '浪漫晚霞下的风景',
                    src: require('../../assets/images/hotel-detail/xiaotu2.jpg')
                },
                {
                    msg: '温馨舒适的室内',
                    src: require('../../assets/images/hotel-detail/xiaotu8.jpg')
                },
                {
                    msg: '阳光、沙滩，还有...',
                    src: require('../../assets/images/hotel-detail/xiaotu7.png')
                },
                {
                    msg: '啥，会晒黑？',
                    src: require('../../assets/images/hotel-detail/xiaotu5.png')
                },
                {
                    msg: '走累了，就安心睡个好觉吧',
                    src: require('../../assets/images/hotel-detail/xiaotu8.jpg')
                },
            ]
        }
    },
    components: {
        'my-photos' : MyPhotos
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
    #share {
        margin: 10% auto;
        margin-bottom: -10%;
        text-align: center;
    }
    #side button {
        margin-top: 10px;
    }
    .text-block {
        text-align: center;
        margin-top: 20px;
        margin-left: 0;
        text-align: left;
        margin-left: 20px;
    }
    .text-bold {
        font-weight: bold;
        font-size: 14px;
        color: rgb(160, 160, 160);
    }
    .text-light {
        color: gainsboro;
        font-size: 12px;
    }
    .text-title {
        font-weight: bold;
        font-size: 18px;
        color: rgb(67, 67, 67);
        margin-top: 30px;
        margin-bottom: 30px;
    }
    .text-description {
        font-size: 14px;
        color: rgb(160, 160, 160);
        margin-bottom: 30px;
    }
    #details {
        margin-top: 50px;
    }
    #details > p {
        color: rgb(160, 160, 160);
        text-align: left;
    }
    #ad > img{
        width: 100%;
    }
    #ad {
        text-align: center;
    }
    .text-block {
        text-align: center;
        margin-top: 20px;
    }
</style>

