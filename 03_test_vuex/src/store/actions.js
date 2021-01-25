// Action中执行一些异步操作，比如网络请求
// 类似于mutation 但是是用来异步操作的
// 修改state 不能绕过mutation
export default {
    // context上下文

    // 传递参数，并返回方法一
    // aUpdateInfo(context, payload) {
    //     setTimeout(() => {
    //         context.commit('updateInfo')
    //         console.log(payload.message);

    //         payload.success()
    //     }, 1000);
    // }

    // 传递参数，并返回方法二 Promise
    aUpdateInfo(context, payload) {
        return new Promise((relsove, reject) => {
            setTimeout(() => {
                console.log(payload);

                relsove("11111")
            }, 1000);
        })
    }
}