<template>
  <div>
    <!-- : === v-bind: 动态绑定里的数据是 js 表达式返回的值 -->
    <Student name="李四" :age="18"/>
  </div>
</template>

<script>
import Student from './components/Student.vue';

export default {
  name: 'App',
  components: {
    Student,
  },
}
</script>

<style scoped>

</style>