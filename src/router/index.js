import { createRouter, createWebHistory } from 'vue-router'
import FilmsView from '@/views/FilmsView.vue'
import PeopleView from '@/views/PeopleView.vue'
import LocationsView from '@/views/LocationsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'films',
      component: FilmsView,
    },
    {
      path: '/people',
      name: 'people',
      component: PeopleView,
    },
    {
      path: '/locations',
      name: 'locations',
      component: LocationsView,
    },
  ],
})

export default router
