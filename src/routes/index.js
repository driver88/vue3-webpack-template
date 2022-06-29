import { createRouter, createWebHashHistory} from 'vue-router'
import Home from './Home'
import About from './About'

export default createRouter({
  // Hash 모드를 사용
  // https://google.com/#/search
  history: createWebHashHistory(),
  // pages
  routes: [
    {
      path:'/',
      component: Home
    },
    {
      path:'/about',
      component: About
    }
  ]
})