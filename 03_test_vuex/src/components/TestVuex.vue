<template>
  <div>
    <h2>sssssss</h2>
    <h2>{{ $store.state.counter }}</h2>
    平方:
    <h2>{{ $store.getters.counterPower }}</h2>
    <h3>{{ $store.getters.more20stu }}</h3>
    <h3>{{ $store.getters.more20stulength }}</h3>
    请输入大于的年龄:
    <input type="text" placeholder="请输入大于的年龄" v-model="age" />
    <h3>{{ $store.getters.moreAgeStu(age) }}</h3>
    <button @click="addStudent">添加学生</button>
    <h3>{{ $store.state.info }}</h3>
    <button @click="upInfo">添加Info</button>

    <h2>-------modules中的内容--------</h2>
    <h2>{{ $store.state.a.name }}</h2>
    <button @click="updateNm">修改名字</button>

    <!-- 调用getters也是部分模块 -->
    <h2>{{ $store.getters.fullName }}</h2>
    <h2>{{ $store.getters.fullName2 }}</h2>
    <h2>{{ $store.getters.fullName3 }}</h2>
    <button @click="asyUpname">异步修改名字</button>
  </div>
</template>

<script>
export default {
  name: "TestVuex",
  props: {
    couter: {
      type: Number,
      default: 0
    }
  },
  components: {},
  directives: {},
  data() {
    return {
      age: 22
    };
  },
  mounted() {},
  methods: {
    // 添加学生
    addStudent() {
      let stu = { id: 113, name: "alan", age: 35 };
      this.$store.commit("addStu", stu);
    },
    upInfo() {
      // this.$store.commit("updateInfo");

      // 传递参数，并返回方法一
      // this.$store.dispatch("aUpdateInfo", {
      //   message: "传递参数",
      //   success: () => {
      //     console.log("里面已经完成");
      //   }
      // });

      // 传递参数，并返回方法二 Promise
      this.$store.dispatch("aUpdateInfo", "我是携带的信息").then(res => {
        console.log("里面完成了");
        console.log(res);
      });
    },
    updateNm() {
      // 调用mutations中的不管是哪个模块的都一样
      this.$store.commit("updatname", "welin");
    },
    asyUpname() {
      this.$store.dispatch("asynUpName", "aaaaa");
    }
  }
};

// 小知识点
// 对象的解构:
const obj = {
  name: "kxq",
  age: 18,
  height: 1.88
};
// {}里不分顺序,也可以少写
const { name, age, height } = obj;
console.log(name, age, height);
</script>

<style scoped></style>
