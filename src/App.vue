<template>
  <div>
    <!-- : === v-bind: 动态绑定里的数据是 js 表达式返回的值 -->
    <Student name="李四" :age="18"/>
    <School />
  </div>
</template>

<script>
import Student from './components/Student.vue';
import School from './components/School.vue';

export default {
  name: 'App',
  components: {
    Student,
    School,
  },
}
</script>

<style scoped>

</style>