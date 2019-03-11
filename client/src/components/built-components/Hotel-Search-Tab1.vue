<template>
  <div>
    <div id="options-block">
      <div id="search-block">
        <el-select v-model="cities" placeholder="请选择" multiple>
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          ></el-option>
        </el-select>
        <el-button type="primary" plain>搜 索</el-button>
      </div>
      <div v-for="(list, index) in lists" :key="index">
        <my-list-response :list="list"></my-list-response>
      </div>
    </div>

    <div class="hotel-block">
        <el-row :gutter="40" v-for="(hotel, index) in hotels" :key="index" class="border">
            <el-col :span="10">
                <img :src="hotel.src" :alt="hotel.name" class="full-image">
            </el-col>
            <el-col :span="14" class="info-block">
                <el-row :gutter="20">
                <el-col :span="16">
                    <div>
                        {{ hotel.name }}
                        <img src="../../assets/images/hotel-search/促.png" alt="icon" class="right">
                    </div>
                    <el-rate v-model="hotel.rate" disabled></el-rate>
                    <div style="vertical-align: middle;">
                        <img src="../../assets/images/hotel-search/wifi.png" alt="wifi">
                        <img src="../../assets/images/hotel-search/part.png" alt="stop">
                    </div>
                    <div>
                        <img src="../../assets/images/hotel-search/add.png" alt="address">
                        <span>{{ hotel.address }}</span>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="price">
                        <span style="font-size: 14px;">￥</span>
                        <span>{{ hotel.price }}</span>
                    </div>
                    <el-button type="warning" @click="handleDetail(hotel.path)">查看详情</el-button>  
                </el-col>
                </el-row>
            </el-col>
        </el-row>
    </div>    
    <hr>
    <my-button btnText="查 看 更 多" path="#" style="margin-bottom: 10%;"></my-button>
  </div>
</template>

<script>
import MyListResponse from "@/components/base-components/My-List-Response";
export default {
  name: "HotelSearchTab1",
  data() {
    return {
      // 搜索选项列表数据
      lists: [
        {
          title: "区域： ",
          data: [
            "武侯区",
            "青羊区",
            "金牛区",
            "锦江区",
            "高新区",
            "成华区",
            "新都区",
            "龙泉区",
            "温江区"
          ]
        },
        {
          title: "星级： ",
          data: ["一星级", "二星级", "三星级", "四星级", "五星级", "五星级以上"]
        },
        {
          title: "价格： ",
          data: ["￥1000", "￥2000", "￥3000", "￥3000以上"]
        }
      ],
      cities: [],
      options: [
        {
          value: "选项1",
          label: "高兰"
        },
        {
          value: "选项2",
          label: "昆明"
        },
        {
          value: "选项3",
          label: "上海"
        },
        {
          value: "选项4",
          label: "北京"
        },
        {
          value: "选项5",
          label: "南京"
        }
      ],
      // 酒店数据
      hotels: [
        {
          name: "甲 米 利 亚 休 闲 度 假 村",
          src: require("../../assets/images/hotel-search/jiami.jpg"),
          price: "2100 - 3000",
          address: "高兰市武侯区碧云路8号近二环路",
          path: "/hotel-detail",
          rate: 5
        },
        {
          name: "香 蕉 海 滩 度 假 店",
          src: require("../../assets/images/hotel-search/xiangjiao.jpg"),
          price: "3100 - 3500",
          address: "高兰市青羊区白云路8号近二环路",
          path: "#",
          rate: 5
        },
        {
          name: "华 欣 希 尔 度 假 村",
          src: require("../../assets/images/hotel-search/huaxin.jpg"),
          price: "2400 - 3000",
          address: "高兰市锦江区克云路9号近三环路",
          path: "#",
          rate: 5
        }
      ],

    };
  },
  components: {
    "my-list-response": MyListResponse
  },
  methods: {
      handleDetail: function(path) {
          this.$router.push(path);
      }
  },
};
</script>

<style scoped>
    #options-block {
    background-color: rgba(160, 160, 160, 0.1);
    padding: 5px 20px;
    }
    #search-block {
    text-align: left;
    margin-top: 20px;
    margin-bottom: 20px;
    }
    .hotel-block {
        margin-top: 40px;
    }
    .info-block {
        text-align: left;
        margin: 0 auto;
    }
    .info-block div {
        margin-top: 10px;
    }
    .info-block img {
        margin-right: 10px;
    }
    .border {
        padding: 20px 40px;
        margin-top: 10px;
        border: 1px solid rgba(160, 160, 160, 0.1);
    }
    .price {
        color: orangered;
        font-size: 18px;
        margin-bottom: 40px;
    }
    hr {
        margin-top: 8%;
        margin-bottom: 5%;
    }
</style>
