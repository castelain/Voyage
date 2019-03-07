// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import MyContainer from '@/components/layout-components/My-Container'
import MyRow from '@/components/layout-components/My-Row'
import MyHeader from '@/components/base-components/My-Header'
import MyFooter from '@/components/base-components/My-Footer'

// 全局注册组件
Vue.components('my-container', MyContainer)
Vue.components('my-row', MyRow)
Vue.components('my-header', MyHeader)
Vue.components('my-footer', MyFooter)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
