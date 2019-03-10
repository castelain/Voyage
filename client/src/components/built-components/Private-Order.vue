<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <div @click="order">
            <single-banner :img="banner" id="banner"></single-banner>
        </div>
        
        <my-row>
            <my-patter :title="process.title" slot="content"></my-patter>
        </my-row>
        <my-row>
            <div slot="content">
                <el-row :gutter="20">
                    <el-col :span="6" v-for="(icon, index) in process.icons" :key="index">
                        <my-card-icon :icon="icon"></my-card-icon>
                    </el-col>
                </el-row>
            </div>
        </my-row>

        <my-row>
            <my-patter :title="service.title" slot="content" style="margin-top: 80px;"></my-patter>
        </my-row>
        <my-row>
            <el-row slot="content" :gutter="20">
                <el-col :span="12" v-for="(img, index) in service.imgs" :key="index">
                    <my-card-simple :img="img"></my-card-simple>
                </el-col>
            </el-row>
        </my-row>

        <my-row>
            <my-patter :title="cases.title" slot="content" style="margin-top: 40px;"></my-patter>
        </my-row>
        <my-row>
            <el-row slot="content" :gutter="20">
                <el-col :span="8" v-for="(img, index) in cases.imgs" :key="index">
                    <my-card-simple :img="img"></my-card-simple>
                </el-col>
            </el-row>
        </my-row>

        <!-- 完善信息的表单 -->
        <el-dialog
            :visible.sync="dialogVisible1"
            width="50%"
            @close="dialogVisible1 = false" center>
            <div slot="title">
                <img src="../../assets/images/home/logo.png" alt="logo" id="logo" class="hidden-md-and-down">
                <p class="dialog-title">{{ title1 }}</p>
            </div>
            <div class="dialog-content">
                <p>{{ msg1 }}</p>
                <el-form :model="form1" ref="form1" label-position="top" id="form-1">
                    <el-form-item label="目的地">
                        <el-input v-model="form1.destination" placeholder="旅行目的地"></el-input>
                    </el-form-item>
                    <el-form-item label="出行人数" style="display: inline-block;">
                        <el-input-number v-model="form1.peoples" :min="1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="出行天数" class="right">
                        <el-input-number v-model="form1.days" :min="1"></el-input-number>
                    </el-form-item>
                    <el-form-item label="你的姓名">
                        <el-input v-model="form1.name" placeholder="请输入你的姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio v-model="form1.sex" label="male">男</el-radio>
                        <el-radio v-model="form1.sex" label="female">女</el-radio>
                    </el-form-item>
                    <el-form-item label="联系方式">
                        <el-input v-model="form1.phone" placeholder="请输入你的电话号码"></el-input>
                    </el-form-item>
                    <el-form-item label="其它内容">
                        <el-input
                            type="textarea"
                            :rows="5"
                            placeholder="其它需要我们为您安排的服务（选填）"
                            v-model="form1.other">
                        </el-input>
                    </el-form-item>
                </el-form>
                <span slot="footer">
                    <el-button type="primary" @click="onSubmit" style="width: 100%;">提&nbsp;交&nbsp;需&nbsp;求</el-button>
                </span>
            </div>
        </el-dialog>
        
        <el-dialog
            :visible.sync="dialogVisible2"
            width="50%"
            @close="dialogVisible2 = false" center>
            <div>
                <el-row :gutter="20">
                    <el-col :span="1">&nbsp;</el-col>
                    <el-col :span="12">
                        <p class="dialog-title">{{ title2 }}</p>
                        <p style="text-align: left; margin-top: 30px;">{{ msg2 }}</p>
                    </el-col>
                    <el-col :span="10">
                        <img src="../../assets/images/private-order/03.二维码.jpg" alt="VOYAGE二维码" style="width: 100%;">
                    </el-col>
                    <el-col :span="1">&nbsp;</el-col>
                </el-row>
            </div>
            <span slot="footer">
                <el-button type="primary" @click="dialogVisible2 = false">返&nbsp;回</el-button>
            </span>
        </el-dialog>

        <el-alert
            title="表单提交失败：表单填写不完整！（除了最后一项外，均需填写）"
            type="error"
            center
            show-icon v-show="error" id="error-tip">
        </el-alert>

        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'PrivateOrder',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            banner: {
                src: require('../../assets/images/private-order/1.png'),
                msg: '私人订制 banner',
                detailPath: '#'
            },
            // 定制流程数据
            process: {
                title: '定制流程',
                icons: [
                    {
                        title: '1.提交需求',
                        src: require('../../assets/images/private-order/02.提交需求.jpg'),
                        info: '收到您的定制需求后，VOYAGE私人旅行顾问将主动联系您，就我们需要详细了解的问题与您沟通。'
                    },
                    {
                        title: '2.设计方案',
                        src: require('../../assets/images/private-order/03.设计方案.jpg'),
                        info: 'VOYAGE定制专家将根据您的需求，设计专属的私人旅行方案，提供建议行程和参考价格。'
                    },
                    {
                        title: '3.确认预定',
                        src: require('../../assets/images/private-order/04.确认预订.jpg'),
                        info: '如果您对旅行方案认可，私人旅行顾问将联系您签署合同并收取旅行费用，开始旅行前准备工作。'
                    },
                    {
                        title: '4.尊贵出行',
                        src: require('../../assets/images/private-order/05.尊贵出行.jpg'),
                        info: '旅行期间，VOYAGE服务团队提供7×24小时紧急联络服务，全面保障免去您的后顾之忧！'
                    }
                ] 
            },
            // 服务构成数据
            service: {
                title: '服务构成',
                imgs: [
                    {
                        src: require('../../assets/images/private-order/06.行程设计.jpg'),
                        path: '#',
                        msg: {
                            title: '行 程 设 计',
                            description: '由资深设计师完全按照您的喜好深度定制细致策划，我们会尽最大的努力帮您调整所有的时间和精力还有支出都会花在最值得的旅行体验上。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/07.交通方式.jpg'),
                        path: '#',
                        msg: {
                            title: '交 通 方 式',
                            description: '精选最佳航班出行，按照您的需求提前选择好飞机座位。境外全程乘坐3年内专属豪华商务7-9座用车 、车内不限量提供矿泉水、纸巾等用品。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/08.酒店安排.jpg'),
                        path: '#',
                        msg: {
                            title: '酒 店 安 排',
                            description: '设计师根据您的预算精心挑选安排的当地最具特色的精品酒店，选择标准为地理位置极佳，风景视野好，房间足够特色和宽敞，服务和口碑一流。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/09.用餐安排.jpg'),
                        path: '#',
                        msg: {
                            title: '用 餐 安 排',
                            description: '设计师根据您的预算和口味精心推荐的当地最具特色的美食或米其林大餐，我们会提前1-2个月为您预定好餐厅座位，不愁去了吃不上的遗憾。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/09.服务团队.jpg'),
                        path: '#',
                        msg: {
                            title: '服 务 团 队',
                            description: '由专属私人管家、资深线路设计师、目的地资深向导3人同时为您提供最尊贵的服务，7*24小时紧急热线为您服务。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/10.团费形式.jpg'),
                        path: '#',
                        msg: {
                            title: '团 费 形 式',
                            description: '分项报价，费用组成为旅行花费+定制服务费，每一分花销清楚透明 。特色体验活动，为防售空会第一时间做好预定。'
                        }
                    },
                ]
            },
            // 经典案例数据
            cases: {
                title: '经典案例',
                imgs: [
                    {
                        src: require('../../assets/images/private-order/11.伦敦.jpg'),
                        path: '#',
                        msg: {
                            title: '伦 敦 艺 术 对 话 之 旅',
                            description: '初夏时节，《新旅行》联合VOYAGE邀请周迅和常青莅临伦敦。这一对拥有20年友情的朋友，手持艺术巡礼地图，随伦敦眼缓慢旋转，历数泰晤士河两岸的醒目地标。拜访当代艺术圣殿泰特美术馆，走进Halcyon画廊的玻璃公益展，穿过街头巷尾，感受这里从不缺乏的艺术热忱。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/12.北海道.jpg'),
                        path: '#',
                        msg: {
                            title: '北 海 道 那 年 冬 天 雪 在 飘',
                            description: '邀约12位社会名流乘私人公务机飞抵北海道，共赴雪国盛典。VOYAGE的定制专家特选二世谷私人别墅，让贵宾沉浸于雪景飘扬的奢享世界。在雪场飞驰一天之后，闲暇之余，来到本地知名的米其林餐厅，由行政主厨亲自授课，制作属于自己的米其林晚宴，创造难以忘怀的味觉享受。'
                        }
                    },
                    {
                        src: require('../../assets/images/private-order/13.非洲.jpg'),
                        path: '#',
                        msg: {
                            title: '行 摄 非 洲 超 越 你 的 想 象',
                            description: '邀约中央电视台退休摄影家及30余位摄影发烧友前往非洲，寻找不可错过的风景。在荒原中的孤立村落，探寻辛巴人保持500年的原始生活状态，捕捉珍贵难得的人文景象。作为主题旅行专家，VOYAGE悉心研究目的地，让他们的每一次行摄之旅，都能满载而归。'
                        }
                    },
                ]
            },
            // 完善信息表单的数据
            dialogVisible1: false,
            title1: '完善信息',
            msg1: '我们旅行顾问希望全面的了解需求，如果您方便，请用1分钟的时间填写下列信息。',
            form1: {
                destination: '',
                peoples: null,
                days: null,
                name: '',
                sex: 'male',
                phone: '',
                other: ''
            },

            // 提交表单失败与否
            error: false,

            // 确认表单的数据
            dialogVisible2: false,
            title2: '恭喜您已成功提交定制需求',
            msg2: '在3小时以内，VOYAGE私人旅行顾问会以您预留的联系方式与您取得联系，请您保持通讯畅通。若想了解更多定制信息，可扫描右方二维码，关注VOYAGE私人定制团队的官方微信，获取更多的定制咨询和优惠活动。',
            code: require('../../assets/images/private-order/03.二维码.jpg')

        }
    },
    methods: {
        // 定制表单提交
        onSubmit: function(){
            if( this.form1.name && this.form1.peoples && this.form1.days && this.form1.sex && this.form1.phone && this.form1.destination ){
                this.dialogVisible2 = true;
            }else{
                this.error = true;
            }
            this.dialogVisible1 = false;
        },
        order: function () {
            this.dialogVisible1 = true;
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        document.getElementById('banner').style.marginTop = this.navHeight;
    },
}
</script>

<style scoped>
    .dialog-content {
        width: 70%;
        margin: 0 auto;
    }
    .dialog1-content p {
        font-size: 16px;
    }
    .dialog-title {
        font-size: 20px;
        font-weight: bold;
        color: rgb(67, 67, 67);
        text-align: center;
    }
    #logo {
        margin-top: -11%;
        /* background-color: white; */
    }
    #error-tip{
        position: fixed;
        top: 15%;
    }
</style>
