import Vue from 'vue'
import Router from 'vue-router'
//views
const Index = resolve => require(['@/views/index'], resolve);
const Login = resolve => require(['@/views/login'], resolve);
// const Example = resolve => require(['@/views/example'], resolve);
// const Process = resolve => require(['@/views/process'], resolve);
// const Advantage = resolve => require(['@/views/advantage'], resolve);
// const Contact = resolve => require(['@/views/contact'], resolve);
// //404
// const Page404 = resolve => require(['@/views/404'], resolve);
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    }, {
      path: '/Index',
      name: 'Index',
      component: Index
    }
  ]
})
