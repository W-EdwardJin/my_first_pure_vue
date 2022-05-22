<template>
  <div class="demo">
    <h2>学生姓名：{{ name }}</h2>
    <h2>学生年龄：{{ myAge }}</h2>
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
