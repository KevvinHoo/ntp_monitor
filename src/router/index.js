import VueRouter from 'vue-router'
import Vue from 'vue'
import Home from '../page/homePage.vue'
import Monitor from '../page/monitorPage.vue'
import Setting from '../page/settingPage.vue'
import Intro from '../page/introPage.vue'
import Frame from '../page/framePage.vue'

Vue.use(VueRouter)


const routes = [
    {
        path: '/',
        component: Frame,
        redirect: "/Intro",
        children: [
            { path: 'Home', component: Home },
            { path: 'Setting', component: Setting },
            { path: 'Monitor', component: Monitor },
        ]
    },
    { path: '/Intro', component: Intro } // 欢迎界面
  ]

  const router = new VueRouter({
    routes
  })

export default router

