import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/index'
import City from '@/pages/city'
import Daytrip from '@/pages/daytrip'
import Indent from '@/pages/indent/indent'

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
      path: '/daytrip',
      name: 'Daytrip',
      component: Daytrip
    }, {
      path: '/indent',
      name: 'Indent',
      component: Indent
    }
  ]
})
