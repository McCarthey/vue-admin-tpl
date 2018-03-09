import Cookies from 'js-cookie'

export function getToken(){
  return Cookies.get('VUE_ADMIN_TPL_TOKEN')
}

export function setToken(token) {
  return Cookies.set('VUE_ADMIN_TPL_TOKEN',token)
}