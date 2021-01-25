import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import getters from './getters.js';
import moduleA from './modules/moduleA';
import mutations from './mutations';
// 安装插件
Vue.use(Vuex)

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
    mutations,

    actions,
    getters,
    // 模块化
    modules: {
        a: moduleA,
        b: moduleB,
    }
})

// 导出对象
export default store