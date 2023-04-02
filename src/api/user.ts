import request from '@/utils/request'
export function login() {
  return request({
    url: '/login',
    method: 'get',
    headers: {
      needToken: false,
    }
  })
}
export function getUserInfo() {
  return request({
    url: '/getUserInfo',
    method: 'get',
  })
}