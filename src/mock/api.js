// const Mock = require('mockjs');

const Random = Mock.Random;
//模拟ajax请求时间
Mock.setup({
  timeout:'200-800'
})
//管理员列表扩展
Random.extend({
  role: function () {
    var roles = ['系统管理员','用户管理员','超级管理员']
    return this.pick(roles)
  }
})

//登录
const API_LOGIN = Mock.mock('/api/login', 'post', {
  msg: 'success',
  code: 200,
  token: Random.string('number',20)
})

//登出
const API_LOGOUT = Mock.mock('/api/logout', 'post', {
  msg: 'success',
  code: 200
})

//用户列表
const USER_LIST = Mock.mock('/api/userList', 'get', {
  msg: 'success',
  code: 200,
  'list|1-10': [{
    'id': Random.integer(1,99999),
    'name': Random.cname(),
    'date': Random.date(),
    'address': Random.province(),
    'webUrl': Random.url()
  }]
})

//管理员列表
const ADMIN_LIST = Mock.mock('/api/adminList', 'get', {
  msg: 'success',
  code: 200,
  'list|1-5': [{
    'id': Random.integer(1, 99999),
    'name': Random.cname(),
    'date': Random.date(),
    'role': Random.role()
  }]
})

//角色列表
const ROLE_LIST = Mock.mock('/api/roleList', 'get', {
  msg: 'success',
  code: 200,
  'list': [{
    'id':3,
    'name':'用户管理员',
    'desc':'一些描述'
  }, {
    'id': 2,
    'name': '系统管理员',
    'desc': '一些描述'
  }, {
    'id': 1,
    'name': '超级管理员',
    'desc': '一些描述'
  }]
})


export { API_LOGIN }