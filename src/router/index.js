import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(VueRouter);

export default function (/* { store } */) {
  // IMPORTANT! Instantiate Router inside this function

  const Router = new VueRouter({
    scrollBehavior: () => ({ y: 0 }),
    routes,
    // Leave these as they are and change from quasar.conf.js instead!
    mode: process.env.VUE_ROUTER_MODE,
    base: process.env.VUE_ROUTER_BASE,
  })

  return Router
}
