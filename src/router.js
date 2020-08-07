import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectPage from '@/views/ProjectPage.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/', name: 'HomePage', component: HomePage},
  {path: '/:projectId', name: 'ProjectPage', component: ProjectPage},
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router
