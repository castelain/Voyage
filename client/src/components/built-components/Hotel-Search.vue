<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <my-row>
            <div slot="content" id="content">
                <my-nav-inner :navs="navs"></my-nav-inner>

                <el-tabs type="card">
                    <el-tab-pane label="酒店查找">
                        <span slot="label">
                            <img src="../../assets/images/plane-ticket/fire.png" alt="酒店查找">
                            &nbsp;境内特价
                        </span>
                         
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
        }
    },
    mounted() {
        let nav = document.getElementById('nav');
        this.navHeight = window.getComputedStyle(nav).height;
        let content = document.getElementById('content');
        content.style.marginTop = this.navHeight;

    },
}
</script>

<style scoped>

</style>
