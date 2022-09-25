import { createRouter, createWebHashHistory } from "vue-router";
import { ref, getCurrentInstance, onMounted, reactive } from "vue";
const routes = [
  {
    path: '/',
    name: 'home',
    redirect: 'home/index',
    component: () => import('../views/home.vue'),
    children: [
      {
        path: '/index',
        name: 'index',
        redirect: '/recommendation',
        component: () => import('../views/index.vue'),
        meta: {},
        children: [
          {
            path: '/recommendation',
            name: 'recommendation',
            component: () => import('../views/recommendation.vue'),
          },
          {
            path: '/customization',
            name: 'customization',
            component: () => import('../views/customization.vue'),
          },
          {
            path: '/songSheet',
            name: 'songSheet',
            component: () => import('../views/songSheet.vue'),
          },
          {
            path: '/rankingList',
            name: 'rankingList',
            component: () => import('../views/rankingList.vue'),
          },
          {
            path: '/singer',
            name: 'singer',
            component: () => import('../views/singer.vue'),
          },
          {
            path: '/latestMusic',
            name: 'latestMusic',
            component: () => import('../views/latestMusic.vue'),
          },

        ]
      },
      {
        path: '/playBlog',
        name: 'playBlog',
        component: () => import('../views/playBlog.vue'),
        meta: {}
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('../views/video.vue'),
        meta: {}
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import('../views/friend.vue'),
        meta: {}
      },
      {
        path: '/zhibo',
        name: 'zhibo',
        component: () => import('../views/zhibo.vue'),
        meta: {}
      },
      {
        path: '/fm',
        name: 'fm',
        component: () => import('../views/fm.vue'),
        meta: {}
      },
      {
        path: '/localDownload',
        name: 'localDownload',
        component: () => import('../views/localDownload.vue'),
        meta: {}
      },
      {
        path: '/latestPlay',
        name: 'latestPlay',
        component: () => import('../views/latestPlay.vue'),
        meta: {}
      },
    ]
  },


]

const router = createRouter({
  history: createWebHashHistory(), // localhost:8080/
  routes,
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    // return { top: 0 }
  },

})
router.beforeEach((to, from, next) => {
  // ...
  // 返回 false 以取消导航
  // return false
  // console.log("to=>", to, "from", from);
  console.log("to=>", to);
  // document.body.scrollTop = 0
  // console.log(document);
  next()
})
router.afterEach((to, from) => {
  let mainDom = document.getElementById('routerView')
  mainDom.scrollTop = 0
  // console.log('mainDom=>', mainDom.scrollTop);

})

export default router