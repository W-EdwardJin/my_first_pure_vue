<template>
  <div class="demo">
    <h2>学校：{{ name }}</h2>
  </div>
</template>

<script>

export default {
  name: 'School',
  data() {
    return {
      name: 'Vue'
    };
  },
  mounted() {
    // console.log(this.eventBus);
    this.$bus.$on('sendStudent', (data) => {
      console.log('School 收到了学生姓名', data);
    });
  },
  beforeDestroy() {
    this.$bus.$off('sendStudent');
  },
}
</script>


<style>
.demo {
  background-color: gray;
}
</style>
