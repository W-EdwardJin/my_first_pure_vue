<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
    <button @click="sendMsg">传给 school 兄弟组件学生姓名</button>
  </div>
</template>

<script>
export default {
  name: 'Student',
  data() {
    return {
      myAge: 18,
      name: '张三',
    }
  },
  mounted() {
    this.$bus.$emit('sendStudent', this.name + '1223'); // 触发可以在任何时候，不需要在 按钮 里
  },
  methods: {
    sendMsg() {
      this.$bus.$emit('sendStudent', this.name);
    }
  }
}
</script>


<style scoped>
.test {
  background-color: darkgreen;
}
.demo {
  background-color: blue;
}
</style>
