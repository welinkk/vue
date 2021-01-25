import axios from "axios";


// 方法一
// export function request(config, success, failure) {

// // 1.创建axios实例
// const instance = axios.create({
//     baseURL: 'http://123.207.32.32:8000',
//     timeout: 5000
// })

// // 发送真正的网络请求
// instance(config)
//     .then(res => {
//         success(res);
//     })
//     .catch(err => {
//         failure(err)
//     })
// }

// 方法二 Promise
// export function request(config) {
//     return new Promise((resolve, reject) => {
//         // 1.创建axios实例
//         const instance = axios.create({
//             baseURL: 'http://123.207.32.32:8000',
//             timeout: 5000
//         })

//         // 发送真正的网络请求
//         instance(config)
//             .then(res => {
//                 resolve(res)
//             })
//             .catch(err => {
//                 reject(err)
//             })

//     })
// }

// 方法三
export function request(config) {

    // 1.创建axios实例
    const instance = axios.create({
        baseURL: 'http://123.207.32.32:8000',
        timeout: 5000
    })

    // 2.axios拦截器
    // 2.1请求拦截
    instance.interceptors.request.use(
        config => {
            // console.log(config);
            // 为啥用拦截器?

            // 1.比如config中的一些信息不符合服务器的要求

            // 2.比如每次发送网络请求时,都子网在界面中显示一个请求的图标
            // 3.某些网络请求(比如登录token),必须携带一些特殊的信息

            // 必须return一个得到的结果 否则,调用方法得不到结果
            return config
        },
        err => {
            console.log(err);
        }
    )

    // 2.2响应拦截
    instance.interceptors.response.use(
        res => {
            console.log(res.data);
            // 处理完一定要返回数据
            return res.data
        },
        err => {
            console.log(err);
        }
    )

    // 3.发送真正的网络请求 这里本身就是一个Promise
    return instance(config)
}