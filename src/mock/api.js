const Mock = require('mockjs');

const Random = Mock.Random;
//模拟ajax请求时间
Mock.setup({
  timeout:'200-800'
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


export { API_LOGIN }