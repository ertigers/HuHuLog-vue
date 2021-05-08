import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'


import Money from '@/views/money/money.vue'
import Labels from '@/views/labels/labels.vue'
import EditLabel from '@/views/labels/edit.vue'
import Statistics from '@/views/statistics/statistics.vue'
import NotFound from '@/views/404/NotFound.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [

  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money,
  },  
  {
    path: '/labels',
    component: Labels,
  }, 
  {
    path: '/labels/edit/:id',
    component: EditLabel,
  },  
  {
    path: '/statistics',
    component: Statistics,
  },  
  // 404页面
  {
    path: '*',
    component: NotFound,
  },  

]

const router = new VueRouter({
  routes
})

export default router
