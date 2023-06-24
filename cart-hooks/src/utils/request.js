import axios from "axios";
const instance = axios.create({
  baseURL: 'http://localhost:8888/', // api 的 base_url
  timeout: 5000, // request timeout
});

instance.interceptors.request.use((config) => {
  // 拦截业务逻辑
  return config
}, err => {
  // 错误的处理
  return Promise.reject(err)
})

instance.interceptors.response.use(res => {
  return res.data
}, err => {
  // 错误的处理
  return Promise.reject(err)
})

const request = (url, method, submitData) => {
  // 负责发送请求: 请求地址，请求方式，提交的数据
  return instance({
    url,
    method,
    [method.toUpperCase() === 'GET' ? 'params' : 'data']: submitData
  })
}

export default request
