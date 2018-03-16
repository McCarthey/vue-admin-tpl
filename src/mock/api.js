const Mock = require('mockjs');

const Random = Mock.Random;

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
  data: {
    'list|1-10': [{
      'name': Random.cname(),
      
    }]
  }
})


export { API_LOGIN }