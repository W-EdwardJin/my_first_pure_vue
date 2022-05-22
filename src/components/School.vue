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
}
</script>


<style lang="less">
.demo {
  background-color: gray;
}
</style>
