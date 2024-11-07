import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/Home/HomeView.vue'
import TestView from '@/views/TestView/TestView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/who',
      name: 'who',
      component: TestView
    },
    {
      path: '/where',
      name: 'where',
      component: TestView
    },
    {
      path: '/what',
      name: 'what',
      component: TestView
    },
  ],
})

export default router
