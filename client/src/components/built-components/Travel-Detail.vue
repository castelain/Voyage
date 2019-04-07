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
                <el-col :span="9" id="side" style="padding-right: 80px;">
                    <el-row>
                        <el-col :span="24">
                            <my-fieldset title="THE DETAILS" id="details">
                                <p v-for="(point, index) in points" :key="index">
                                    {{ point }}
                                </p>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24">
                            <my-fieldset title="AT A GLANCE" id="glance">
                                <el-button size="mini" plain v-for="(text, index) in services" :key="index">{{ text }}</el-button>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                    <el-row class="hidden-sm-and-down">
                        <el-col :span="24">
                            <my-fieldset title="SEE MORE" id="more">
                                <el-button size="mini" type="info" v-for="(text, index) in comments" :key="index">{{ text }}</el-button>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                    <el-row class="hidden-sm-and-down">
                        <el-col :span="24">
                            <my-fieldset title="SELECT FOR YOU" id="ad">
                                <img :src="adMsg.src" :alt="adMsg.title">
                                <div class="text-block">
                                    <div>
                                        <span class="text-bold">KUDADOO </span>
                                        <span class="text-light">&nbsp;in&nbsp;</span>
                                        <span class="text-bold">{{ adMsg.point }}</span>
                                    </div>
                                    <div class="text-title">
                                        {{ adMsg.title }}
                                    </div>
                                    <div class="text-description">
                                        {{ adMsg.description }}
                                    </div>
                                </div>
                            </my-fieldset>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col :span="15" style="text-align: left;">
                   <el-row>
                       <el-col :span="24" style="margin-top: 90px; margin-bottom: 40px;">
                           <span style="font-size: 40px; font-weight: bold;">T</span>
                           <span style="color: rgb(160, 160, 160);">his all-inclusive private island in the Maldives features breathtaking sun sets, pristine beaches et al but it' the mantra that truly sets it apart from its peers; Kudadoo embodies and embraces the idea of unstructured escapism. Guets can pick and choose what to do, when, as part of the 'AAA' experience - (nearly)anything is available, at any time and anywhere.</span>
                       </el-col>
                   </el-row>
                    <el-row>
                        <el-col :span="24" style="margin-bottom: 60px; text-align: center;">
                            <img src="../../assets/images/details-in-english/pic mid.png" alt="风景图" style=" width: 100%;">
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" style="color: rgb(160, 160, 160);">
                            <p>15 environmentally conscious one- and two-bedroom residences sit above a tranquil and beautiful lagoon with unobstructed ocean views, bedecked with stylish oak floors and handcrafted furniture, large infiniture plunge pools and modern technological necessities.</p>
                            <p style="margin-top: 30px; margin-bottom: 80px;">Vistit&nbsp;&nbsp;&nbsp;<a href="#" style="color: rgb(160, 160, 160);">kudadoo.com</a></p>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :span="24" id="share">
                            <my-button btnText="SHARE"></my-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>           
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'TravelDetail',
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
                {
                    title: '旅行详情',
                    path: '/travel-detail'
                }        
            ],
            // 标题部分数据
            msg: {
                point: 'PRIVATE ISLAND',
                title: 'Kudadoo 私 人 岛 屿',
                description: 'Kudadoo PRIVATE ISLAND 是马尔代夫的一座田园诗般的岛屿，可以根据私人需求定制。',
                place: 'MALDIVES,INDIAN OCEAN'
            },
            // 轮播图高度
            bannerHeight: null,
            // 轮播图数据
            imgs: [
                {
                    src: require('../../assets/images/details-in-english/big.png'),
                    msg: '旅游详情页面 banner',
                    detailPath: '#'
                },
                 {
                    src: require('../../assets/images/details-in-english/big.png'),
                    msg: '旅游详情页面 banner',
                    detailPath: '#'
                },
            ],
            // 侧边栏数据
            points: [ 'Kudadoo Island', 'Lhaviyani Atoll 07080', 'Maldives' ],
            services: ['Resort','Spa','Pool','Gym','Water'],
            comments: ['Maldives','Indian Ocean','Asia','Hotels','Travel', 'the Beach', 'the Coast', 'Remote Retreats'],
            // 广告信息
            adMsg: {
                point: 'PRIVATE ISLAND',
                title: 'Conrad Maldives Rangli Island',
                src: require('../../assets/images/details-in-english/ad small.png'),
                description: 'MALDIVS,INDIAN OCEAN'
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

        let el = document.getElementById('ENGLISH');
        let links = el.getElementsByTagName('a');
        links[0].style.color = 'rgb(191,191,191)';
        document.getElementById('中文').getElementsByTagName('a')[0].style.color = 'rgb(67, 67, 67)';
    },
}
</script>

<style scoped>
    #share {
        margin: 10% auto;
        text-align: center;
    }
    #side button {
        margin-top: 10px;
    }
    .text-block {
        text-align: center;
        margin-top: 20px;
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
</style>
