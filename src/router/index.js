import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
<<<<<<< HEAD
import Details from '@/pages/details/index'
=======
import Daytrip from '@/pages/daytrip'
>>>>>>> master

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
<<<<<<< HEAD
      path: '/details',
      name: 'Details',
      component: Details
=======
      path: '/daytrip',
      name: 'Daytrip',
      component: Daytrip
>>>>>>> master
    }
  ]
})
