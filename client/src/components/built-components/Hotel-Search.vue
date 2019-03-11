<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row id="navs">
            <my-nav-inner :navs="navs" slot="content"></my-nav-inner>
        </my-row>

        <my-row>
            <div slot="content">
                <el-input
                    placeholder="请输入内容"
                    suffix-icon="el-icon-search"
                    v-model="keyword" class="right">
                </el-input>
                <el-tabs type="card">
                    <el-tab-pane label="酒店查找">
                        <span slot="label">
                            <img src="../../assets/images/plane-ticket/fire.png" alt="酒店查找">
                            &nbsp;境内特价
                        </span>
                        <div id="options-block">
                            <div id="search-block">
                                <!-- 选项列表 -->
                                <el-select v-model="cities" placeholder="请选择" multiple>
                                    <el-option v-for="item in options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value">
                                    </el-option>
                                </el-select>
                                <el-button type="primary" plain>搜 索</el-button>
                            </div>
                            <div v-for="(list, index) in lists" :key="index">
                                <my-list-response :list="list"></my-list-response>
                            </div>
                        </div>
                        <my-button btnText="查 看 更 多" path="#" style="margin-bottom: 10%;"></my-button>
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
import MyListResponse from '@/components/base-components/My-List-Response'
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
            // 搜索选项列表数据
            lists: [
                {
                    title: '区域： ',
                    data: [ '武侯区', '青羊区', '金牛区', '锦江区', '高新区', '成华区', '新都区', '龙泉区', '温江区' ]
                },
                {
                    title: '星级： ',
                    data: [ '一星级', '二星级', '三星级', '四星级', '五星级', '五星级以上' ]
                },
                {
                    title: '价格： ',
                    data: [ '￥1000', '￥2000', '￥3000', '￥3000以上' ]
                },
            ],
            cities: [],
            keyword: '',
            options: [
                {
                    value: '选项1',
                    label: '高兰'
                },
                {
                    value: '选项2',
                    label: '昆明'
                }, 
                {
                    value: '选项3',
                    label: '上海'
                }, 
                {
                    value: '选项4',
                    label: '北京'
                }, 
                {
                    value: '选项5',
                    label: '南京'
                }
            ],
        }
    },
    components: {
        'my-list-response': MyListResponse
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
    #options-block {
        background-color: rgba(160, 160, 160, .1);
        padding: 5px 20px;
    }
    #search-block {
        text-align: left;
        margin-top: 20px;
        margin-bottom: 20px;
    }
</style>
