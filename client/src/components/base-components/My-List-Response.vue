<template>
  <ul>
    <span>{{ list.title }}</span>
    <li v-for="(item, index) in list.data" :key="index" @click="handleSelect($event)">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "MyListResponse",
  props: ["list"],
  data() {
    return {

    };
  },
  methods: {
    //   获取发生点击事件的 <li>对象，为它添加或删除样式
      handleSelect: function(event) {
          event = event ? event : window.event;
          let el = event.srcElement ? event.srcElement : event.target;
          if(el.className.indexOf('selected') !== -1){
              el.classList.remove('selected');
          }else{
              el.classList.add('selected');
          }
      }
  },
};
</script>

<style scoped>
    ul {
        color: #409eff;
        text-align: left;
        margin-bottom: 10px;
    }
    li {
        display: inline-block;
        margin-left: 10px;
        padding: 2px 4px;
        cursor: pointer;
    }
    li:hover {
        background-color: orange;
        color: white;
        border-radius: 4px;
    }
    .selected {
        background-color: #409eff;
        color: white;
        border-radius: 4px;
    }
</style>
