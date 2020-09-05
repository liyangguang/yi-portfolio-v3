import Vue from 'vue';
import VueRouter from 'vue-router';
import HomePage from '@/views/HomePage.vue';
import ProjectPage from '@/views/ProjectPage.vue';
import SideworkPage from '@/views/SideworkPage.vue';

Vue.use(VueRouter)

const routes = [
  {path: '/', component: HomePage},
  {path: '/sidework', component: SideworkPage},
  {path: '/:projectId', component: ProjectPage},
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
