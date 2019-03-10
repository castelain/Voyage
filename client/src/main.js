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
import MyPatterVertical from '@/components/base-components/My-Patter-Vertical'
import MyHeader from '@/components/base-components/My-Header'
import MyFooter from '@/components/base-components/My-Footer'
import MyCardVertical from '@/components/base-components/My-Card-Vertical'
import MyCardHorizontal from '@/components/base-components/My-Card-Horizontal'
import MyCardIcon from '@/components/base-components/My-Card-Icon'
import MyCardSimple from '@/components/base-components/My-Card-Simple'
import MyButton from '@/components/base-components/My-Button'
import MyAd from '@/components/base-components/My-Ad'
import MySideBtn from '@/components/base-components/My-Side-Btn'
import MyNavInner from '@/components/base-components/My-Nav-Inner'
import MyFieldset from '@/components/base-components/My-Fieldset'
import SingleBanner from '@/components/base-components/Single-Banner'
import './assets/styles/global.css'

// 全局注册组件
Vue.component('my-container', MyContainer)
Vue.component('my-row', MyRow)
Vue.component('my-header', MyHeader)
Vue.component('my-footer', MyFooter)
Vue.component('my-patter', MyPatter)
Vue.component('my-card-vertical', MyCardVertical)
Vue.component('my-card-horizontal', MyCardHorizontal)
Vue.component('my-card-simple', MyCardSimple)
Vue.component('my-card-icon', MyCardIcon)
Vue.component('my-button', MyButton)
Vue.component('my-ad', MyAd)
Vue.component('my-side-btn', MySideBtn)
Vue.component('my-nav-inner', MyNavInner)
Vue.component('my-patter-vertical', MyPatterVertical)
Vue.component('my-fieldset', MyFieldset)
Vue.component('single-banner', SingleBanner)

Vue.config.productionTip = false

Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
