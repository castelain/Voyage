<template>
    <div class="ad" v-show="isShow">
        <router-link :to="ad.detailPath">
            <img :src="ad.src" :alt="ad.title">
        </router-link>
        <i class="el-icon-close" title="关闭该广告" @click="closeAd"></i>
    </div>
</template>

<script>
export default {
    name: 'My-Ad',
    props: [ 'ad' ],
    data () {
        return {
            isShow: true
        }
    },
    methods: {
        closeAd: function() {
            this.isShow = false;
        }
    },
}
</script>

<style scoped>
    * {
        margin-top: 80px;
    }
    img {
        width: 100%;
        overflow-y: hidden;
    }
    .ad {
        position: relative;
    } 
    .el-icon-close {
        position: absolute;
        top: 0;
        right: 0;
        background-color:rgba(255, 255, 255, .2);
        padding: 4px;
        cursor: pointer;
    }
</style>
