import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/built-components/Home'
import RecommentTravel from '@/components/built-components/Recomment-Travel'
import TravelDetail from '@/components/built-components/Travel-Detail'
import TravelPhotos from '@/components/built-components/Travel-Photos'
import PrivateOrder from '@/components/built-components/Private-Order'
import AboutUs from '@/components/built-components/About-Us'
import Login from '@/components/built-components/Login'
import Register from '@/components/built-components/Register'
import UserInformation from '@/components/built-components/User-Information'
import Activity from '@/components/built-components/Activity'
import FujiActivity from '@/components/built-components/Fuji-Activity'
import PlaneTicket from '@/components/built-components/Plane-Ticket'
import Hotel from '@/components/built-components/Hotel'
import HotelSearch from '@/components/built-components/Hotel-Search'
import HotelDetail from '@/components/built-components/Hotel-Detail'

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
    },
    {
      path: '/about-us',
      name: 'aboutAboutUs',
      component: AboutUs
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/user-information/:phone',
      name: 'user-information',
      component: UserInformation
    },
    {
      path: '/activity',
      name: 'activity',
      component: Activity
    },
    {
      path: '/fuji-activity',
      name: 'fuji-activity',
      component: FujiActivity
    },
    {
      path: '/plane-ticket',
      name: 'plane-ticket',
      component: PlaneTicket
    },
    {
      path: '/hotel',
      name: 'hotel',
      component: Hotel
    },
    {
      path: '/hotel-search',
      name: 'hotel-search',
      component: HotelSearch
    },
    {
      path: '/hotel-detail',
      name: 'hotel-detail',
      component: HotelDetail
    }
  ]
})
