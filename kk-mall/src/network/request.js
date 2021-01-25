import axios from "axios";



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

            return config
        },
        err => {
            console.log(err);
        }
    )

    // 2.2响应拦截
    instance.interceptors.response.use(
        res => {
            // console.log(res.data);
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