import { INCREMENT } from "./mutations-types";
// 修改state中的数据必须通过mutations
export default {
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
}