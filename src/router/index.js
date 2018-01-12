import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Details from '@/pages/details/index'
import Daytrip from '@/pages/daytrip'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    }, {
      path: '/city',
      name: 'City',
      component: City
    }, {
      path: '/details',
      name: 'Details',
      component: Details
    }, {
      path: '/daytrip',
      name: 'Daytrip',
      component: Daytrip
    }
  ]
})
