export default {
    state: {
        name: 'kang'
    },

    //模块内的mutations不要和外边的重复 
    mutations: {
        //
        updatname(state, payload) {
            state.name = 'kkkkkkk'
        }
    },
    getters: {
        fullName(state) {
            return state.name + "11111"
        },
        fullName2(state, getters) {
            return getters.fullName + "2222"
        },
        // 调用根的state
        fullName2(state, getters, rootState) {
            return getters.fullName + "2222" + rootState.counter
        },
    },
    actions: {
        //异步修改名字
        asynUpName(context, payload) {
            setTimeout(() => {
                context.commit('updatname')
                console.log(payload);
            }, 1000);
        }
    },
}