<template>
  <div >
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge+1 }}</h2>
    <button @click="increment">点我加年龄</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  // props: ['name', 'age'], // 简单接收

  /**
   * 注意： props 值不要修改，会引起 vue 的 warn 和可能导致一些意想不到的 bug，
   * 因此：在 data 里接收 props 相对应值，且换名，
   * 操作 data 里的数据即可
   * props 的优先级更高，所以到解析 data 时，已经有 this.age 这个数据了
   */ 
  props: {
    name: {
      type: String, 
      required: true, // name 是必要的，无法给 default
    },
    age: {
      type: Number,
      default: 0, // 默认值
    },
  },
  data() {
    return {
      myAge: this.age,
    }
  },
  methods: {
    increment() {
      this.myAge += 1;
    }
  }
}
</script>


<style scoped>
.demo {
  background-color: gray;
}
</style>
