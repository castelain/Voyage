<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row id="navs">
            <my-nav-inner :navs="navs" slot="content"></my-nav-inner>
        </my-row>

        <my-row>
            <div slot="content" id="search-box">
                <el-input
                    placeholder="酒店名/星级/城市"
                    suffix-icon="el-icon-search"
                    v-model="keyword" class="right" width="30%;">
                </el-input>
            </div>
        </my-row>

        <my-row>
            <div slot="content">
                <el-tabs type="card">
                    <el-tab-pane label="酒店查找">
                        <span slot="label">
                            <img src="../../assets/images/plane-ticket/fire.png" alt="酒店查找">
                            &nbsp;境内特价
                        </span>
                        <hotel-search-tab1></hotel-search-tab1>
                        
                    </el-tab-pane>
                    <el-tab-pane label="按城市搜索">
                    </el-tab-pane>
                    <el-tab-pane label="按景点搜索">
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
import HotelSearchTab1 from '@/components/built-components/Hotel-Search-Tab1'
export default {
    name: 'HotelSearch',
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
                    title: '酒店搜索',
                    path: '/hotel-search'
                }        
            ],
            keyword: '',
        }
    },
    components: {
        'hotel-search-tab1': HotelSearchTab1
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        let content = document.getElementById('navs');
        navs.style.marginTop = this.navHeight;

    },
}
</script>

<style scoped>
   #navs {
       margin-bottom: 4%;
   }
   #search-box {
       width: 30%;
       float: right;
       margin-top: -4%;
   }
</style>
