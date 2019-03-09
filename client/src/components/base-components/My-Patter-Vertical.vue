<template>
    <div class="text-block">
        <div>
            <span class="text-bold"><slot>HIGHLIGHT</slot></span>
            <span class="text-light">&nbsp;in&nbsp;</span>
            <span class="text-bold">{{ msg.point }}</span>
        </div>
        <div class="text-title">
            {{ msg.title }}
        </div>
        <div class="text-description">
            {{ msg.description }}
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyPatterVertical',
    props: [ 'msg' ],
    data () {
        return {

        }
    }
}
</script>

<style scoped>
    .text-block {
        margin-top: 30px;
        margin-bottom: 50px;
        text-align: center;
    }
    .text-bold {
        font-weight: bold;
        font-size: 14px;
        color: rgb(160, 160, 160);
    }
    .text-light {
        color: gainsboro;
        font-size: 12px;
    }
    .text-title {
        font-weight: bold;
        font-size: 48px;
        color: rgb(67, 67, 67);
        margin-top: 20px;
        margin-bottom: 20px;
    }
    .text-description {
        font-size: 18px;
        color: rgb(67, 67, 67);
        margin-bottom: 50px;
    }
</style>
