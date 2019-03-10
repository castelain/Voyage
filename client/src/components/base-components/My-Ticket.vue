<template>
    <div class="block">
        <el-row>
            <el-col :span="12" class="divided-line">
                <div>
                    <img src="../../assets/images/plane-ticket/去.png" alt="icon">
                    <span>{{ ticket.to }}</span>
                </div>
                <div>
                    <img src="../../assets/images/plane-ticket/回.png" alt="icon">
                    <span>{{ ticket.back }}</span>
                </div>
                <div>
                    <p class="light">{{ ticket.company }}</p>
                </div>
            </el-col>
            <el-col :span="12">
                <div>
                    <p>往返票价&nbsp;
                        <span class="light">{{ ticket.msg }}</span>
                    </p>
                </div>
                <div class="price">
                    <span>￥</span>
                    <span class="number">{{ ticket.price }}</span>
                    <span>起</span>
                </div>
                <a href="#" class="light">查看适用时间</a>
            </el-col>
        </el-row>
        
    </div>
</template>

<script>
export default {
    name: 'MyTicket',
    props: [ 'ticket' ],
    data () {
        return {

        }   
    },
}
</script>

<style scoped>
    * {
        vertical-align: middle;
    }
    .block {
        background-image: url('../../assets/images/plane-ticket/bg.png');
        background-position: top;
        background-size: 100% 100%;
        padding: 20px;
        padding-bottom: 5px;
        text-align: left;
        font-size: 14px; 
        margin-bottom: 20px; 
    }
    .block div {
        margin-bottom: 10px;
    }
    .light {
        font-size: 12px;
        color: rgb(160, 160, 160);
    }
    .divided-line {
        /* border-right: 1px  dotted rgba(160, 160, 160, .2);
        height: 100%; */
    }
    a {
        text-decoration: none;
        border-bottom: 1px dotted rgba(160, 160, 160, .2);
    }
    .price {
        color: orange;
        font-size: 10px;
        vertical-align: baseline;
    }
    img {
        margin-right: 5px;
    }
    .number {
        font-size: 24px;
    }
</style>