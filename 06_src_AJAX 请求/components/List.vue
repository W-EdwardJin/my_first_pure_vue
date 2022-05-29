<template>
  <div>
    <div v-for="item in users" :key="item.id">
      <div>name: {{ item.login }}</div>
      <a :href="item.html_url"><img :src="item.avatar_url" /></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'List',
  data() {
    return {
      users: [],
    };
  },
  mounted() {
    this.$eventBus.$on('getUser', (data) => {
      console.log('收到来自 github 的用户数据', data);
      this.users = data;
    })
  }
}
</script>

<style scoped>

</style>