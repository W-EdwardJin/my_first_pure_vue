<template>
  <div>
    <img src="./assets/logo.png" alt="logo" ref="img">
    <button @click="showMsg" ref="button">点我查 DOM</button>
    <School ref="school"></School>
  </div>
</template>

<script>
import School from './components/School.vue';

export default {
  name: 'App',
  components: {
    School,
  },
  methods: {
    showMsg() {
      console.log(this.$refs);
    }
  }
}
</script>

<style scoped>

</style>