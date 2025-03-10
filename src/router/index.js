import { createRouter, createWebHistory } from 'vue-router'
import FilmsView from '@/views/FilmsView.vue'
import PeopleView from '@/views/PeopleView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/films',
      name: 'films',
      component: FilmsView,
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView,
    },
  ],
})

export default router
