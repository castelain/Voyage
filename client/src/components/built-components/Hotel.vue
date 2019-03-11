<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <el-row id="form-banner">
            <el-col :span="24" id="banner-Form">
                <single-banner :img="img" id="banner" style="width: 100%;"></single-banner>
                <my-row>
                    <el-tabs type="card" slot="content" id="form">
                        <el-tab-pane label="单间">
                            <el-form :model="form" ref="form" label-width="80px" :rules="rules" :inline="true">
                                <div class="radio-boxs">
                                    <el-radio v-model="form.radio" label="1">单间</el-radio>
                                    <el-radio v-model="form.radio" label="2">套房</el-radio>
                                </div>
                                <el-input v-model="form.city" placeholder="城市"></el-input>
                                <el-input v-model="form.area" placeholder="区域"></el-input>
                                <el-date-picker
                                    v-model="form.startDate"
                                    type="datetime"
                                    placeholder="入住时间">
                                </el-date-picker>
                                <el-date-picker
                                    v-model="form.endDate"
                                    type="datetime"
                                    placeholder="退房时间">
                                </el-date-picker>
                                <el-button type="warning" @click="onSubmit">搜索</el-button>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="套房">
                            <el-form :model="form" ref="form" label-width="80px" :rules="rules" :inline="true">
                                <div class="radio-boxs">
                                    <el-radio v-model="form.radio" label="1">单间</el-radio>
                                    <el-radio v-model="form.radio" label="2">套房</el-radio>
                                </div>
                                <el-input v-model="form.city" placeholder="城市"></el-input>
                                <el-input v-model="form.area" placeholder="区域"></el-input>
                                <el-date-picker
                                    v-model="form.startDate"
                                    type="datetime"
                                    placeholder="入住时间">
                                </el-date-picker>
                                <el-date-picker
                                    v-model="form.endDate"
                                    type="datetime"
                                    placeholder="退房时间">
                                </el-date-picker>
                                <el-button type="warning" @click="onSubmit">
                                    <router-link to="/hotel-search">搜索</router-link>
                                </el-button>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </my-row> 
            </el-col>
        </el-row>

        <my-row>
            <div slot="content">
                <my-patter :title="title"></my-patter>
                <el-row>
                    <el-col :span="8" v-for="(hotel, index) in hotels" :key="index" class="grid-inner">
                        <my-card-vertical :img="hotel">
                        </my-card-vertical>
                        <div class="price-block">
                            <span class="oldPrice">{{ hotel.oldPrice }}</span>
                            <span class="price">{{ hotel.price }}</span>
                        </div>
                    </el-col>
                </el-row>
                
                <hr>
                <my-button btnText="查 看 更 多" class="btn"></my-button>
            </div>
        </my-row>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'Hotel',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            img: {
                src: require('../../assets/images/hotel/banner.jpg'),
                msg: '活动 banner',
                detailPath: '#'
            },
            form: {
                radio: '2',
                city: '',
                area: '',
                startDate: '',
                endDate: ''
            },
            rules: {
                city: [
                    { require: true, message: '城市不可为空', trigger: 'blur' }
                ]
            },
            // 精品酒店数据
            title: '精品酒店',
            hotels: [
                {
                    src: require('../../assets/images/hotel/1.jpg'),
                    path: '/hotel-detail',
                    msg: {
                        point: 'KOHH LANTA',
                        title: '甲 米 利 亚 纳 休 闲 水 疗 度 假 村',
                        description: 'Layana Resort＆Spa度假村，四周环绕着热带植物，俯瞰美丽的大海，提供室外无边泳池和带免费WiFi的客房。客人可以从度假村直接前往长滩边小摊...',
                        place: ''
                    },
                    oldPrice: '620元',
                    price: '450元'
                },
                {
                    src: require('../../assets/images/hotel/2.jpg'),
                    path: '#',
                    msg: {
                        point: 'KOH LANTA KRABI',
                        title: '香 蕉 海 滩 度 假 酒 店',
                        description: 'Banana Beach Resort酒店距离Klong Dao海滩只有几步之遥，设有1个室外游泳和1间海滨餐厅，提供免费停车场，全面覆盖了免费无线网络连接。酒店距离S...',
                        place: ''
                    },
                    oldPrice: '530元',
                    price: '366元'

                },
                {
                    src: require('../../assets/images/hotel/3.jpg'),
                    path: '#',
                    msg: {
                        point: 'KOCHANG TRAT',
                        title: 'Sunrise Beach Resort 度 假 村',
                        description: 'Sunrise Beach Resort度假村提供海滨简易别墅和海景别墅。住所均配有空调、休息区和带免费洗浴用品的私人浴室。餐厅和酒吧全天营业，供应泰式和西式...',
                        place: ''
                    },
                    oldPrice: '460元',
                    price: '350元'
                },
                {
                    src: require('../../assets/images/hotel/4.jpg'),
                    path: '#',
                    msg: {
                        point: 'TAIWAN101',
                        title: 'Stratophere Hotel 酒 店',
                        description: '酒店拥有标志性的1,149英尺高的塔楼，设有2个游泳池、多个餐饮场所和面积达80,000平方英尺的赌场。这家酒店为客人提供免费WiFi和免费客用...',
                        place: ''
                    },
                    oldPrice: '757元',
                    price: '520元'
                },
                {
                    src: require('../../assets/images/hotel/5.jpg'),
                    path: '#',
                    msg: {
                        point: 'MAPLE LEAF',
                        title: '花 欣 希 尔 温 泉 度 假 酒 店',
                        description: '酒店距离华欣市中心有一小段步行路程，提供5个独特的游泳池、花园和现代化的客房。设备齐全的客房配有空调、平板卫星电视、迷你吧、保险箱以及带...',
                        place: ''
                    },
                    oldPrice: '530元',
                    price: '270元'
                },
                {
                    src: require('../../assets/images/hotel/6.jpg'),
                    path: '#',
                    msg: {
                        point: 'PRIVATE ISLAND',
                        title: 'Kudadoo 私 人 岛 屿',
                        description: 'Kudadoo PRIVATE ISLAND 位于马尔代夫的一座田园诗般的岛屿，可以根据私人需求定制旅行行程旅游设备齐全。',
                        place: ''
                    },
                    oldPrice: '406元',
                    price: '366元'
                },
            ]
        };
    },
    methods: {
        onSubmit: function() {
            if(!this.form.city){
                this.$message({
                    type: 'error',
                    message: '城市不可为空'
                });
            }else{
                // this.$message({
                //     type: 'success',
                //     message: '搜索数据提交成功'
                // });
                this.$router.push( '/hotel-search' );
            }
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('form-banner').style.marginTop = this.navHeight;
    },
}
</script>

<style scoped>
     #banner {
        position: relative;
    }
    #form {
       position: absolute;
       bottom: 120%;
       left: 20%;
       width: 60%;
       background-color: rgba(255, 255, 255, .2);
       padding-bottom: 20px;
       border: none;
    }
    .el-input {
       width: 20%;
   }
   .radio-boxs {
       margin-bottom: 10px; 
       text-align: left;
        margin-left: 6%;
   }
   .btn {
       margin-top: 50px;
       margin-bottom: 10%;
   }
   .price-block {
       margin-top: -10%;
       text-align: left;
       margin-bottom: 20%;
   }
   .oldPrice {
       font-size: 12px;
       color: rgb(160, 160, 160);
       text-decoration: line-through;
   }
   .price {
       color: orange;
       font-size: 20px;
       font-weight: bold;
       margin-left: 10px;
   }
</style>
