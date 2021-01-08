import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/login.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/clients',
      name: 'clients',
      component: () => import(/* webpackChunkName: "clients" */ './views/Clients.vue')
    },
    {
      path: '/generate_invoice/:id',
      name: 'generate_invoice',
      component: () => import(/* webpackChunkName: "generate_invoice" */ './views/GenerateInvoice.vue')
    },
    {
      path: '/generate_invoice/:id/:invoice_ref',
      name: 'generate_invoice_modify',
      component: () => import(/* webpackChunkName: "generate_invoice_modify" */ './views/GenerateInvoice.vue')
    },
    {
      path: '/invoice_list/:id',
      name: 'invoice_list_by_client',
      component: () => import(/* webpackChunkName: "invoice_list_by_client" */ './views/InvoiceList.vue')
    },
    {
      path: '/invoice_list',
      name: 'invoice_list',
      component: () => import(/* webpackChunkName: "invoice_list" */ './views/InvoiceList.vue')
    },
  ]
})
