<template>
    <div class="fixed nav" id="nav">
        <el-row>
            <el-col :xs="0" :sm="4" :md="6" :lg="8" :xl="9">&nbsp;</el-col>
            <el-col :xs="24" :sm="12" :md="12" :lg="11" :xl="11">
                <ul class="nav-1">
                    <li v-for="(item,index) in navItems1" :key="index" :id="item.msg">
                        <router-link :to="item.src">
                            {{ item.msg }}
                        </router-link>
                        <span>|</span>
                    </li>
                </ul>
            </el-col>
            <el-col :xs="0" :sm="6" :md="5" :lg="4" :xl="3">
                <el-input v-model="keyword" placeholder="请输入查找内容" suffix-icon="el-icon-search" size="mini">
                </el-input>
            </el-col>
            <el-col :xs="0" :sm="2" :md="1" :lg="1" :xl="1">&nbsp;</el-col>
        </el-row>
        
        <my-row>
            <el-menu mode="horizontal" :default-active="activeIndex" @select="handleSelect" router slot="content" class="nav-2">
                <router-link to="/">
                    <img src="../../assets/images/home/logo.png" alt="logo" class="logo hidden-sm-and-down">
                </router-link>
                <el-menu-item :index="item.src" v-for="(item, index) in navItems2" :key="index">
                    {{ item.msg }}
                </el-menu-item>
            </el-menu>
        </my-row>
    </div>
</template>

<script>
export default {
    name: 'MyHeader',
    data () {
        return {
            keyword: '',
            activeIndex: this.$route.path,
            navItems1: [
                { msg: '登录', src: '/login' },
                { msg: '注册', src: '/register' },
                { msg: '中文', src: '/chinese' },
                { msg: 'ENGLISH', src: '/english' },
                { msg: '关于我们', src: '/about-us'}
            ],
            navItems2: [
                { msg: '首页', src: '/' },
                { msg: '旅行随拍', src: '/travel-photos' },
                { msg: '酒店', src: '/hotel' },
                { msg: '机票', src: '/plane-ticket' },
                { msg: '活动体验', src: '/activity'},
                { msg: '私人订制', src: '/private-order' }
            ],
        }
    },
    methods: {
        handleSelect: function(){

        }
    },
    mounted() {
        console.log(this.$route);
        let el = document.getElementById('中文');
        let links = el.getElementsByTagName('a');
        links[0].style.color = 'rgb(191,191,191)';

        // 根据是否登录，来更改导航
        if(localStorage.getItem('isLogined')){
            this.navItems1[0] =  { msg: localStorage.getItem('phone'), src: '/user-information/' + localStorage.getItem('phone') };
            this.navItems1.push({ msg: '登出', src: '' });

            this.$nextTick(function(){
                let logOut = document.getElementById('登出');
                logOut.addEventListener('click', function(){
                    localStorage.removeItem('isLogined');
                    location.reload();
                });
            })
        }

    },
}
</script>

<style scoped>
/* 导航栏间距：45, 25 */
    * {
        color: #333333;
    }
    .nav {
        background-color: white;
        width: 100%;
    }
    .fixed {
        position: fixed;
        z-index: 100;
        top: 0;
    }
    .nav-1 {
        list-style: none;
        color: rgb(67, 67, 67);
        font-size: 12px;
    }
    .nav-1 > li {
        margin-right: 25px;
        display: inline-block;
        margin-top: 6px;
    }
    .nav-1 span {
        margin-left: 25px;
    }
    .nav-1 a {
        text-decoration: none;
    }
    .unClick {
        color: rgb(191,191,191);
    }
    .nav-2 {
        background-color: transparent;
        font-size: 16px;
        font-weight: bold;
    }
    .nav-2 li {
        margin-right: 45px;
    }
    img {
        float: left;
    }
    .el-input {
        margin-top: 6px;
    }
    .logo {
        margin-right: 20px;
        margin-top: -32px;
    }
</style>
