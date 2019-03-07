// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import MyContainer from '@/components/layout-components/My-Container'
import MyRow from '@/components/layout-components/My-Row'
import MyPatter from '@/components/base-components/My-Patter'
import MyHeader from '@/components/base-components/My-Header'
import MyFooter from '@/components/base-components/My-Footer'
import MyCard from '@/components/base-components/My-Card'
import MyButton from '@/components/base-components/My-Button'
import MyAd from '@/components/base-components/My-Ad'
import './assets/styles/global.css'

// 全局注册组件
Vue.component('my-container', MyContainer)
Vue.component('my-row', MyRow)
Vue.component('my-header', MyHeader)
Vue.component('my-footer', MyFooter)
Vue.component('my-patter', MyPatter)
Vue.component('my-card', MyCard)
Vue.component('my-button', MyButton)
Vue.component('my-ad', MyAd)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
