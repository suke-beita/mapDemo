import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/one',
    name: 'one',
    component: () => import('../views/onePage.vue')
  },
  {
    path:'/',
    redirect:"/one"
  }
]

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes
})

export default router
