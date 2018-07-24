import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import('./views/Home.vue')
    },
    {
      path: "/apitest",
      name: "ApiTest",
      component: () => import('./views/ApiTest.vue')
    }
  ]
});
