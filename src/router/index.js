import Vue from 'vue'
import Router from 'vue-router'
//views
const Index = resolve => require(['@/views/index'], resolve);
const Login = resolve => require(['@/views/login'], resolve);
const UserList = resolve => require(['@/views/main/user'], resolve);
const AdminList = resolve => require(['@/views/main/admin'], resolve);

// //404
const Page404 = resolve => require(['@/views/404'], resolve);
Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/Login',
      name: 'Login',
      component: Login
    }, {
      path: '/',
      name: 'Index',
      component: Index,
      children: [{
        path: 'UserList',
        name: 'UserList',
        component: UserList
      }, {
        path: 'AdminList',
        name: 'AdminList',
        component: AdminList
      }]
    }, {
      path: '/404',
      name: 'Page404',
      component: Page404
    }, {
      path: '*',
      redirect: '/404',
      component: Page404
    }
  ]
})
