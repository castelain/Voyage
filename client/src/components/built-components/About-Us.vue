<template>
    <my-container>
        <my-header slot="my-header" id="nav"></my-header>

        <single-banner :img="banner" id="banner"></single-banner>

        <my-row>
            <div slot="content">
                <my-patter :title="about.title"></my-patter>
                <img :src="about.src" :alt="about.title">
                <p class="info">{{ about.description }}</p>
            </div>
        </my-row>
       
        <my-row>
            <my-patter :title="corporation.title" slot="content"></my-patter>
        </my-row>
        <my-row>
            <div slot="content">
                <el-row>
                    <el-col :span="6" v-for="(icon, index) in corporation.icons" :key="index" class="grid-inner">
                        <my-card-icon :icon="icon" class="icon"></my-card-icon>
                    </el-col>
                </el-row>
            </div>
        </my-row>

        <my-row>
            <div slot="content">
                <my-patter :title="team.title"></my-patter>
                <img :src="team.src" :alt="team.title">
            </div>
        </my-row>

        <my-row  style="margin-bottom: 10%;">
            <div slot="content">
                <my-patter :title="contact.title"></my-patter>
                <el-row :gutter="80">
                    <el-col :span="16">
                        <img :src="contact.mapSrc" alt="map">
                    </el-col>
                    <el-col :span="8" id="contact">
                        <p>
                            <span class="light">本部地址：&nbsp; </span>
                            <span>{{ contact.address }}</span>
                        </p>
                        <p>
                            <span class="light">联系电话：&nbsp; </span>
                            <span>{{ contact.phone }}</span>
                        </p>
                        <p>
                            <span class="light">电子邮箱：&nbsp; </span>
                            <span>{{ contact.email }}</span>
                        </p>
                    </el-col>
                </el-row>
                
            </div>
        </my-row>


        <my-footer slot="my-footer"></my-footer>
    </my-container>
</template>

<script>
export default {
    name: 'AAboutUs',
    data () {
        return {
            // 导航栏的高度
            navHeight: null,
            // banner图数据
            banner: {
                src: require('../../assets/images/about-us/banner.jpg'),
                msg: '私人订制 banner',
                detailPath: '#'
            },
            // 关于部分数据
            about: {
                title: '关于VOYAGE',
                src: require('../../assets/images/about-us/about voyage.jpg'),
                description: '读万卷书不如行万里路，世界风光是一本绚烂多彩的书，我们愿意做您这本书的导航者，为您解读书中各处风景的美妙之处，我们愿您有一颗好奇的心去探索它其中的滋味，途中或许有酸、有甜、有苦有欢喜或许还有孤寂，我们愿您能从这旅途中去体会这些从而使自己有一颗更加宽容和包容的心，去体验各处不同的人、事、物、景，让这段旅程能开启您的心灵，放飞自己！'
            },
            // 商务合作数据
            corporation: {
                title: '商务合作',
                icons: [
                    {
                        title: '商务合作',
                        src: require('../../assets/images/about-us/icon-shangwu.jpg'),
                        info: '欢迎各大酒店、机票、景点票务中心浅谈合作'
                    },
                    {
                        title: '媒体合作',
                        src: require('../../assets/images/about-us/icon-meiti.jpg'),
                        info: '欢迎各大媒体网站与VOYAGE合作交流'
                    },
                    {
                        title: '品牌合作',
                        src: require('../../assets/images/about-us/icon-pinpai.jpg'),
                        info: '欢迎各跨界大企业与VOYAGE合作交流'
                    },
                    {
                        title: '推广合作',
                        src: require('../../assets/images/about-us/icon-tuiguang.jpg'),
                        info: '欢迎各品牌网站代理及网络联盟洽谈广告推广合作。'
                    }
                ] 
            },
            // 团队数据
            team: {
                title: '我们的团队',
                src: require('../../assets/images/about-us/team.jpg')
            },
            // 联系我们数据
            contact: {
                title: '联系我们',
                address: '昆明',
                phone: '+028 1234567',
                email: '1192400771@qq.com',
                mapSrc: require('../../assets/images/about-us/map.jpg')
            }
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
    .info {
        font-size: 16px;
        color: rgb(67, 67, 67);
        margin-top: 50px;
    }
    #contact {
        text-align: left;
        margin-top: 10%;
    }
    #contact > p {
        margin-bottom: 20px;
    }
    .light {
        color: rgb(102, 102, 102);
    }
    img {
        width: 100%;
    }
    .info[data-v-526718c2]  {
        text-align: center !important;
    }
</style>
