<template>
  <div>
    <input v-model="userName"/>
    <button style="margin-left: 20px" @click="searchUser">搜索 github users</button>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'Search',
  data() {
    return {
      userName: '',
    }
  },
  methods: {
    searchUser() {
      axios.get(`https://api.github.com/search/users?q=${this.userName}`).then(
        response => {
          console.log('请求成功', response.data.items);
          this.$eventBus.$emit('getUser', response.data.items)
        },
        error => {
          console.log('请求失败了', error.message);
        }
      );
    }
  }
}
</script>

<style scoped>

</style>