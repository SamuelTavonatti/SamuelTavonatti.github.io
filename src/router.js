import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectsView from './views/ProjectsView.vue'

const routes = [
  { 
    path: '/', 
    name: 'Home', 
    component: HomeView 
  },
  { 
    path: '/esperienze', 
    name: 'Experience', 
    component: ExperienceView 
  },
  { 
    path: '/progetti', 
    name: 'Projects', 
    component: ProjectsView 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return {
        el: to.hash,
        behavior: 'smooth'
      }
    }
    if (savedPosition) {
      return { ...savedPosition, behavior: 'smooth' }
    }
    return { top: 0, behavior: 'smooth' }
  }
})

export default router