<template>
    <my-container>
        <my-header slot="my-header"></my-header>
        
        <el-row id="form-banner">
            <el-col :span="24" id="banner-Form">
                <single-banner :img="img" id="banner"></single-banner>
                <my-row>
                    <el-tabs type="card" slot="content" id="form">
                        <el-tab-pane label="境外机票">
                            <el-form :model="form" ref="form" label-width="80px" :rules="rules" :inline="true">
                                <div class="radio-boxs">
                                    <el-radio v-model="form.radio" label="1">单程</el-radio>
                                    <el-radio v-model="form.radio" label="2">往返</el-radio>
                                </div>
                                <el-input v-model="form.from" placeholder="出发城市"></el-input>
                                <el-input v-model="form.to" placeholder="到达城市"></el-input>
                                <el-date-picker
                                    v-model="form.startDate"
                                    type="datetime"
                                    placeholder="出发时间">
                                </el-date-picker>
                                <el-date-picker
                                    v-model="form.endDate"
                                    type="datetime"
                                    placeholder="返程时间">
                                </el-date-picker>
                                <el-button type="warning" @click="onSubmit">搜索</el-button>
                            </el-form>
                        </el-tab-pane>
                        <el-tab-pane label="国内机票">
                            <el-form :model="form" ref="form" label-width="80px" :rules="rules" :inline="true">
                                <div class="radio-boxs">
                                    <el-radio v-model="form.radio" label="1">单程</el-radio>
                                    <el-radio v-model="form.radio" label="2">往返</el-radio>
                                </div>
                                <el-input v-model="form.from" placeholder="出发城市"></el-input>
                                <el-input v-model="form.to" placeholder="到达城市"></el-input>
                                <el-date-picker
                                    v-model="form.startDate"
                                    type="datetime"
                                    placeholder="出发时间">
                                </el-date-picker>
                                <el-date-picker
                                    v-model="form.endDate"
                                    type="datetime"
                                    placeholder="返程时间">
                                </el-date-picker>
                                <el-button type="warning" @click="onSubmit">搜索</el-button>
                            </el-form>
                        </el-tab-pane>
                    </el-tabs>
                </my-row> 
            </el-col>
        </el-row>
        
        <my-row>
            <div slot="content">
                <my-patter :title="title1"></my-patter>
                <el-tabs type="card">
                    <el-tab-pane label="国际特价">
                        <span slot="label">
                            <img src="../../assets/images/plane-ticket/fire.png" alt="国际特价">
                            &nbsp;国际特价
                        </span>
                         <el-row :gutter="20" style="margin-top: 20px;">
                            <el-col :span="8" v-for="(ticket, index) in abroadTickets" :key="index">
                                <my-ticket :ticket="ticket"></my-ticket>
                            </el-col>
                        </el-row>
                        <my-button btnText="查 看 更 多" path="#"></my-button>
                    </el-tab-pane>
                    <el-tab-pane label="北美">
                    </el-tab-pane>
                    <el-tab-pane label="澳洲">
                    </el-tab-pane>
                    <el-tab-pane label="欧洲">
                    </el-tab-pane>
                </el-tabs>
        
                <my-ad :ad="ad"></my-ad>        

                <my-patter :title="title2"></my-patter>
                <el-tabs type="card">
                    <el-tab-pane label="境内特价">
                        <span slot="label">
                            <img src="../../assets/images/plane-ticket/fire.png" alt="境内特价">
                            &nbsp;境内特价
                        </span>
                         <el-row :gutter="20" style="margin-top: 20px;">
                            <el-col :span="8" v-for="(ticket, index) in abroadTickets" :key="index">
                                <my-ticket :ticket="ticket"></my-ticket>
                            </el-col>
                        </el-row>
                        <my-button btnText="查 看 更 多" path="#" style="margin-bottom: 10%;"></my-button>
                    </el-tab-pane>
                    <el-tab-pane label="北京">
                    </el-tab-pane>
                    <el-tab-pane label="上海">
                    </el-tab-pane>
                    <el-tab-pane label="广州">
                    </el-tab-pane>
                </el-tabs>

            </div>
        </my-row>
        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
import MyTicket from '@/components/base-components/My-Ticket'
export default {
    name: 'PlaneTicket',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            img: {
                src: require('../../assets/images/plane-ticket/banner.png'),
                msg: '活动 banner',
                detailPath: '#'
            },
            // 国际特价机票数据
            title1: '国际特价',
            abroadTickets: [
                {
                    to: '上海-夏威夷',
                    back: '夏威夷-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 4200
                },
                {
                    to: '上海-济州岛',
                    back: '济州岛-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 2200
                },
                {
                    to: '上海-海原道',
                    back: '海原道-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 3200
                },
                {
                    to: '上海-甲米岛',
                    back: '甲米岛-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 3580
                },
                {
                    to: '上海-夏下岱',
                    back: '夏下岱-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 4930
                },
                {
                    to: '上海-莫尼卡',
                    back: '莫尼卡-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 3230
                }
            ],
            // 广告位1数据
            ad: {
                src: require('../../assets/images/plane-ticket/guanggao.jpg'),
                title: '这有一个广告',
                detailPath: '#'
            },
            // 境内特价机票数据
            title2: '境内特价',
            abroadTickets: [
                {
                    to: '上海-北京',
                    back: '北京-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 1200
                },
                {
                    to: '上海-山东',
                    back: '山东-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 2230
                },
                {
                    to: '上海-青海',
                    back: '青海-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 2930
                },
                {
                    to: '上海-云南',
                    back: '云南-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 1290
                },
                {
                    to: '上海-天津',
                    back: '天津-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 2200
                },
                {
                    to: '上海-台北',
                    back: '台北-上海',
                    company: '东方航空',
                    msg: '（不含税）',
                    price: 1980
                }
            ],
            form: {
                radio: '2',
                from: '',
                to: '',
                startDate: '',
                endDate: ''
            },
            rules: {
                from: [
                    { require: true, message: '出发城市不可为空', trigger: 'blur' }
                ],
                to: [
                    { require: true, message: '到达城市不可为空', trigger: 'blur' }
                ]
            }
        }
    },
    methods: {
        onSubmit: function() {
            if(!this.form.from && !this.form.to){
                this.$message({
                    type: 'error',
                    message: '出发城市和到达城市不可同时为空'
                });
            }else{
                this.$router.push('#');
                this.$message({
                    type: 'success',
                    message: '提交搜索数据成功，但该功能尚未开启'
                });
            }
        }
    },
    components: {
        'my-ticket': MyTicket
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
    /* #left-btn {
        float: left;
    }
    #right-btn {
        float: right;
    }
    .btns {
        margin-top: 40px;
        margin-bottom: 80px;
    } */
</style>
