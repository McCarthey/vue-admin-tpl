import axios from 'axios'

function fetchData(url,methods,data) {
  switch (methods) {
    case 'get':
      return axios({
        url,
        methods,
        params:data
      })
      break;
    case 'post':
      return axios({
        url,
        methods,
        data: data
      })
    default:
      break;
  }
}

export { fetchData }