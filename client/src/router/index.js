import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/built-components/Home'
import RecommentTravel from '@/components/built-components/Recomment-Travel'
import TravelDetail from '@/components/built-components/Travel-Detail'
import TravelPhotos from '@/components/built-components/Travel-Photos'
import PrivateOrder from '@/components/built-components/Private-Order'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/recomment-travel',
      name: 'recomment-travel',
      component: RecommentTravel
    },
    {
      path: '/travel-detail',
      name: 'travel-detail',
      component: TravelDetail
    },
    {
      path: '/travel-photos',
      name: 'travel-photos',
      component: TravelPhotos
    },
    {
      path: '/private-order',
      name: 'private-order',
      component: PrivateOrder
    }
  ]
})
