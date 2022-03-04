import Vue from 'vue'
import VueRouter from 'vue-router'
import PageHome from '@/components/PageHome'
import HelloWorld from '@/components/HelloWorld'
import SleepTime from '@/components/SleepTime'
import CorsCheck from '@/components/CorsCheck'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: PageHome,
  },
  {
    path: '/helloWorld',
    component: HelloWorld,
  },
  {
    path: '/sleepTime',
    component: SleepTime,
  },
  {
    path: '/corsCheck',
    component: CorsCheck,
  },
];

const router = new VueRouter({
  routes,
  mode: 'history'
});

export default router