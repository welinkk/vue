import Vue from 'vue';
import Vuex from 'vuex';
import { INCREMENT } from './mutations-types';

// 安装插件
Vue.use(Vuex)

const moduleA = {
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

const moduleB = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
}

// 创建对象
const store = new Vuex.Store({
    state: {
        counter: 1000,
        students: [
            { id: 110, name: 'kxq', age: 18 },
            { id: 111, name: 'kobe', age: 24 },
            { id: 112, name: 'jams', age: 21 }
        ],
        info: {
            name: "kobe",
            age: 33,
            height: 1.88
        }
    },
    // 修改state中的数据必须通过mutations
    mutations: {
        [INCREMENT](state) {
            state.counter++
        },
        decrement(state) {
            state.counter--
        },
        // 根据用户的变量增加
        inremneCount(state, payload) {
            state.counter += payload.count
        },
        // 添加学生
        addStu(state, stu) {
            state.students.push(stu)
        },
        updateInfo(state) {
            // 异步不允许使用 虽然显示变了，但后台不会变 devtools工具, setTimeout(() => { }, 1000);

            state.info.name = 'welin' //响应式

            // state.info['addr'] = '洛杉矶' //不是响应式，后端添加了数据，但前端不会显示

            // Vue.set(state.info, 'add', '洛杉矶') //响应式

            // delete state.info.age //不是响应式

            // Vue.delete(state.info, 'age'); //响应式

        }
    },
    // Action中执行一些异步操作，比如网络请求
    // 类似于mutation 但是是用来异步操作的
    // 修改state 不能绕过mutation
    actions: {
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
    },
    getters: {
        counterPower(state) {
            return state.counter * state.counter
        },
        more20stu(state) {
            return state.students.filter(s => s.age > 20)
        },
        more20stulength(state, getters) {
            return getters.more20stu.length
        },
        moreAgeStu(state) {
            // return function (age) {
            //     return state.students.filter(s => s.age > age)
            // }
            return age => {
                return state.students.filter(s => s.age > age)
            }
        },

    },
    // 模块化
    modules: {
        a: moduleA,
        b: moduleB,
    }
})

// 导出对象
export default store