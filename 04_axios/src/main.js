import Vue from 'vue'
import App from './App'
// 1.基本使用
// 方法一
// axios({
//   url: "http://123.207.32.32:8000/home/multidata",
//   method: 'get'
// }).then(res => { console.log(res); })
// // 方法二
// axios.get(
//   // 方法一:
//   'http://123.207.32.32:8000/home/data?type=sell&page=3'
// ).then(res => {
//   console.log(res)
// })
// axios({
//   // 方法二
//   url: 'http://123.207.32.32:8000/home/data',
//   params: {
//     type: 'sell',
//     page: 1
//   }
// }).then(res => {
//   console.log(res)
// })
// 2. axios并发请求
// axios.all([
//   axios({
//     url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   }),
//   axios({
//     url: 'http://123.207.32.32:8000/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(res => {
//   console.log(res);
// })
// 全局配置
// axios.defaults.baseURL = 'http://123.207.32.32:8000'
// axios.defaults.timeout = 5000
//将结果分开
// axios.all([
//   axios({
//     url: '/home/data?type=sell&page=3'
//   }),
//   axios({
//     url: '/home/data',
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   })
// ]).then(axios.spread((res1, res2) => {
//   console.log(res1);
//   console.log(res2);
// }))
// 3.创建对应的axios实例
// const instance1 = axios.create({
//   baseURL: 'http://123.207.32.32:8000',
//   timeout: 5000
// })
// instance1({
//   url: '/home/multidata',
// }).then(res => {
//   console.log(res);
// })
// instance1({
//   url: '/home/data',
//   params: {
//     params: {
//       type: 'sell',
//       page: 1
//     }
//   }
// }).then(res => {
//   console.log(res);
// })
import { request } from './network/request'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})


// network中对应方法一
// request(
//   // 传入三个参数,config,success(),err()
//   {
//     url: 'http://123.207.32.32:8000/home/data?type=sell&page=3'
//   },

//   res => {
//     console.log(res);
//   },
//   err => {
//     console.log(err);
//   }
// )

// 对应network中方法二

request({
  url: '/home/multidata'
}).then(res => {
  console.log(res);
}).catch(err => {
  // console.log(err);
})