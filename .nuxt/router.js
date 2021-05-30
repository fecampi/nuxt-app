import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _4b5e5668 = () => interopDefault(import('../pages/about/index.vue' /* webpackChunkName: "pages/about/index" */))
const _31532be4 = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _9835e4dc = () => interopDefault(import('../pages/posts/index.vue' /* webpackChunkName: "pages/posts/index" */))
const _a0bc9cc2 = () => interopDefault(import('../pages/admin/auth/index.vue' /* webpackChunkName: "pages/admin/auth/index" */))
const _1cb44f38 = () => interopDefault(import('../pages/admin/new-post/index.vue' /* webpackChunkName: "pages/admin/new-post/index" */))
const _2cb4e994 = () => interopDefault(import('../pages/admin/_postId.vue' /* webpackChunkName: "pages/admin/_postId" */))
const _d3c5670c = () => interopDefault(import('../pages/posts/_id.vue' /* webpackChunkName: "pages/posts/_id" */))
const _7a02d3ce = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _4b5e5668,
    name: "about"
  }, {
    path: "/admin",
    component: _31532be4,
    name: "admin"
  }, {
    path: "/posts",
    component: _9835e4dc,
    name: "posts"
  }, {
    path: "/admin/auth",
    component: _a0bc9cc2,
    name: "admin-auth"
  }, {
    path: "/admin/new-post",
    component: _1cb44f38,
    name: "admin-new-post"
  }, {
    path: "/admin/:postId",
    component: _2cb4e994,
    name: "admin-postId"
  }, {
    path: "/posts/:id",
    component: _d3c5670c,
    name: "posts-id"
  }, {
    path: "/",
    component: _7a02d3ce,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
