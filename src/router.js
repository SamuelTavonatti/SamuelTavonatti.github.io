import { createRouter, createWebHistory } from 'vue-router'
import HomeView from './views/HomeView.vue'
import ExperienceView from './views/ExperienceView.vue'
import ProjectsView from './views/ProjectsView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/esperienze',
    name: 'experience',
    component: ExperienceView
  },
  {
    path: '/progetti',
    name: 'projects',
    component: ProjectsView
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    
    if (to.hash) {
      // Se stiamo cambiando pagina (es. da /progetti a /#contatti)
      // ritardiamo lo scroll per permettere alla transizione di montare il componente
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            el: to.hash,
            behavior: 'smooth',
            top: 80
          })
        }, 300) // 300ms coincide esattamente con la durata della transizione page-fade
      })
    }
    
    return { top: 0, behavior: 'smooth' }
  }
})

export default router