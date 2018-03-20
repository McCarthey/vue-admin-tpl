import Vue from 'vue'
import Router from 'vue-router'
//views
const Index = resolve => require(['@/views/Index'], resolve);
const Login = resolve => require(['@/views/Login'], resolve);
const UserList = resolve => require(['@/views/main/User'], resolve);
const UserEdit = resolve => require(['@/views/edit/UserEdit'], resolve);
const AdminList = resolve => require(['@/views/main/Admin'], resolve);
const AdminEdit = resolve => require(['@/views/edit/AdminEdit'], resolve);

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
        path: '/UserList',
        name: 'UserList',
        component: UserList
      }, {
        path: '/AdminList',
        name: 'AdminList',
        component: AdminList
      }, {
        path: '/UserEdit/:id',
        name: 'UserEdit',
        component: UserEdit
      }, {
        path: '/AdminEdit/:id',
        name: 'AdminEdit',
        component: AdminEdit
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
